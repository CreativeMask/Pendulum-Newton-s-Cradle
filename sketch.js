
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter = 150;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,50,600,50);
	
	bobObject1 = new bob(0,400,70,0);
	bobObject2 = new bob(150,400,70,0);
	bobObject3 = new bob(300,400,70,0);
	bobObject4 = new bob(450,400,70,0);
	bobObject5 = new bob(600,400,70,0);
    rope1 = new rope(bobObject1.body, roof.body, -bobDiameter*2,0);
	rope2 = new rope(bobObject2.body, roof.body, -bobDiameter,0);
	rope3 = new rope(bobObject3.body, roof.body, 0,0);
	rope4 = new rope(bobObject4.body, roof.body, bobDiameter*1,0);
	rope5 = new rope(bobObject5.body, roof.body, bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(color(211,211,211));
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



