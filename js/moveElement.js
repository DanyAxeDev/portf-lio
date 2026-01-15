const icons = [
    '<i class="fa-brands fa-html5 uianimated left delay-100"></i>',
    '<i class="fa-brands fa-css3-alt uianimated right delay-100"></i>',
    '<i class="fa-brands fa-js uianimated top delay-100"></i>',
    '<i class="fa-brands fa-node-js uianimated bottom delay-100"></i>',
    '<i class="fa-brands fa-react uianimated left delay-100"></i>',
    '<i class="fa-brands fa-bootstrap uianimated right delay-100"></i>',
    '<i class="fa-brands fa-java uianimated top delay-100"></i>',
    '<i class="fa-brands fa-square-git uianimated bottom delay-100"></i>',
    '<i class="fa-brands fa-docker uianimated left delay-100"></i>',
    '<i class="fa-brands fa-python uianimated right delay-100"></i>',
    '<i class="fa-solid fa-leaf uianimated top delay-100"></i>'
];

const container = document.getElementById("container");
const positions = [];
const MIN_DISTANCE = 50;

function isTooClose(x, y) {
    return positions.some(pos => {
        const dx = pos.x - x;
        const dy = pos.y - y;
        return Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE;
    });
}

function getSafePosition(elementWidth, elementHeight) {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    let x, y, attempts = 0;
    do {
        x = Math.random() * (containerWidth - elementWidth);
        y = Math.random() * (containerHeight - elementHeight);
        attempts++;
        if (attempts > 100) break;
    } while (isTooClose(x, y));

    positions.push({ x, y });
    return { x, y };
}

function createFloatingIcon(iconHTML) {
    const div = document.createElement("div");
    div.classList.add("floating-item");
    div.innerHTML = iconHTML;
    div.style.position = 'absolute';
    container.appendChild(div);

    const rect = div.getBoundingClientRect();
    const { x, y } = getSafePosition(rect.width, rect.height);

    div.style.left = `${x}px`;
    div.style.top = `${y}px`;

    let isDragging = false;
    let shiftX = 0;
    let shiftY = 0;
    let wasInContainer = true;

    function startDrag(clientX, clientY) {
        if (isDragging) return;
        
        isDragging = true;
        const rect = div.getBoundingClientRect();
        
        // Calcular o offset do clique/touch em relação ao elemento
        shiftX = clientX - rect.left;
        shiftY = clientY - rect.top;

        // Salvar se estava no container
        wasInContainer = container.contains(div);

        // Mover para body com position fixed para permitir movimento livre
        if (wasInContainer) {
            const absoluteLeft = rect.left;
            const absoluteTop = rect.top;
            
            div.style.position = 'fixed';
            div.style.left = `${absoluteLeft}px`;
            div.style.top = `${absoluteTop}px`;
            document.body.appendChild(div);
        }

        div.style.zIndex = 1000;
        div.style.cursor = 'grabbing';

        function moveAt(clientX, clientY) {
            // Calcular nova posição em relação ao viewport (fixed)
            const newX = clientX - shiftX;
            const newY = clientY - shiftY;
            
            div.style.left = `${newX}px`;
            div.style.top = `${newY}px`;
        }

        function onMouseMove(event) {
            if (!isDragging) return;
            moveAt(event.clientX, event.clientY);
        }

        function onTouchMove(event) {
            if (!isDragging) return;
            event.preventDefault(); // Prevenir scroll
            const touch = event.touches[0] || event.changedTouches[0];
            if (touch) {
                moveAt(touch.clientX, touch.clientY);
            }
        }

        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            currentTouch = null;
            
            const finalRect = div.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            // Sempre retornar ao container, calculando posição relativa
            // mesmo que esteja fora dos limites visíveis
            const relativeLeft = finalRect.left - containerRect.left;
            const relativeTop = finalRect.top - containerRect.top;
            
            div.style.position = 'absolute';
            div.style.left = `${relativeLeft}px`;
            div.style.top = `${relativeTop}px`;
            container.appendChild(div);
            
            div.style.zIndex = '';
            div.style.cursor = 'grab';
            
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchend', endDrag);
            document.removeEventListener('touchcancel', endDrag);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('touchmove', onTouchMove, { passive: false });
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
        document.addEventListener('touchcancel', endDrag);
    }

    // Eventos de mouse
    div.addEventListener('mousedown', (event) => {
        event.preventDefault();
        startDrag(event.clientX, event.clientY);
    });

    // Eventos de touch
    div.addEventListener('touchstart', (event) => {
        event.preventDefault();
        const touch = event.touches[0];
        if (touch) {
            currentTouch = touch.identifier;
            startDrag(touch.clientX, touch.clientY);
        }
    }, { passive: false });

    div.ondragstart = () => false;
}

icons.forEach(icon => createFloatingIcon(icon));

// Função para corrigir ícones que possam estar com position: fixed
function fixStickyIcons() {
    const floatingItems = document.querySelectorAll('.floating-item');
    if (floatingItems.length === 0) return;
    
    const containerRect = container.getBoundingClientRect();
    
    floatingItems.forEach(item => {
        const computedStyle = window.getComputedStyle(item);
        if (computedStyle.position === 'fixed' || !container.contains(item)) {
            const itemRect = item.getBoundingClientRect();
            const relativeLeft = itemRect.left - containerRect.left;
            const relativeTop = itemRect.top - containerRect.top;
            
            item.style.position = 'absolute';
            item.style.left = `${relativeLeft}px`;
            item.style.top = `${relativeTop}px`;
            container.appendChild(item);
        }
    });
}

// Corrigir ícones após serem criados
setTimeout(fixStickyIcons, 100);
