const icons = [
    '<i class="fa-brands fa-html5 uianimated left delay-100"></i>',
    '<i class="fa-brands fa-css3-alt uianimated right delay-100"></i>',
    '<i class="fa-brands fa-js uianimated top delay-100"></i>',
    '<i class="fa-brands fa-node-js uianimated bottom delay-100"></i>',
    '<i class="fa-brands fa-react uianimated left delay-100"></i>',
    '<i class="fa-brands fa-bootstrap uianimated right delay-100"></i>',
    '<i class="fa-brands fa-java uianimated top delay-100"></i>',
    '<i class="fa-brands fa-square-git uianimated bottom delay-100"></i>'
];

const container = document.getElementById("container");
const positions = [];
const MIN_DISTANCE = 50;

function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    || window.matchMedia("(pointer: coarse)").matches;
}

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

    div.addEventListener('mousedown', (event) => {
        let shiftX = event.clientX - div.getBoundingClientRect().left;
        let shiftY = event.clientY - div.getBoundingClientRect().top;

        div.style.zIndex = 1000;
        document.body.append(div);

        function moveAt(pageX, pageY) {
            div.style.left = pageX - shiftX + 'px';
            div.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);
        div.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
        });

        if (!isMobile()) {
            div.addEventListener('mousedown', onMouseDown);
        }

        div.ondragstart = () => false;
    });
}

icons.forEach(icon => createFloatingIcon(icon));
