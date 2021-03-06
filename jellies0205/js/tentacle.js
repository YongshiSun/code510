/* 
Source: http://nardove.com/
Created by @nardove 
I have not gotten permission to put this on CodePen.
*/
//Credit: http://nardove.com/
var Tentacle = function (segments, length) {
	this.anchor = new Segment();
	this.path = new Path({
    strokeCap: 'round'
  });
	this.numSegments = segments;
	this.segmentLength = Math.random() * 1 + length - 1;
	
	this.init = function() {
		for (var i = 0; i < this.numSegments; i++) {
			this.path.add(new Point(0, i * this.segmentLength));
		}
		
		this.anchor = this.path.segments[0];
	};
	
	this.move = function(orientation) {
		this.path.segments[1].point = this.anchor.point;
	
		var dx = this.anchor.point.x - this.path.segments[1].point.x;
		var dy = this.anchor.point.y - this.path.segments[1].point.y;
		var angle = Math.atan2(dy, dx) + ((orientation + 90) * (Math.PI / 180));
		
		this.path.segments[1].point.x += Math.cos(angle);
		this.path.segments[1].point.y += Math.sin(angle);
		
		for (var i = 2; i < this.numSegments; i++) {
			var px = this.path.segments[i].point.x - this.path.segments[i-2].point.x;
			var py = this.path.segments[i].point.y - this.path.segments[i-2].point.y;
			var pt = new Point(px, py);
			var len = pt.length;
			
			if (len > 0.0) {
				this.path.segments[i].point.x = this.path.segments[i-1].point.x + (pt.x * this.segmentLength) / len;
				this.path.segments[i].point.y = this.path.segments[i-1].point.y + (pt.y * this.segmentLength) / len;
			}
		}
	};
	
};