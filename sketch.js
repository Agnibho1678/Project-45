const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var supermanStatic, superman1Img, background1, background1Img;
var Start, startImg;

function preload()
{
	superman1Img=loadImage("Superman.png")
	background1Img=loadImage("background1.png")
	startImg=loadImage("Start.png")
}

function setup() {
	createCanvas(5000, 2000);


	engine = Engine.create();
	world = engine.world;

	background1 = createSprite(700,300,1000,600);
	background1.addImage("background1",background1Img);
	background1Img.scale=50;

	supermanStatic=createSprite(700,350);
	supermanStatic.addImage("supermanStatic",superman1Img);
	supermanStatic.scale=0.08;

	Start=createSprite(1100,515);
	Start.addImage("Start",startImg);


	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
 
  fill(0,77,244);
  textFont("ALGERIAN");
  textSize(50);
  text("YOUR OWN SUPERMAN",450,50);
   fill(255,0,0);
   textFont("IMPACT");
   text("GAME STORY",20,70);
  fill(7,247,187);
  textFont("Calibri");
  textSize(16);
  text("Everyone in the world fancies to be a superman.",15,130);
  text("But, being a Superman in reality is a job of great",15,150);
  text("jeopardy and hence remains dream to all those",15,170);
  text("imaginative eyes. My game offers you to be a",15,190)
  text("VIRTUAL superman. Design your hero and pass",15,210)
  text("the levels by destroying the flagitious monsters",15,230)
  text("whose presence poses threat to your city.",15,250)
  text("Collect currency and buy equipment from the",15,270)
  text("store and increase your power. At the end of",15,290)
  text("the fifth level, you face a huge army of monsters",15,310)
  text("and the main boss. The game ends when you defeat",15,330) 
  text("the main boss and you level up. There will be",15,350)
  text("5 such levels.",15,370)
  text(mouseX+","+mouseY,mouseX,mouseY);
  fill(255,182,0);
  textFont("IMPACT")
  textSize(50);
  text("INSTRUCTIONS",1000,70);
  fill(255,0,152);
  textFont("Calibri");
  textSize(16);
  text("1. Use the Right arrow key to move forward",1000,120);
  text("and the Up arrow key for jumping",1000,140)
  text("2. Click on the attack button to kill the",1000,160)
  text("small monsters",1000,180)
  text("3. Collect power-ups for flying and creating",1000,200)
  text("a magnetic field around the hero",1000,220)
  text("4. Go to the store and buy interseting",1000,240)
  text("things for your hero",1000,260)
  fill(42,255,0);
  textFont("Broadway");
  textSize(20);
  text("And REMEMBER! Your city is",960,300);
  text("attacked by innumerable monsters",960,340);
  text("SO, WHAT ARE YOU WAITING",960,380)
  text("FOR?? CLICK ON THE START BUTTON",960,410);
  text("AND BE THE SUPERHERO!",960,450)
  
  
  drawSprites();
 
}



