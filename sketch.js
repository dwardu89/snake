var s;
var scl = 20;
var frame_rate = 10;
var food;
var game_width = 600;
var game_height = 600;
var info_height = 50;
var cnv;

function setup() {
  // Setup code here
  cnv = createCanvas(game_width,game_height+info_height);
  centerCanvas();
  s = new Snake(game_width, game_height);
  frameRate(frame_rate);
  dropFood();
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function dropFood() {
  food = new Food(game_width, game_height, scl);
}

function mousePressed() {
  s.activateSuperPower();
}
function show_info_bar() {
  fill(100, 80, 255);
  rect(0, game_height, game_width, info_height);
  show_score();
}

function show_score() {
textSize(32);
fill(255, 176, 80);
text("High Score: " + s.top_score, 10, game_height + info_height /1.4);
}

function draw(){
  // Drawing code here
  background(51);
  if (s.death()) {
    frameRate(frame_rate);
    dropFood();
  }
  s.update();
  s.show();
  if (s.eat(food)) {
    dropFood();
  }

  fill(food.r, food.g, food.b);
  rect(food.x, food.y, scl, scl);

  show_info_bar();
}

function keyPressed() {
  s.dir(keyCode)
}
