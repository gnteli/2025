function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0)



	translate(width/2, height/2)
	rotate(mouseX * 0.1)

	rect(-5, 0, 10, -200)


}