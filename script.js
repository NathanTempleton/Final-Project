// Create an extra canvas which is where you will draw on which is behind the regular canvas which will contain all the options
// large mode will be 60-60 and normal mode will be 30-30
// for advanced options put a minus symbol in the corner which will change all the options when pushed and change it to a minus symbol whic
let drawColor = 255

function setup() {
  createCanvas(400, 400);
  drawingCanvas = createGraphics(400, 400)
  drawingCanvas.clear()
  background(0)
}

function mousePressed() {
  if ((mouseX <= 25) && (mouseY <= 35)) {
    drawColor = (0)
  } else if ((mouseX <= 60) && (mouseY <= 35)) {
    drawColor = color(128, 128, 128)
  } else if ((mouseX <= 95) && (mouseY <= 35)) {
    drawColor = color(255, 255, 0)
  } else if ((mouseX <= 130) && (mouseY <= 35)) {
    drawColor = color(255, 165, 0)
  } else if ((mouseX <= 165) && (mouseY <= 35)) {
    drawColor = color(255, 0, 0)
  } else if ((mouseX <= 200) && (mouseY <= 35)) {
    drawColor = color(255, 192, 203)
  } else if ((mouseX <= 235) && (mouseY <= 35)) {
    drawColor = color(128, 0, 128)
  } else if ((mouseX <= 270) && (mouseY <= 35)) {
    drawColor = color(0, 0, 255)
  } else if ((mouseX <= 305) && (mouseY <= 35)) {
    drawColor = color(0, 128, 0)
  } else if ((mouseX <= 340) && (mouseY <= 35)) {
    drawColor = color(144, 238, 14)
  } else if ((mouseX <= 375) && (mouseY <= 35)) {
    drawColor = color(255)
  }
}

function draw() {
  background(0);

  if (mouseIsPressed) {
    drawingCanvas.fill(drawColor)
    drawingCanvas.noStroke()
    drawingCanvas.ellipse(mouseX, mouseY, 30, 30)
  }
  image(drawingCanvas, 0, 0)
  menu()
}

function menu() {
  fill(255)
  rect(0, 0, 400, 60)
  fill(0)
  ellipse1 = ellipse(25, 30, 30, 30)
  fill(128, 128, 128)
  ellipse2 = ellipse(60, 30, 30, 30)
  fill(255, 255, 0)
  ellipse3 = ellipse(95, 30, 30, 30)
  fill(255, 165, 0)
  ellipse4 = ellipse(130, 30, 30, 30)
  fill(255, 0, 0)
  ellipse5 = ellipse(165, 30, 30, 30)
  fill(255, 192, 203)
  ellipse6 = ellipse(200, 30, 30, 30)
  fill(128, 0, 128)
  ellipse7 = ellipse(235, 30, 30, 30)
  fill(0, 0, 255)
  ellipse8 = ellipse(270, 30, 30, 30)
  fill(0, 128, 0)
  ellipse9 = ellipse(305, 30, 30, 30)
  fill(144, 238, 14)
  ellipse10 = ellipse(340, 30, 30, 30)
  fill(255)
  ellipse11 = ellipse(375, 30, 30, 30)
}