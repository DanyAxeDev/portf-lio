const icons = ['<i class="fa-brands fa-html5 uianimated left delay-100"></i>', '<i class="fa-brands fa-css uianimated right delay-100"></i>', '<i class="fa-brands fa-js uianimated top delay-100"></i>', '<i class="fa-brands fa-node-js uianimated bottom delay-100"></i>', '<i class="fa-brands fa-react uianimated left delay-100"></i>', '<i class="fa-brands fa-bootstrap uianimated right delay-100"></i>', '<i class="fa-brands fa-java uianimated top delay-100"></i>', '<i class="fa-brands fa-square-git uianimated bottom delay-100"></i>'];
const container = document.getElementById("container");

function getRandomPercentage(min, max) {
    return Math.random() * (max - min) + min;
}

function createFloatingIcon(icon) {
    let div = document.createElement("div");
    div.classList.add("floating-item");
    div.innerHTML = icon;
    div.style.left = `${getRandomPercentage(1, 90)}%`;
    div.style.top = `${getRandomPercentage(1, 90)}%`;

    div.addEventListener('mousedown', (event) => {
        let shiftX = event.clientX - div.getBoundingClientRect().left;
        let shiftY = event.clientY - div.getBoundingClientRect().top;

        div.style.position = 'absolute';
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

        div.ondragstart = () => false;
    });

    container.appendChild(div);
}

icons.forEach(icon => createFloatingIcon(icon));