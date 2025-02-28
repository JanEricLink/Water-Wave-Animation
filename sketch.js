let points;
let b;
let size;

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight, WEBGL);
  points = [];
  b = 0;
  size = 10;
  camera(0, size * -15 - 25, size * 30 + 50);
}

function draw() {
  background(220);
  orbitControl();
  strokeWeight(0.2);
  stroke(color("#03A9F4"))

  for (let a = 0; a < size * 36; a++) {
    points[a] = sin(10 * (a - b));
  }

  push();
  noStroke();
  fill(200, 0, 0);
  translate(0, 2 * points[15], 0);
  sphere(2);
  pop();

  for (var key in points) {
    push();
    rotateX(90);

    translate(0, 0, 2 * points[key]);
    torus(0.5 * key + 1.25, 1, 24, 1);
    pop();
  }
  b++;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}