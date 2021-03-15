
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,390,400,20)
    
    box1=new Box(200,200,50,50)
    box2=new Box(270,170,50,50)
    box3=new Box(130,130,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display()
    box2.display()
    box3.display()

    ground.display()
}
