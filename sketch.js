function setup() {
    createCanvas(800, 600)
}

function draw() {
  noFill()
  strokeWeight(3.5)
  
  stroke('blue')
  ellipse(50, 50, 80, 80);
  stroke('purple')
  ellipse(100, 90, 80, 80);
  stroke('red')
  ellipse(150, 50, 80, 80);
  stroke('orange')
  ellipse(200, 90, 80, 80);
  stroke('yellow')
  ellipse(250, 50, 80, 80);
}