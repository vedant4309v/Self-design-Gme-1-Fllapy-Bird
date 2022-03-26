var bg,bgImg
var bird,birdImg
var pillar,pillarImg
var heart1,heart2,heart3
var heart1Img,heart2Img,heart3Img

var life = 3
var gamestate= "play"

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
heart1Img = loadImage("assets/heart_1.png")
heart2Img = loadImage("assets/heart_2.png")
heart3Img = loadImage("assets/heart_3.png")

birdImg = loadImage("assets/bird.png")

pillarImg = loadImage("assets/pillar.png")

bgImg = loadImage("assets/bg.jpeg")

}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
 bg.addImage(bgImg)
 bg.scale = 1


 bird = createSprite(displayWidth-1150,displayHeight-300,50,50);
bird.addImage(birdImg)
bird.scale = 0.3




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



