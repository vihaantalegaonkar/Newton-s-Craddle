const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var holder;
var string1,string2,string3,string4,string5;
var ballDiameter = 30;
var ballstartX, ballstartY;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ballstartX = width/2;
	ballstartY = height/4 + 300;
	
	ball1 = new ball(ballstartX - ballDiameter*2,ballstartY,ballDiameter);
	ball2 = new ball(ballstartX - ballDiameter,ballstartY,ballDiameter);
	ball3 = new ball(ballstartX,ballstartY,ballDiameter);
	ball4 = new ball(ballstartX + ballDiameter,ballstartY,ballDiameter);
	ball5 = new ball(ballstartX + ballDiameter*2,ballstartY,ballDiameter);
	
	holder = new roof(width/2,height/4,width/7,40);
	
	string1 = new string(ball1.body, holder.body, -ballDiameter*2, 0)
	string2 = new string(ball2.body, holder.body, -ballDiameter*1, 0)
	string3 = new string(ball3.body, holder.body, 0, 0)
	string4 = new string(ball4.body, holder.body, ballDiameter*1, 0)
	string5 = new string(ball5.body, holder.body, ballDiameter*2, 0);

	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  background(255);

  holder.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{
		x:-50,
		y:-45
		});
	}
}

