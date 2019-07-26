/* 
	Source: http://nardove.com/
	Original code created by @nardove. We asked him for permission to use
	his Jellies, but please do not reproduce without permission.
*/
$('#my_canvas').height($(window).height());
paper.install(window);
paper.setup('my_canvas');

var jellyColors = [
	{ stroke: "#1C4347", fill: "#49ACBB" },
	{ stroke: "#1b3b3a", fill: "#61cac8" },
	{ stroke: "#2d393f", fill: "#88a5b3" },
	{ stroke: "#422b3a", fill: "#b0809e" },
	{ stroke: "#5b263a", fill: "#d85c8a" },
	{ stroke: "#580c23", fill: "#ff3775" },
	{ stroke: "#681635", fill: "#EB1962" }
];
var counter = 0;
var screenW = view.size.width;
var screenH = view.size.height;
var jellies = new Array(2);
var bubbles = new Array(2);
			
jellies[0] = new Jelly({
	radius: random(40, 80), 
	resolution: random(14, 20), 
	color: jellyColors[0], 
	tentacleLength: random(4, 6), 
	x: random(-50, screenW + 100), 
	y: random(-50, screenH + 100)
});

jellies[1] = new Jelly({
	radius: random(40, 80), 
	resolution: random(14, 20), 
	color: jellyColors[1], 
	tentacleLength: random(4, 6), 
	x: random(-50, screenW + 100), 
	y: random(-50, screenH + 100)
});

bubbles[0] = new Bubble({
	x: random(0, screenW),
	y: random(0, screenH),
	radius: random(3, 35),
	speed: random(4, 8),
	opacity: random(0.4, 1),
	fillColor: "#fff",
	strokeColor: "#000",
	strokeWidth: 3
});

bubbles[1] = new Bubble({
	x: random(0, screenW),
	y: random(0, screenH),
	radius: random(3, 35),
	speed: random(4, 8),
	opacity: random(0.4, 1),
	fillColor: "#fff",
	strokeColor: "#000",
	strokeWidth: 3
});

view.onFrame = function (event) {
	// Assignment: modify the code below so that you use a "while loop" 
	// to move *all of the jellies:
	jellies[0].move(event);
	jellies[1].move(event);
	
	bubbles[0].move(event);
	bubbles[1].move(event);
};

function random(min, max, intOnly) {
	//chooses a random number between the minimum and maximum value
	var num = Math.random() * (max - min) + min;
	if(intOnly) {
		return Math.floor(num);
	}
	return num;
}