class Gui
{
    constructor()
    {
        this.gridSize = 32;
        this.createButtons();
    }



    update()
    {
        if(mouseY > height - 64)
        {
            this.mouseOnGui = true;
        }
        else
        {
            this.mouseOnGui = false;
        }
    }

    draw()
    {
        fill(64);
        noStroke();
        rect(-width/2,height/2-64,width,64);

        this.drawButtons();

        if(this.mouseOnGui)
            {
                fill(0,255,0,128);
                let x = this.gridSize*Math.floor((mouseX-width/2)/this.gridSize);
                let y = this.gridSize*Math.floor((mouseY-height/2)/this.gridSize);
                rect(x,y,this.gridSize,this.gridSize);
            }
            
    }

    drawButtons()
    {
        fill(255,0,0);
        for(let i = 0 ; i <= 39 ; i++)
            this.buttons[i].drawSprite(i);

    }

    mousePressed()
    {
        let x = Math.floor((mouseX-width/2)/this.gridSize);
        let y = Math.floor((mouseY-height/2)/this.gridSize);
        x += 10;
        y -= 8;
        let index = x + y * 20;
        if(index < 0 || index > 39)
        {
            console.warn("Clicked outside of the GUI area! Not performing any action");
            return;
        } 

        this.buttons[index].callback(index);
    }

    createButtons()
    {
        this.buttons = [];
        for(let i = 0 ; i <= 39 ; i++)
            this.buttons[i] = this.createSingleButton(this.buttonDrawSpriteUndefined,i,this.buttonCallbackUndefined);



    }

    buttonDrawSpriteUndefined(index)
    {
        let c = (index * 568.17) % 255
        fill(c,0,0);
        let x = 32*(index%20) - width/2 + 16;
        let y;
        if(index > 20)
            y = width/2-64 + 16;
            else
            y = width/2 - 32 + 16;
        ellipse(x,y,32,32);
    }


    buttonCallbackUndefined(index)
    {
        console.log("This button doesn't have a callback defined yet: " + index);
    }

    createSingleButton(sprite, index, callback)
    {
        let obj = {};
        obj.drawSprite = sprite;
        obj.index = index;
        obj.callback = callback;
        return obj;
    }
}