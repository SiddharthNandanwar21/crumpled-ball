
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject,groundObject	
var world;

var rs,ls,btm;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	
	btm = new dustbin(width-500,650,200,20);
	ls = new dustbin(width-600,540,20,250);
	rs = new dustbin(width-400,540,20,250)

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paperObject.display();
  groundObject.display();
  
 btm.display();
 ls.display();
  rs.display();
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
//applyForce(	object_name,	object_position,	direction_of_the_push	)
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





