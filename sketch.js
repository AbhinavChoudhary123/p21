
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
       isStatic:false,
       restitution:0.3,
	   friction:0,
	   density:1.2
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

Matter.Bodies.circle(x,y,radius,[options],[maxSides])
function keyPressed(){
      if (keyCode === UP_ARROW){
       Matter.body.applyforce(body,position,force)

	  }



}

