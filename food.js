function Food(scl) {
  var cols = floor(width / scl);
  var rows = floor(height / scl);

  var x = floor(random(cols)) * scl;
  var y = floor(random(rows)) * scl;

  this.x = x;
  this.y = y;

  this.r = constrain(floor(random(255)), 100,255);
  this.g = constrain(floor(random(255)), 100,255);
  this.b = constrain(floor(random(255)), 100,255);

  this.canEat = function(x, y) {
    var d = dist(this.x, this.y, x, y);
    if (d < 1) {
      return true;
    } else {
      return false;
    }
  }
}
