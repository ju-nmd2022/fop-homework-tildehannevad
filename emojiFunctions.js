/*
 * This is my emoji
 * Foundations of programming
 * Jönköpings University
 */

// let x = 150;
// let y = 200;
// let s = 0.8;

background(255, 255, 255);

function emoji(x, y, s) {
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
}

emoji(150, 150, 0.8);
emoji(250, 300, 0.6);
emoji(350, 400, 0.4);