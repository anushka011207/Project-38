var backgroundJungle, jungleImage;
var monkey , monkey_running
var banana, bananaImage, obstacle, obstacleImage
var foodGroup; 
var obstacleGroup;
var invisibleGround;
var score = 0;
var distance = 0;

function preload(){
  jungleImage = loadImage("jungle.jpg");
  
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");

}



function setup() {
  createCanvas(600,400);
  
  backgroundJungle = createSprite(200,200,400,400);
  backgroundJungle.addImage("jungle",jungleImage);
  backgroundJungle.velocityX = -4;
  
  monkey = createSprite(30,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  invisibleGround = createSprite(200,350,400,10);
  invisibleGround.visible = false;
  
  foodGroup = new Group();
  obstacleGroup = new Group();


}


function draw() {
  background("white");
  
  if(foodGroup.isTouching(monkey))  {
    foodGroup.destroyEach();
    score = score+2;
    monkey.scale=monkey.scale+0.02;
  }
  
  if(obstacleGroup.isTouching(monkey))  {
    obstacleGroup.destroyEach();
    monkey.scale = 0.1;
  }
  

  
  monkey.velocityY = monkey.velocityY + 0.8

  camera.position.x=displayWidth/2;
  camera.position.y=monkey.y;
  
  backgroundJungle.velocityX = -4;
  
  backgroundJungle.x = backgroundJungle.width/2;

  fill("white");
  text("Score = "+score, 300,100);
  fill("white");
  text("Distance = "+distance,300,120);
  
  //console.log(distance);

  drawSprites();

  food();

  obstacles();
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }

  if(keyDown(RIGHT_ARROW)) {
    distance = distance+20;
  }
  
  monkey.collide(invisibleGround);


}


function food()  {
  if(distance=80)  {
    banana = createSprite(400,200,10,10);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.09;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -3;
    banana.lifetime = 135;
    foodGroup.add(banana);
  }
}

function obstacles()  {
  if(distance=120)  {
    obstacle = createSprite(400,315,30,30);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    obstacle.lifetime = 135;
    obstacleGroup.add(obstacle);
  }
}
