function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
}
// due funzioni una per creare la finestra responsive e una per farla adattare ogni volta
function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0, 0, 0)
	

	rotateX(-mouseY * 0.01)
	rotateY(-mouseX * 0.01)
	//box(100)

	let dimensione = 1000

	for (let i=0; i<500; i++) {
		let gl = random (10,150)
		let gx = random (-dimensione, dimensione)
		let gy = random (-dimensione, dimensione -gl)
		let gz = random (-dimensione, dimensione)

		strokeWeight (random (1, 3))
		stroke (255, random (100, 255))
		line(gx, gy, gz,    gx, gy+gl, gz)
	}

 
}