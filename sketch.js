
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;	
var world;
var paperObj;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,690,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj=new Paper( 130,60);
    paperObj.scale=0.2;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  KeyPressed();
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();


}





function KeyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:-145});



}



}
