class InputManager
{
    constructor() {
    }
    mousePressed() {
        if(engine.gui.mouseOnGui)
            engine.gui.mousePressed();
    }

    mouseClicked() {

    }

    mouseDragged() {

    }
}

function mousePressed() {
    engine.inputManager.mousePressed();
}

function mouseClicked() {
    engine.inputManager.mouseClicked();
}

function mouseDragged() {
    engine.inputManager.mouseDragged();
}