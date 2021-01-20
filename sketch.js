var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,gameover;
var score
var points
var background1,bgImg;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bgImg = loadImage("bg.png")
 
}



function setup() {
  createCanvas(900,400)

  
  background1 = createSprite(100,400,1500,500)
  background1.addImage(bgImg)

  ground = createSprite(1000,350,900,10)  
  ground.velocityX = -4
  ground.position.x = ground.width/2
  ground.shapeColor = ("green")
 

  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
  
  FoodGroup = new Group()
  obstacleGroup = new Group()
  
  
  

  
  points = 0
   score = 0

  
}


function draw() {
background(220)
  
  food()
  block()
  
  if(FoodGroup.isTouching(monkey)){
    points = points+2
    FoodGroup.destroyEach()

  }    
  
 if(obstacleGroup.isTouching(monkey)) {
  obstacleGroup.velocityX = 0;
  FoodGroup.velocityX = 0;
   FoodGroup.destroyEach()
   obstacleGroup.destroyEach()
   text("gameover",200,200)
   monkey.detroy()
  
 }
 ground.visibility = false;
  
   score = score+Math.round(getFrameRate()/60)
  
    
    
 monkey.collide(ground)
      
switch(points){
        case 10 :  monkey.scale = 0.12;
           break;
        case 20 :  monkey.scale = 0.14;
            break;
        case 30 :  monkey.scale = 0.16;  
            break;
        case 40 :  monkey.scale = 0.18
            break;
        default :  break   
    
    
    
    
    
}
  
      
      
    
    

  
  

   text("score:"+score,100,300)
   
   text("points:"+points,300,200)
  console.log(frameCount)
  if (ground.position.x < 0){
    ground.position.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -13;
  }
  
   monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)

camera.position.x = ground.position.x
camera.position.y = monkey.position.y





  drawSprites()
  
 
  
}

function food(){
  if(World.frameCount%80===0){
  banana = createSprite(200,200,20,20)
  banana.addImage(bananaImage)
  banana.y = Math.round(random(120,200))
  banana.velocityX = -5
  banana.scale = 0.1 
  banana.Lifetime = -1
  FoodGroup.add(banana)
    
  }
}
  
  function block(){
    if(World.frameCount%150===0){
    obstacle = createSprite(400,310,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2
    obstacle.Lifetime = -1
    obstacle.velocityX = -5
    obstacleGroup.add(obstacle)
    
      
      
    }
    
    
    
    
  }






