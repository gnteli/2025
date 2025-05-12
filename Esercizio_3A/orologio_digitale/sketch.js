function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	

    let h = hour()
    let m = minute()
	let s = second()

	if (s<10) {
		s = "0" + s
	}

	if (m<10) {
		m = "0" + m
	}

	if (h<10) {
		h = "0" + h
	}

	let ora = h + ":" + m + ":" + s

	background(255)

	textAlign(CENTER, CENTER)

	textSize(50)

	text(ora, width/2, height/2)


}