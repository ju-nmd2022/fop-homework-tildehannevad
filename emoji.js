/*
 * This is my emoji
 * Foundations of programming
 * Jönköpings University
 */

let x = 150;
let y = 200;
let s = 0.8;
let sentence = "Hello!! I am HAPPY";

background(255, 255, 255);

push();
noStroke();

//Face
fill(255, 200, 0);
ellipse(x, y, 250 * s);

//Left eye
fill(0, 0, 0);
ellipse(x - 50 * s, y - 30 * s, 50 * s);
fill(255, 255, 255);
ellipse(x - 57 * s, y - 40 * s, 25 * s);
fill(255, 255, 255);
ellipse(x - 35 * s, y - 25 * s, 10 * s);
fill(173, 216, 230);
ellipse(x - 50 * s, y - 10 * s, 30 * s, 17 * s);

//Right eye
fill(0, 0, 0);
ellipse(x + 40 * s, y - 30 * s, 50 * s);
fill(255, 255, 255);
ellipse(x + 30 * s, y - 37 * s, 25 * s);
fill(255, 255, 255);
ellipse(x + 55 * s, y - 25 * s, 10 * s);
fill(173, 216, 230);
ellipse(x + 40 * s, y - 10 * s, 30 * s, 17 * s);

//Mouth
fill(90, 90, 90);
arc(x - 5 * s, y + 50 * s, 70 * s, 30, 0, PI, PIE);
fill(255, 200, 0);
ellipse(x - 5 * s, y + 32 * s, 77 * s, 60 * s);

pop();

//Speechbubble
fill(255, 255, 255);
strokeWeight(2.0);
beginShape();
vertex(x + 150, y - 120);
vertex(x + 50, y - 120);
bezierVertex(x, y - 120, x, y - 180, x + 50, y - 180);
vertex(x + 240, y - 180);
bezierVertex(x + 290, y - 180, x + 290, y - 120, x + 240, y - 120);
vertex(x + 180, y - 120);
vertex(x + 140, y - 80);
endShape(CLOSE);

fill(0, 0, 0);
textSize(20);
text(sentence, x + 50, y - 145);
