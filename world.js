class World
{
    constructor()
    {
        this.gridSize = 32;
    }
    update()
    {

    }

    draw()
    {
        background(255);
        this.drawGrid();
        this.drawCursor();
    }

    drawCursor()
    {
        noStroke();
        let zeroToOne = ((sin(engine.time * 5) + 1)/2)
        let alpha = 64 + 128*zeroToOne;
        fill(0,255,0,alpha);
        let x = this.gridSize*Math.floor((mouseX-width/2)/this.gridSize);
        let y = this.gridSize*Math.floor((mouseY-height/2)/this.gridSize);
        rect(x,y,this.gridSize,this.gridSize);

    }

    drawGrid()
    {
        noFill();
        stroke(0);

        for(let i = -width/2 ; i < width/2 ; i+= this.gridSize)
        {
            line(i,-height/2,i,height/2);
        }

        for(let i = -height/2 ; i < height/2 ; i+= this.gridSize)
        {
            line(-width/2,i,width/2,i);
        }
    }
}