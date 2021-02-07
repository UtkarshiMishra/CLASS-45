var canvas, backgroundImage;
var ball;
var tilesG;
var tiles2G;

function preload(){

}

function setup(){
 createCanvas (500,900);

 ball = createSprite(250,820,40,40);
 ball.shapeColor = 'red';

  tilesG = new Group();
  tiles2G = new Group();
}

function draw(){
background(0);

  if (keyDown(LEFT_ARROW)) {
    ball.x -= 10;
  }

  if (keyDown(RIGHT_ARROW)) {
    ball.x += 10;
  }

  //if (ball.isTouching (edges)) {

  //}

  /*if(tilesG.isTouching(ball)) {
    tiles.shapeColor = 'yellow';
    console.log("this is a game")
    //ball.bounce(tilesG);
    if (keyDown (UP_ARROW)){
      ball.velocityY = -3
    }

    ball.velocityY = ball.velocityY + 0.4;
  }*/
  
  for(var i =0; i<tilesG.length; i++){
    if(tilesG.get(i).isTouching(ball))
    //tilesG.get(i).destroy();
    ball.velocityY = -1;
  } 

  spawnTiles();
drawSprites();
}

function spawnTiles(){
  if (frameCount % 250 === 0){
    tiles = createSprite(250,-50)
    tiles.x = Math.round(random(50,400))
    
    tiles.velocityX = 0;
    tiles.velocityY = 4;
    tiles.lifeTime = 400;

    tilesG.add (tiles);

  }

  if(frameCount % 450 === 0) {
    tiles2 = createSprite(100,-10)
    tiles2.shapeColor = 'blue'
    tiles2.x = Math.round(random(10,400))

    tiles2.velocityX = 0;
    tiles2.velocityY = 3;
    tiles2.lifeTime = 400;

    tiles2G.add (tiles2);

  }
    


  
  
}

/*for(var i =0; i<tilesG.lenght; i++){
  if(tilesG.get(i).isTouching(ball))
  tilesG.get(i).destroy();
} */