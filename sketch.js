  
var towerImg, tower;
var obsticalImg, obstical, obsticalGroup;
var starsimg, stars, starsGroup; 
var rocket, rocketImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";


function preload(){
  towerImg = loadImage("tower.png");
 starsimg = loadImage("stars.png");
  obsticalImg = loadImage("obstical.png");
  rocketImg = loadImage("rocket.png");

}

function setup() {
  createCanvas(600,600);

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  starsGroup = new Group();
  obsticalGroup = new Group();
  invisibleBlockGroup = new Group();
  
  rocket = createSprite(200,200,50,50);
  rocket.scale = 0.1;
  rocket.addImage("rocket", rocketImg);

 
}


function draw() {
  background(255);
  
  if (gameState === "play") {
    
    if(keyDown("left")){
      rocket.velocityX = -3;

    }
    if(keyDown("right")){
     rocket.velocityX = 3;

      
    }
    if(keyDown("space")){
   rocket.velocityY = -5;
   

    }
  
  rocket.velocityY = rocket.velocityY + 0.8;
  
   

      if (tower.y > 400 ){
        tower.y = 300;
      }
      spawnDoors();

  
  
  drawSprites();
}



if( gameState = ("end")){
  rocket.velocity = 0 || rocket.isTouching ("obstical")
}
  if (gameState === "end"){
   stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  if (frameCount % 240 === 0) {
    var stars = createSprite(200, -50);
    var obstical = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = obstical.width;
    invisibleBlock.height = 2;
    
    
     stars.addImage(starsimg);
    obstical.addImage(obsticalImg);
    
    stars.velocityY = 1;
    obstical.velocityY = 1;
    invisibleBlock.velocityY = 1;


  }
}

