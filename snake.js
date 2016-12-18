function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 1;
  this.top_score = 0;
  this.tail = []
  this.previousDirection = RIGHT_ARROW;

  this.reset = function() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 1;
    this.tail = []
    this.previousDirection = RIGHT_ARROW;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('Snake Died!');
        this.reset();
        return true;
      }
    }
    return false;
  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    fill(255);
      for (var i = 0; i < this.total; i ++) {
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
    fill(200);
    rect(this.x, this.y, scl, scl);
  }

this.changedir = function(x, y) {
  this.xspeed = x;
  this.yspeed = y;
}

this.isOppositeDirection = function (direction) {
  if (direction === UP_ARROW && this.previousDirection === DOWN_ARROW) {
    return true;
  } else if (direction === DOWN_ARROW && this.previousDirection === UP_ARROW) {
    return true;
  } else if (direction === LEFT_ARROW && this.previousDirection === RIGHT_ARROW) {
    return true;
  } else if (direction === RIGHT_ARROW && this.previousDirection === LEFT_ARROW) {
    return true;
  }
}

  this.dir = function(direction) {
    if (this.isOppositeDirection(direction)) {
      console.log('Opposite Direction Detected!');
      return ;
    } else if (direction === UP_ARROW) {
      this.changedir(0, -1);
    } else if (direction === DOWN_ARROW) {
      s.changedir(0, 1);
    } else if (direction === LEFT_ARROW) {
      s.changedir(-1, 0);
    } else if (direction === RIGHT_ARROW) {
      s.changedir(1, 0);
    }
    this.previousDirection = direction;
  }

  this.eat = function(food) {
    if (food.canEat(this.x, this.y)) {
      this.total++;
      var final_frame_rate =  constrain(frame_rate + s.total, 0, 25);
      frameRate(final_frame_rate);
      this.top_score = Math.max(this.top_score, this.total);
      console.log('Top Score: ' + this.top_score);
      return true;
    } else {
      return false;
    }
  }

  this.activateSuperPower = function() {
    console.log(frameRate());
      frameRate(5);
      setTimeout(this.deactivateSuperPower, 10000);
  }

  this.deactivateSuperPower = function() {
    var final_frame_rate =  constrain(frame_rate + s.total, 0, 25);
    frameRate(final_frame_rate);
  }
}
