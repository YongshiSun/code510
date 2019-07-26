var Bubble = function(options) {
	// properties:
	this.x = options.x;
	this.y = options.y;
	this.radius = options.radius;
	this.speed = options.speed;
	this.strokeColor = options.strokeColor || '#fff';
	this.strokeWidth = options.strokeWidth || 1;
	this.fillColor = options.fillColor || "#fff";
	this.opacity = options.opacity || 1;
	console.log(this.fillColor);
	this.circle = new paper.Path.Circle({
		center: new Point(this.x, this.y),
		radius: this.radius,
		strokeColor: this.strokeColor,
		strokeWidth: this.strokeWidth,
		opacity: this.opacity,
		fillColor: this.fillColor
	});
	
	// public method:
	this.move = function() {
		this.circle.position.y -= this.speed;
		//resets the position if the bubble goes offscreen:
		if(this.circle.position.y < -50) {
			this.circle.position.y = view.viewSize.height;
		} else if(this.circle.position.y > view.viewSize.height) {
			this.circle.position.y = 0;
		}
	};
};