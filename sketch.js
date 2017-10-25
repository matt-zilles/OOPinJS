let bubbles = [];

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(600, 400); 
	for (let i = 0; i < 1000; 1++) {
		let x = random(width);
		let y = random(height);
		let x = random(10, 40);
		bubbles[i] = new Bubble(x, y, r);
	}
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}
}

class Bubble 
{
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
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
	
