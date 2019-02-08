document.addEventListener("DOMContentLoaded", () =>{
  let canvas = document.getElementById("game-canvas")
  let ctx = canvas.getContext('2d');
  
  let ballX = 600
  let ballY = 450;
  let ballRad = 5
  let ballSpeed = -5

  let rectPosY = 250
  let rectPosX = 150
  let spacePressed = false;


  let score = 0;

  //bounce off walls
  function bouncWall(){
    if(ballX < 0 || ballX > canvas.width){
      score += 1
      ballSpeed = -ballSpeed
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

  function hitBlock(){
    
    if ((ballX === rectPosX && (ballY > rectPosY && ballY < rectPosY + 100)) || (ballX === rectPosX + 50 && (ballY > rectPosY && ballY < rectPosY + 100))) {
      score = 0
    }
  }
 

  function rect(){
    ctx.beginPath();
    ctx.rect(rectPosX, rectPosY, 50, 100);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }

  
  function draw(){
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //ball
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRad, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    
    
    
    // ctx.beginPath();
    // ctx.rect(350, 200, 50, 100);
    // ctx.fillStyle = "green";
    // ctx.fill();
    // ctx.closePath();

    rect();

    drawScore();

    
    
    //ball moving
    ballX+= ballSpeed

 
    bouncWall();
    hitBlock();
    
    
    requestAnimationFrame(draw)
    
   if(spacePressed && rectPosY >0){
     rectPosY -= 5;
   } 

   if(!spacePressed && rectPosY < canvas.height-100){
     rectPosY += 7
   }

  }
  draw()
  
})


