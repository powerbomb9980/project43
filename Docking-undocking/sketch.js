var bgImg;
var iss, issImg;
var hasDocked = false;
var spacecraft, craftImg;

function preload() {
  bgImg = loadImage("Images/spacebg.jpg");
  issImg = loadImage("Images/iss.png");
  craftImg = loadImage("Images/spacecraft1.png");
}

function setup() {
  createCanvas(1450, 800);

  iss = createSprite(700, 300, 50, 50);
  iss.addImage(issImg);
  iss.scale = 1.19;

  spacecraft = createSprite(600, 700, 50, 50);
  spacecraft.addImage(craftImg);
  spacecraft.scale = 0.3;
}

function draw() {
  background(bgImg);

  spacecraft.velocityX = 0;
  spacecraft.velocityY = 0;

  if (keyDown("UP_ARROW")) {
    spacecraft.velocityY = -2;
  }

  if (keyDown("RIGHT_ARROW")) {
    spacecraft.velocityX = 2;
  }

  if (keyDown("LEFT_ARROW")) {
    spacecraft.velocityX = -2;
  }

  drawSprites();
}