
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball, ground;
var leftwall, rightwall;



function setup() {
	createCanvas(800, 700);
	ellipseMode(RADIUS)
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(50, 600, 20)
	World.add(world, ball)

	ground = Bodies.rectangle(width / 2, height - 20, width, 20, { isStatic: true })
	World.add(world, ground)
	Engine.run(engine);

	var wall_options = {
		isStatic:true,
		density:1
	
		
	}

	leftwall = Bodies.rectangle(600, 650, 20, 100, wall_options )
	World.add(world, leftwall)

	rightwall = Bodies.rectangle(700, 650, 20, 100, wall_options)
	World.add(world, rightwall)

}


function draw() {
	background(0);
	ellipse(ball.position.x, ball.position.y, 20)
	rect(ground.position.x, ground.position.y, width, 20)
	rect(leftwall.position.x, leftwall.position.y, 20, 100)
	rect(rightwall.position.x, rightwall.position.y, 20, 100)
}


function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.05, y: -0.05 })
	}
}
