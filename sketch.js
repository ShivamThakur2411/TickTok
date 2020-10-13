function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(200, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(8);
  noFill();
  stroke(255, 50, 150);
  end1 = map(sc, 0,60, 0, 360)
  arc(0, 0, 300, 300, 0, end1);

  push();
  stroke(255, 50, 150);
  rotate(end1);
  line(0, 0, 100, 0);
  pop();

  strokeWeight(8);
  noFill();
  stroke(255, 180, 150);
  end2 = map(mn, 0, 60, 0, 360)
  arc(0, 0, 280, 280, 0, end2);

    push();
  stroke(255, 180, 150);
  rotate(end2);
  line(0, 0, 120, 0);
  pop();

  strokeWeight(8);
  noFill();
  stroke(25, 100, 150);
  end3 = map(hr%12, 0, 12, 0, 360)
  arc(0, 0, 260, 260, 0, end3);

  push();
  stroke(25, 100, 150);
  rotate(end3);
  line(0, 0, 70, 0);
  pop();

  drawSprites();
}