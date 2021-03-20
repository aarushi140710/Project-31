const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,line1,line2,line3,line4;
var world,engine;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionsHeight = 300;

function setup() {
  createCanvas(500,820);

  engine = Engine.create();
  world = engine.world;

  line1 = createSprite(5,410,10,820);
  line1.shapeColor = color("brown");
  line2 = createSprite(495,410,10,820);
  line2.shapeColor = color("brown");
  line3 = createSprite(250,5,500,10);
  line3.shapeColor = color("brown");
  line4 = createSprite(250,815,500,10);
  line4.shapeColor = color("brown");

  ground = new Ground (250,800,500,20);

  for (var k = 0; k <=width; k = k+70){
    divisions.push(new Divisions (k, height-divisionsHeight/2, 10, divisionsHeight) );
  }

  for (var j=75; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0); 

  drawSprites();

  for (var n = 0; n<divisions.length; n++) {
    divisions[n].display();
  }

  if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
  
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }

  for (var j = 0; j<plinkos.length; j++) {
    plinkos[j].display();
  }


  ground.display(); 
}