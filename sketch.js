
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,mango2,mango3,mango4,mango5;
var Ground;
var Tree,Stone;
var Boy;

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;


	mango1=new mango(1000,200,3);
	mango2=new mango(990,200,3);
	mango3=new mango(980,200,3);
	mango4=new mango(1000,210,3);
	mango5=new mango(1000,220,3);

	Ground=new ground(600,1100,1200,200);

	Tree=new tree(990,200,50,50);

	Boy=new boy(610,200,50,50);

	Stone=new stone(600,200);

	Launcher=new launcher(Stone.body,{x:200,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
    Launcher.fly();
}

