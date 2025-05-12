function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(200)
	noStroke()

	translate(width/2, height/2)

	fill(0)
	for(let i=0; i<60; i++) {
		push()
		rotate(i / 60 * TAU)

		if (i % 5 == 0) {
			ellipse(0, -180, 15)
		} else {
			ellipse(0, -180, 5)
		}

		pop()
	}


	push()
	const h = hour()
	const angoloOre = (hour() / 12 + minute() /60 / 12) * TAU
	rotate(angoloOre)
	fill(0)
	rect(-10,20, 20, -140)
	pop()


	push()
	const m = minute()
	const angoloMinuti = minute() / 60 * TAU
	rotate(angoloMinuti)
	fill(0)
	rect(-8, 20, 16, -180)
	pop()
	
	
	push()
	const s = second()
	const angoloSecondi = second()/ 60 * TAU
	rotate(angoloSecondi)
	fill(255,0,0)
	rect(-3, 0, 8, -200)
	ellipse(0, -180, 30)
	pop()
	


	


}