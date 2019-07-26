// JavaScript Document

paper.install(window);
paper.setup('myCanvas');
var rando = function(start, end) {
  return Math.random() * (end - start) + start;
};
var Bubble = function(x, y, radius, speed) {
  this.circle;
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.speed = speed;

  // public method: 
  this.initialize = function() {
    this.circle = new paper.Path.Circle({
      center: new Point(this.x, this.y),
      radius: this.radius,
      strokeColor: '#fff',
      //fillColor: '#fff',
      //opacity: 0.8,
      strokeWidth: 1
    });
  };

  // public method:
  this.move = function() {
      if (this.circle.position.y < 0) {
        this.circle.position.y = view.size.height;
      } else {
        this.circle.position.y += this.speed;
      }
    }
  // call the initialize function when
  // creating a new Bubble object:
  this.initialize();
};

// Create a bunch of random bubbles:
var bubbles = [], numBubbles = 50;
for (var i = 0; i < numBubbles; i++) {
  x = rando(-10, 1300); // a number between -10 and 1,300
  y = rando(0, 1000);   // a number between 0 and 1,000
  r = rando(3, 25);     // a number between 1 and 25
  speed = rando(4, 8);  // a number between 4 and 8
  bubbles.push(new Bubble(x, y, r, -1*speed));
}

var Jelly = function(color, x, y) {
  this.color = color;
  this.x = x;
  this.y = y;
  var body;
  this.init = function() {
    body = new paper.Path.Circle({
      center: new Point(this.x, this.y), 
      radius: 60,
      strokeColor: '#fff',
      strokeWidth: 4,
      fillColor: color,
      //fullySelected: true
    });
    body.removeSegment(3); //from circle to blob
  }
  this.jiggle = function (event) {
    var movement = 0.6 * Math.cos(event.time * 4);
    var topHandleA  = body.curves[0].handle2;
    var topHandleB  = body.curves[1].handle1;
    var rightHandle  = body.curves[2].handle1;
    var leftHandle  = body.curves[2].handle2;
    topHandleA.x += -1 * movement;
    topHandleB.x += movement;
    rightHandle.y += movement
    leftHandle.y += movement;
  };
  this.init();
};
var j = new Jelly('#49ACBB', 230, 120);
var height = $(document).height();
$('#myCanvas').height(height);
var Tentacle = function(x) {
  this.x = x;
  var width = 5;
  var numPoints = 15;
  var wiggle = 5;
  var path;
  var height = 100;

  this.init = function() { // Create a new path and style it:
    path = new Path({
      strokeColor: '#49ACBB',
      strokeWidth: width,
      strokeCap: 'round',
      //fullySelected: true
    });

    // Add 5 segment points to the path spread out
    // over the width of the view:
    for (var i = 0; i <= numPoints; i++) {
      var p = new Point(this.x, (i / numPoints) * height);
      path.add(p);
    }
  };
  
  this.wiggle = function(event) {
    for (var i = 0; i <= numPoints; i++) {
      var segment = path.segments[i];
      
      var movement = Math.sin(event.time * 3 + i); // A cylic value between -1 and 1
      segment.point.x = movement * wiggle + this.x;
      path.smooth();
    }
  };
  this.init();
};

var tentacle1 = new Tentacle(90);






view.onFrame = function(event) {
    j.jiggle(event);
  for (var i = 0; i < numBubbles; i++) {
    bubbles[i].move();
      tentacle1.wiggle(event);
  }
};
