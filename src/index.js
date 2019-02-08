document.addEventListener("DOMContentLoaded", () =>{
  let canvas = document.getElementById("game-canvas")
  let ctx = canvas.getContext('2d');
  
  let ballX = 600
  let ballSpeed = -5

  let rectPosY = 250
  let spacePressed = false;

  //bounce off walls
  function bouncWall(){
    if(ballX < 0 || ballX > canvas.width){
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

 

  
  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //ball
    ctx.beginPath();
    ctx.arc(ballX, 450, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    
    
    //figure
    ctx.beginPath();
    ctx.rect(150, rectPosY, 50, 100);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    
    //ball moving
    ballX+= ballSpeed

 
    bouncWall();
    
    
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


