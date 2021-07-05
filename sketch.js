var engine;

function preload() {
  }

function setup() {
    textFont('Roboto');

    let canvas = createCanvas(640,640,WEBGL);
    let containerlist = document.getElementsByClassName("sketch");
    let container = containerlist[0];
    canvas.parent(container);
    frameRate(60);

    engine = new Engine();
    engine.setup();
}



function draw() {
    engine.updateAndDraw();
}

