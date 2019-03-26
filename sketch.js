// Bouncing DVD Logo
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/131-bouncing-dvd-logo.html
// https://youtu.be/0j86zuqqTlQ
// https://editor.p5js.org/codingtrain/sketches/Ya1K1ngtFk

let x;
let y;

let xspeed;
let yspeed;

let dvd;

let player1;

let r, g, b;

function preload() {
  dvd = loadImage("dvd_logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 5;
  yspeed = 5;
  pickColor();
  player1 = new Player();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);

}

function draw() {
  background(0);
  // rect(x, y, 80, 60);
  // Draw the DVD logo
  tint(r, g, b);
  image(dvd, x, y);

  player1.move();
  player1.display();

  if(circleRectCollide(player1.x, player1.y, player1.diameter, x, y, dvd.width, dvd.height)){
      player1.hp -= 1;
  }


  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed -1;
    x = width - dvd.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed-1;
    x = 0;
    pickColor();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed-1;
    y = height - dvd.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed-1;
    y = 0;
    pickColor();
  }
}

function circleRectCollide(cx, cy, cd, rx, ry, rw, rh){
    /* 
    Grabbed from https://stackoverflow.com/questions/21089959/detecting-collision-of-rectangle-with-circle/21096179
    by: markE
    */

    //Step#1: Find the vertical & horizontal (distX/distY) distances between the circle’s center and the rectangle’s center
    let distX = Math.abs(cx - rx-rw/2);
    let distY = Math.abs(cy - ry-rh/2);

    //Step#2: If the distance is greater than halfCircle + halfRect, then they are too far apart to be colliding
    let cr = cd /2;
    if (distX > (rw/2 + cr)) { return false; }
    if (distY > (rh/2 + cr)) { return false; }

    //Step#3: If the distance is less than halfRect then they are definitely colliding
    if (distX <= (rw/2)) { return true; } 
    if (distY <= (rh/2)) { return true; }

    //Step#4: Test for collision at rect corner.
    /*
    Think of a line from the rect center to any rect corner
    Now extend that line by the radius of the circle
    If the circle’s center is on that line they are colliding at exactly that rect corner
    */
    let dx=distX-rect.w/2;
    let dy=distY-rect.h/2;
    return (dx*dx+dy*dy<=(cr*cr));
}