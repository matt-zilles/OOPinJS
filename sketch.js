var bubble = {
	x: 300,
	y: 200,
}

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(600, 400); 
	bubble1 = new Bubble();
	bubble2 = new Bubble();
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	bubble1.move();
	bubble1.show();
	bubble2.move();
	bubble2.show();
}

class Bubble 
{
	constructor(x, y, r) {
		this.x = 200;
		this.y = 200;
		this.r = r;
}


move(){
	bubble.x = bubble.x + random(-5, 5);
	bubble.y = bubble.y + random(-5, 5);
}

show() {
	stroke(255); 
	strokeWeight(4); 
	noFill();
	ellipse(this.x, this.y, this.r * 2);
	
/*
move(){
	bubble.x = bubble.x + random(-5, 5);
	bubble.y = bubble.y + random(-5, 5);
}

show() {
	stroke(255); 
	strokeWeight(4); 
	noFill();
	ellipse(bubble.x, bubble.y, 24, 24);
	*/ 
	
