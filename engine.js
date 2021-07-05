class Engine
{
    setup()
    {
        console.log("Engine setup");
        this.engineOffsetX = width/2;
        this.engineOffsetY = height/2;

        this.world = new World();
        this.gui = new Gui();
        this.inputManager = new InputManager();
        this.time = 0;
    }

    updateAndDraw()
    {
        this.update();
        this.draw();
    }

    draw()
    {
        this.world.draw();
        this.gui.draw();

    }

    update()
    {
        this.time += 0.01;
        this.gui.update();
        this.world.update();
    }
}