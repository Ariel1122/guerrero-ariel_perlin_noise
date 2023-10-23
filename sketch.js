let xoff = 0;
// let star = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  let x = map(noise(xoff), 0, 1, 0, width);
  let y = map(noise(xoff + 1000000), 0, 1, 0, height);

  // let x = noise(xoff), 0, 1, 0, width;
  // let y = noise(xoff + 1000000), 0, 1, 0, height;

  print("ya");

  if (y > height / 2) {
    rectMode(CENTER);
    square(x, y, 40);
  } else {
    ellipse(x, y, 50, 50);
  }

  xoff += 0.01;
}
