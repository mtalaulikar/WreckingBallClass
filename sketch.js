const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, ball, rope;


function setup() {
  createCanvas(1500,550);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(750,530,1500,20);
  ball = new Ball(500,300,90);
  rope = new Rope(ball.body, {x:500, y:50});

  block1 = new Blocks(1000,100,70,70);
  block2 = new Blocks(1000,100,70,70);
  block3 = new Blocks(1000,100,70,70);
  block4 = new Blocks(1000,100,70,70);
  block5 = new Blocks(1000,100,70,70);
  block6 = new Blocks(1000,100,70,70);
  
  block7 = new Blocks(900,100,70,70);
  block8 = new Blocks(900,100,70,70);
  block9 = new Blocks(900,100,70,70);
  block10 = new Blocks(900,100,70,70);
  block11= new Blocks(900,100,70,70);
  
  block12= new Blocks(800,100,70,70);
  block13 = new Blocks(800,100,70,70);
  block14 = new Blocks(800,100,70,70);
  block15 = new Blocks(800,100,70,70);
  block16 = new Blocks(800,100,70,70);
  block17 = new Blocks(800,100,70,70);
}

function draw() {
  background("white"); 
  Engine.update(engine); 
  ground.display();
  ball.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();

  rope.display();

  
}

function mouseDragged(){
  console.log("in mouseDragged");
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}