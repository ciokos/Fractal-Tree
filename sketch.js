var angle;
var ratio;

function setup() {
	createCanvas(400,400);
	angle = PI/6;
	ratio = 0.71;
}

function draw() {
	background(0);
	var len = 100;
	stroke(255);
	translate(width/2,height);
	branch(100);
}

function branch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	
	if(len>2) {
		push();
		rotate(angle);
		branch(len*ratio);
		pop();
		push();
		rotate(-angle);
		branch(len*ratio);
		pop();
	}

}

