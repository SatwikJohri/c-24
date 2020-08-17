var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var wall1,wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	paper1=createSprite(300,300,30,30,{
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:0.2});
	paper1.shapeColor="blue";

	wall1=createSprite (800,500,150,30);
	wall1.shapeColor="red";

	wall2=createSprite (710,440,30,150);
	wall2.shapeColor="red";

	wall3=createSprite (890,440,30,150);
	wall3.shapeColor="red";
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155,103,158);
  if(keyCode===(RIGHT_ARROW)&&paper1.x<875){
	  paper1.x=paper1.x+10;
  }
  if(keyCode===(LEFT_ARROW)&&paper1.x>725){
	paper1.x=paper1.x-10;
}
  if(keyCode===(DOWN_ARROW)&&paper1.y<485){
	paper1.y=paper1.y+5;
}
if(keyCode===(UP_ARROW)){
	paper1.y=paper1.y-5;
}
paper1.bounceOff(wall1);
paper1.bounceOff(wall2);
paper1.bounceOff(wall3);
  

  drawSprites();
 
}



