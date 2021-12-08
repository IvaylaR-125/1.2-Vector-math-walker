let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker(200, 200);
}

function draw() {
  background(220,0,120);
  walker.update();
  walker.show();
}