Events = Matter.Events;

var engine, world;

// var particles = [];
var plinkos = [];
var divisions = [];

var ground;
var divisionHeight = 300;
var score = 0;
var particle;
var count = 0; 
var gameState = "Play";

const World = Matter.World
const Bodies = Matter.Bodies

function setup() {
  engine = Matter.Engine.create()
  world = engine.world
  createCanvas(800,800);
  ground = new Ground(width/2, 790, width, 10)

  for(var k = 0; k<= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }
  
  for(var l = 15; l<=width - 10; l = l+50){
    plinkos.push(new Plinko(l,175));
  }

  for(var m = 55; m<=width; m = m+50){
    plinkos.push(new Plinko(m,275));
  }

  for(var n = 30; n<=width - 10; n = n+50){
    plinkos.push(new Plinko(n,375));
  }
  
}

function draw() {
  background("black"); 
  push()
  fill("white");
  textSize(25);
  text("Score : " + score, 20,30);
  text("500", 20, 660);
  text("500", 100, 660);
  text("500", 180, 660);
  text("500", 260, 660);
  text("100", 340, 660);
  text("100", 420, 660);
  text("100", 500, 660);
  text("200", 580, 660);
  text("200", 660, 660);
  text("200", 740, 660);
  pop()

  Matter.Engine.update(engine)

  // if(frameCount%100 === 0){
  //   particles.push(new Particle(random(10, width),10));
  // } 

  // for (var a = 0; a < particles.length; a++) {
  //   particles[a].display();
  // }

  for (var b = 0; b < divisions.length; b++) {
    divisions[b].display();
  }  

  for (var c = 0; c < plinkos.length; c++) {
    plinkos[c].display();
  }

  if(particle!= null) {
    particle.display();
    
    if (particle !== null && particle.body.position.y > 760){
      
       if(particle !== null && particle.body.position.x < 300){
         score = score + 500;
         particle = null;
         if(count >= 5) {
           gameState = "End";
          }
        }

        if(particle !== null && particle.body.position.x < 600 && particle.body.position.x > 300){
         score = score + 100;
         particle = null;
         if(count >= 5) {
           gameState = "End";
          }
        }

        if(particle !== null && particle.body.position.x < 900 && particle.body.position.x > 600){
          score = score + 200;
          particle = null;
          if(count >= 5) {
            gameState = "End";
            }
        }
     
     }
  }

  if(gameState === "End"){
    textSize(50);
    text('Game Over !', width/2 - 150, height/2 - 150)
  }

  // mousePressed();
  ground.display(); 
  // drawSprites();
}

function mousePressed(){
  // console.log("mousePressed");
  if(gameState!=="End"){
    // console.log('ObjectCreated');
    count++
    particle = new Particle(mouseX, 10);
  }
}