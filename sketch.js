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

function draw(){
  // Drawing code here
  var final_frame_rate =  constrain(frame_rate + s.total, 0, 25);
  console.log(final_frame_rate);
  frameRate(final_frame_rate);
  background(51);
  s.death();
  s.update();
  s.show();
  if (s.eat(food)) {
    pickLocation();
  }
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  s.dir(keyCode)
}
