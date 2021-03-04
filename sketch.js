const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var droplet1
function preload(){
    
}

function setup(){
var canvas = createCanvas(400,400);
engine = Engine.create();
world = engine.world;
droplet1 = new Drop(200,200,10,10) 
ground1 = new Ground(200,380,400,10);

}
function draw(){
background("black");
Engine.update(engine);
droplet1.display();
ground1.display();
}  

