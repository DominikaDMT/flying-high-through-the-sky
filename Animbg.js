class AnimBg {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
    }

    listenCursosMove(event) {
        const {
            clientX,
            clientY
        } = event;
        // współrzędne środka strony:
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = (clientX - centerX);
        const moveY = (clientY - centerY);

        this.elements.forEach(element => this.moveElement(element, moveX, moveY ))
    }

    moveElement(element, moveX, moveY) {
        const ratioX = -element.getAttribute('ratioX');
        const ratioY = -element.getAttribute('ratioY');

        element.style.transform = `translate(${moveX*ratioX}px, ${moveY*ratioY}px)`;


    }

}