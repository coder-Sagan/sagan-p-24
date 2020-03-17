// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var engine,world;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;
    ground=new Ground(200,400,400,20);
    part1=new Tanker(80,375,100,PI/2);
    part2=new Tanker(105,350,50,PI/7)
    
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0); 
  Engine.update(engine);
  ground.display();
  part1.display();
  part2.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}