let song;

let message = 'Ferdydurke',
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x,
  y; // x and y coordinates of the text

function preload() {
  font = loadFont('FiraCode-Medium.ttf');
  song = loadSound('LD.mp3');
}

function setup() {
  song.play()
  createCanvas(710, 400);
  isSongPlaying = false;

  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  
  background(204, 120);

  // write the text in black and get its bounding box
  fill(0);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    
    x += random(-5, 5);
    y += random(-5, 5);
  }
  textSize(15);
  fill("red")
  text("granice ludzkiego pojmowania", mouseX + 10, mouseY + 10)
  textSize(fontsize);

}

function mouseClicked() {
  fill("orange");
  text("Shultz", random(400), random(400));
  text("Bruno", random(400), random(400));
}
