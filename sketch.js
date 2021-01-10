const Engine=Matter.Engine,
World=Matter.World,
Bodies=Matter.Bodies
var myengine, myworld
var object, ground , ball 
function setup() {
createCanvas(800,400);
myengine=Engine.create()
myworld=myengine.world
var options = {
  isStatic: true 
}
ground= Bodies.rectangle(400,380,800,20,options);
World.add(myworld,ground)
  console.log(ground)
  var ball_options = {
    restitution:1
  }
  ball=Bodies.circle(100,100,50,ball_options);
 World.add(myworld,ball)
}

function draw() {
 
  background(255,255,255);
  Engine.update(myengine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)
}
