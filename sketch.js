let song;

let messagey;

let sinx;
let siny;

let message = 'Ferdydurke',
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x,
  y; // x and y coordinates of the text

function preload() {
  font = loadFont('FiraCode-Medium.ttf');
  font_secondary = loadFont('Berk.ttf')
  font_third = loadFont("Cinzel.ttf")
  song = loadSound('LD.mp3');
}

function setup() {
  song.play()
  createCanvas(1000, 1000);
  isSongPlaying = false;

  messagey = - 10

  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {

  sinx = sin(frameCount / 25) * 100;
  siny = cos(frameCount / 50) * 200;
  
  ellipse(200 + sinx, 200 + siny, 50, 50);
  ellipse(220 + sinx, 200 + siny, 50, 50);

  messagey += 1;
  messagey = messagey % 1100;
  
  background(204, 120);

  fill("white");
  text("Witold", random(1920), random(1080));
  text("Gombrowicz", random(1920), random(1080));

  textFont(font_secondary)
  fill("orange")
  text("gęba", mouseX + 100 + random(5), mouseY - 100)
  text("łydka", mouseX - 375, mouseY + 56 + random(5))
  text("kupa", mouseX + 24 + random(5), mouseY - 256)
  text("forma", mouseX + random(5), mouseY + 300 + random(5))
  text("pupa", mouseX + 300 + random(5), mouseY + 145)
  // text("🔥", mouseX, mouseY);

  

  
  // hashtags
  fill("yellow")
  
  textFont(font_third)
  textSize(40);
  text("groteska", 100, 1000 - messagey)
  text("karykatura", 400, messagey + 100)
  text("duchowa podróż", 356, messagey - 45)
  text("zniewolenie", messagey, messagey)
  text("niedojrzałość", messagey , 40)
  text("formy", 1000 - messagey , 900 - messagey)

  // write the text in black and get its bounding box

  textFont(font);
  fill(0);
  fill("fuchsia")
  textSize(70)
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

}
