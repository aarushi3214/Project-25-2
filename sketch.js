
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var hammer,plane;
var rubber,stone;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;
var iron;

//function preload(){}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	hammer =new Hammer(10,100);
  stone =new Stone(700,320,70,70);
  rubber=new Rubber(810,350);
  plane=new Plane(600,height,1200,20);
  iron =new Iron(480,380,50,70);
  sand1 =new Sand(505,450,10);
  sand2 =new Sand(510,450,10);
  sand3 =new Sand(515,450,10);
  sand4 =new Sand(520,450,10);
  sand5 =new Sand(525,450,10);
  sand6 =new Sand(515,445,10);
  sand7 =new Sand(520,445,10);
  sand8 =new Sand(525,445,10);

   Engine.run(engine);
  }


function draw() {
   rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  hammer.display();
  stone.display();
  rubber.display();
  plane.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  drawSprites();
 }



