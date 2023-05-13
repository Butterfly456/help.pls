const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var column_1, column_2, column_3; 
var plane;
var bird;

var pipeImage; 
var birdImage;



function preload() {
  pipeImage = loadImage('pipes.png');
  birdImage = loadImage('birdie.png');
  coinImage = loadImage('coin.png');
}


function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world; 
  column_1 = new Pipe(210, 80, 100, 100, pipeImage);
  column_2 = new Pipe(375, 320, 100, 100, pipeImage);
  column_3 = new Pipe(100, 450, 100, 100, pipeImage);
  bird = new Bird(75,185,60,60, birdImage);
  coin1 = new Coins(100,100,50,50, coinImage);
  coin2 = new Coins(200,200,50,50, coinImage);
  coin3 = new Coins(100,310,50,50, coinImage);
  coin4 = new Coins(300,500,50,50, coinImage);
  coin5 = new Coins(500,100,50,50, coinImage);
  coin6 = new Coins(450,300,50,50, coinImage);
}

function draw() 
{
  background(0);
  Engine.update(engine);

  column_1.show();
  column_2.show();
  column_3.show();
  bird.display();
  coin1.display();
  coin2.display();
  coin3.display();
  coin4.display();
  coin5.display();
  coin6.display();

  if(bird.isTouching(column_1) || bird.isTouching(column_2) || bird.isTouching(column_3)) {
    World.remove(world, bird); // Remove bird from world
    noLoop(); // Stop the game
  }


  if(keyIsDown(LEFT_ARROW)){
    bird.x = bird.x - 1;
    }
    else if(keyIsDown(RIGHT_ARROW)){
    bird.x = bird.x + 1;
    }
    else if(keyIsDown(UP_ARROW)){
      bird.y = bird.y - 1;
    }
    else if(keyIsDown(DOWN_ARROW)){
      bird.y = bird.y + 1;
  }

  function handleFuel(){
    bird.overlap(coin1, function(collector, collected){
      //collected is the sprite in the group collectibles that triggered the event
      collected.remove();
    });
  }

  handleFuel();
}
