function Food(xMax, yMax,scl) {
  var cols = floor(xMax / scl);
  var rows = floor(yMax / scl);

  var x = floor(random(cols)) * scl;
  var y = floor(random(rows)) * scl;

  this.x = x;
  this.y = y;

  this.r = 255;
  this.g = 0;
  this.b = 0;

  this.canEat = function(x, y) {
    var d = dist(this.x, this.y, x, y);
    if (d < 1) {
      return true;
    } else {
      return false;
    }
  }
}
