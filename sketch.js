var s;
var scl = 20;
var frame_rate = 10;
var food;

function setup() {
  // Setup code here
  createCanvas(600,600);
  s = new Snake();
  frameRate(frame_rate);
  pickLocation();
}

function pickLocation() {
  food = new Food(scl);
}

function mousePressed() {
  s.activateSuperPower();
}

function draw(){
  // Drawing code here
  background(51);
  s.death();
  s.update();
  s.show();
  if (s.eat(food)) {
    pickLocation();
  }

  fill(food.r, food.g, food.b);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  s.dir(keyCode)
}
