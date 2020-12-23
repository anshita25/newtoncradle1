
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var b1,b2,b3,b4,b5;
var roof;
var rope1,r2,r3,r4,r5
var bd;
var iimg,inw;

function preload()
{
	iimg=loadImage("image-placeholder-title.jpg")
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	inw=createSprite(1100,300,90,90);
	inw.addImage(iimg);
	inw.scale=0.5;
	roof = new Roof(600, height/3,width/7, 100)
	b1 = new Bob(300,400,25);
	b2 = new Bob(400,400,25);
	b3 = new Bob(500,400,25);
	b4 = new Bob(600,400,25);
	b5 = new Bob(700,400,25);
	
	r1 = new Rope(b1.body,roof.body,-80, 20)
	r2 = new Rope( b2.body,roof.body,-40,20)
	r3 = new Rope( b3.body,roof.body,0,20)
	r4 = new Rope( b5.body,roof.body,80,20)
	r5 = new Rope( b4.body,roof.body,40,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  inw.display();
  b1.display();
 b2.display(); 
 b3.display();

 b4.display();
 b5.display();
r1.display();
r2.display();
r3.display();
r4.display();
r5.display();
drawSprites();
textSize(60)
fill("pink")
text("NEWTON'S CRADLE",350,100)
textSize(20)
stroke("green");
strokeWeight(2)
fill("green")
text("PRESS UP ARROW TO START",40,300);
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-90,y:-45});
	}
}
function drawLine(constraint){
	var vp=constraint.bodyA.position;
	var rp=constraint.bodyB.position;
	var rpo=constraint.pointB;
	var rx=rp.x+rpo.x;
	var ry=rp.y+rpo.y;
	line(vp.x,vp.y,rx,ry);
 }
	
	





