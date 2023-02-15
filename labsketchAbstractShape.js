  let siz = 10
  let anim = 0
  let repeat = 1
  
  let redAng1 = 190;
  let redAng2 = 350;
  let bluAng1 = 10;
  let bluAng2 = 170;
  
function setup() {
  createCanvas(50*siz, 50*siz);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  rectMode(CORNER);
  frameRate(60);
}

function draw() {
  //animation controller
  if(mouseIsPressed) {
    anim = 1
  }
  else {
    anim = 0
  }
  
  //drawing background
  background("hsla(0, 100%, 0%, 1)");
  noStroke();
  scale(siz);
  
  fill("green");
  rect(0, 0, 25, 50);
  
  fill("gold");
  rect(25, 0, 25, 50);
  
  //background animator
  if (anim >= 0) {
  
    fill("green");
    if (mouseX >= 25*siz) {
      fill ("gold");
    }
    rect(0, 0, 25, 50);
  
    fill("gold");
    if (mouseX >= 25*siz) {
      fill ("green");
    }
    rect(25, 0, 25, 50);
  }
  
  //animation angle controller
  if (anim > 0) {
    redAng1 = redAng1+1
    redAng2 = redAng2+1
    bluAng1 = bluAng1+1
    bluAng2 = bluAng2+1
  }
  angreset (redAng1);
  angreset (redAng2);
  angreset (bluAng1);
  angreset (bluAng2);
  
  //adding the Ouro
  translate(25, 25);
  
  addOuro(0, 25)
  
  if (repeat <= 0) {noLoop()}
  
  //console.log(mouseX, mouseY);
}

//integer reset function
function angreset(ang) {
  if (ang >= 360) {ang = 0;}
  else if (ang <= -360) {ang = 0;}
}

//Ouro creation function
function addOuro(x, y) {
  //upper serpent
  if (mouseY < 100) {fill("red");} else if (mouseY < 400) {fill("red");} else {fill("blue");}
  arc(x, y, 70, 70, redAng1, redAng2);
  //lower serpent
  if (mouseY < 100) {fill("red");} else if (mouseY < 400) {fill("blue");} else {fill("blue");}
  arc(x, y, 70, 70, bluAng1, bluAng2);
  //metal plate
  fill("silver");
  rectMode(CENTER);
  rect(x, y, 25);
  rectMode(CORNER);
  //crystal outline
  fill("darkorchid");
  //ellipse(x, y, 30);
  //crystal core
  fill("salmon");
  beginShape();
  vertex(0, -12);
  vertex(9, -9);
  vertex(12, 0);
  vertex(9, 9);
  vertex(0, 12);
  vertex(-9, 9);
  vertex(-12, 0);
  vertex(-9, -9);
  endShape(CLOSE);
  //ellipse(x, y, 25);
}
