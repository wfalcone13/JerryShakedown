document.addEventListener("DOMContentLoaded", () =>{
  let canvas = document.getElementById("game-canvas")
  let ctx = canvas.getContext('2d');

  let backImg = new Image();
  // backImg.src = '/Users/william_falcone/Desktop/javascript_game/assets/images/marioclouds2.jpg';
  backImg.src = '/Users/william_falcone/Desktop/javascript_game/assets/images/road.jpg';

  let cW = ctx.canvas.width;
  let cH = ctx.canvas.height;

  function Background(){
    this.x = 0, this.y = 0, this.w = backImg.width, this.h = backImg.height;
    this.render = function(){
      ctx.drawImage(backImg, this.x --, 0);
      if(this.x <= -499){
        this.x = 0;
      }
    }
  }


  let background = new Background();
  
  let ballX = 800
  let ballY = Math.floor(Math.random() * (300 - 100) + 100) //450;
  let ballRad = 5
  let ballSpeed = -3

  let coinX = 800;
  let coinY = 150

  let rectPosY = 150
  let rectPosX = 150
  let spacePressed = false;

  const posResetY = Math.floor(Math.random() * (300 - 100) + 100);

  const jerry = new Image();
  jerry.src ='/Users/william_falcone/Desktop/javascript_game/assets/images/jerry2.jpg';


  let score = 0;

  //bounce off walls
  function bouncWall(){
    if(ballX < 0 || ballX > canvas.width){
      score += 1
      ballSpeed = -ballSpeed
    }
  }

  function restartBall(){
    if (ballX < 0){
      ballX = canvas.width;
      ballY = Math.floor(Math.random() * (300 - 100) + 100)
      
    }
  }

  function restartCoin(){
    if(coinX < 0){
      coinX = canvas.width;
      coinY = Math.floor(Math.random() * (300 - 100) + 100)
    }
  }

  document.addEventListener("keydown", keyDownHander, false);
  document.addEventListener("keyup", keyUpHander, false);

  function keyDownHander(e){
    if (e.keyCode === 32){
      spacePressed = true;
    }
  }

  function keyUpHander(e) {
    if (e.keyCode === 32) {
      spacePressed = false;
    }
  }

  


  function drawScore(){
    ctx.font ='16px Arial';
    ctx.fillStyle = "white";
    ctx.fillText("Score: "+score, 100, 100)
  }

  function coinHitBlock(){
    
    if ((coinX === rectPosX && (coinY > rectPosY && coinY < rectPosY + 100)) || (coinX === rectPosX + 50 && (coinY > rectPosY && coinY < rectPosY + 100))) {
      score += 1
      coinX = canvas.width
      coinY = Math.floor(Math.random() * (300 - 100) + 100)
    }
  }

  function ballHitBlock() {

    if ((ballX === rectPosX && (ballY > rectPosY && ballY < rectPosY + 100)) || (ballX === rectPosX + 50 && (ballY > rectPosY && ballY < rectPosY + 100))) {
      score = 0
      ballX = canvas.width
      ballY = Math.floor(Math.random() * (300 - 100) + 100)
    }
  }


 

  function rect(){
 
    ctx.beginPath();
    ctx.rect(rectPosX, rectPosY, 50, 100);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }

  function coin(){
    ctx.beginPath();
    ctx.arc(coinX, coinY, ballRad, 0, Math.PI * 2);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
  }

  
  function draw(){
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.render();

    //ball
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRad, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    
    
    ctx.drawImage(jerry,150,100,50,100);
    
    // ctx.beginPath();
    // ctx.rect(350, 200, 50, 100);
    // ctx.fillStyle = "green";
    // ctx.fill();
    // ctx.closePath();

    rect();

    drawScore();
    coin();
    restartCoin();



    
    
    //ball moving
    ballX+= ballSpeed
    coinX+= ballSpeed

 
    // bouncWall();
    coinHitBlock();
    ballHitBlock();
    restartBall();
    
    
    requestAnimationFrame(draw)
    
   if(spacePressed && rectPosY >150){
     rectPosY -= 20;
     


   } 

   if(!spacePressed && rectPosY < canvas.height-100){
     rectPosY += 7
   }

  }
  draw()
  
})


