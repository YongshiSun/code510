/* 
	Source: http://nardove.com/
	Original code created by @nardove. We asked him for permission to use
	his Jellies, but please do not reproduce without permission.
*/
$('#my_canvas').height($(window).height());
paper.install(window);
paper.setup('my_canvas');

var colors = [
	{ stroke: "#1C4347", fill: "#49ACBB" },
	{ stroke: "#1b3b3a", fill: "#61cac8" },
	{ stroke: "#2d393f", fill: "#88a5b3" },
	{ stroke: "#422b3a", fill: "#b0809e" },
	{ stroke: "#5b263a", fill: "#d85c8a" },
	{ stroke: "#580c23", fill: "#ff3775" },
	{ stroke: "#681635", fill: "#EB1962" }
];

var jellySize = 50;
var jellySize2 = 100;
var jellySize3 = 20;
var jellySize4 = 200;
var jellyResolution = 14;
var jellyResolution2 = 30;
var jellyResolution3 = 5;
var jellyResolution4 = 100;
var color = colors[0];
var color2 = colors[5];
var color3 = colors[2];
var color4 = colors[3];

// create two jellies:
var jelly1 = new Jelly(jellySize, jellyResolution, color);
var jelly2 = new Jelly(jellySize2, jellyResolution2, color2);
var jelly3 = new Jelly(jellySize3, jellyResolution3, color3);
var jelly4 = new Jelly(jellySize4, jellyResolution4, color4);

view.onFrame = function(event) {
	//animate the two jellies:
	jelly1.move(event);
	jelly2.move(event);
	jelly3.move(event);
	jelly4.move(event);
};