const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {

    var canvas = createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
     
	bob1 = new Bob(200,200,20);
	bob2 = new Bob(230,200,20);
	bob3= new Bob(260,200,20);
	bob4= new Bob(290,200,20);
	bob5= new Bob(320,200,20);
   

	
	roof = new Roof(400,200,150,10);

	
	rope1 = new Rope(bob1.body,roof.body,-60,0);
	rope2 = new Rope(bob2.body,roof.body,-30,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,30,0);
	rope5 = new Rope(bob5.body,roof.body,60,0);
	Engine.run(engine);
}


function draw() {
  background("grey");
  
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

roof.display();

}


function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:30,y:-30})
	}
}
