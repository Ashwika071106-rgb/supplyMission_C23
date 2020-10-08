var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var block1,block2,block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	block1Sprite=createSprite(400, 650, 200, 20);
	block1Sprite.shapeColor=color("red")

	block2Sprite=createSprite(290, 610, 20, 100);
	block2Sprite.shapeColor=color("red")

	block3Sprite=createSprite(510, 610, 20, 100 );
	block3Sprite.shapeColor=color("red")



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	block1 = Bodies.rectangle(100, 250, 20, 200 , {isStatic:true} );
	World.add(world, block1);
	
	block2 = Bodies.rectangle(200, 650, 100, 20 , {isStatic:true} );
	World.add(world, block2);
	


	block3 = Bodies.rectangle(400, 660, 100,20 , {isStatic:true} );
 	World.add(world, block3);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}



