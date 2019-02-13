document.addEventListener("DOMContentLoaded", () =>{
  let canvas = document.getElementById("game-canvas")
  let ctx = canvas.getContext('2d');
  


  //ball variables
  let ballX = 800
  let ballY = Math.floor(Math.random() * (390 -200 ) + 200) //450;
  let ballRad = 5
  let ballSpeed = -3

  //coin variables
  let coinX = 800;
  let coinY = Math.floor(Math.random() * (390 - 200) + 200)

  //jumping?
  let spacePressed = false;

  //main figure

  let jerryFig = {
    height: 100,
    jumping: true,
    width: 75,
    x: 150,
    x_velocity: 0,
    y: 200,
    y_velocity: 0
  }

  let jerryPosX = 150;
  let jerryPosY = 200;
  const jerry = new Image();
  jerry.src ='assets/images/jerr3.png';

  // const posResetY = Math.floor(Math.random() * (300 - 100) + 100);

  let trashPosX = 350;    //canvas.width;
  let trashPosY = 200;              //Math.floor(Math.random() * (300 - 100) + 100); 
  const trash = new Image();
  trash.src = 'assets/images/trash.png';

  let score = 0;

  //bounce off walls
  // function bouncWall(){
  //   if(ballX < 0 || ballX > canvas.width){
  //     score += 1
  //     ballSpeed = -ballSpeed
  //   }
  // }

  function restartBall(){
      ballX = canvas.width;
      ballY = Math.floor(Math.random() * (300 - 100) + 100)    
    }

  function restartCoin(){
   
      coinX = canvas.width;
      coinY = Math.floor(Math.random() * (300 - 100) + 100)
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


  // let controller = { up: false,
    
  //   keyListener:function(event){
  //     let key_state = (event.type === 'keydown') ? true:false;
      
  //     switch (event.type) {
  //       case 32:
  //       controller.up = key_state;
  //       break;
  //     }
  //   }
    
  // }




  function drawScore(){
    ctx.font ='16px Arial';
    ctx.fillStyle = "white";
    ctx.fillText("Score: "+score, 100, 100)
  }

  function coinHitBlock(){  
    if ((coinX === jerryPosX && (coinY > jerryPosY && coinY < jerryPosY + 100)) || (coinX === jerryPosX + 50 && (coinY > jerryPosY && coinY < jerryPosY + 100))) {
      score += 1
      coinX = canvas.width
      coinY = Math.floor(Math.random() * (300 - 100) + 100)
    }
  }

  function ballHitBlock() {

    if ((ballX === jerryPosX && (ballY > jerryPosY && ballY < jerryPosY + 100)) || (ballX === jerryPosX + 50 && (ballY > jerryPosY && ballY < jerryPosY + 100))) {
      score = 0
      restartBall();
    }
  }


 



  function coin(){
    ctx.beginPath();
    ctx.arc(coinX, coinY, ballRad, 0, Math.PI * 2);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
  }

  
  function draw(){
    // ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // background.render();







    //ball
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRad, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();

    //road
    ctx.strokeStyle = "#202830";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(800, 400);
    ctx.stroke();

    //jumping
    if(spacePressed && jerryFig.jumping === false){
      jerryFig.y_velocity -=35;
      jerryFig.jumping = true;
    }

    jerryFig.y_velocity += 1.5;
    // jerryFig.x += jerryFig.x_velocity;
    jerryFig.y += jerryFig.y_velocity;
    // jerryFig.x_velocity *= 0.9;
    jerryFig.y_velocity *= 0.9;

    if(jerryFig.y > canvas.height -100 ){
      jerryFig.jumping = false;
      jerryFig.y = 400-100;
      jerryFig.y_velocity = 0;
    }
    
     
    ctx.drawImage(jerry, jerryFig.x, jerryFig.y, jerryFig.width, jerryFig.height);
    ctx.drawImage(trash, trashPosX, trashPosY, 75, 50);
    
    

   

    drawScore();
    coin();
    coinHitBlock();
    ballHitBlock();
    // restartCoin();



    
    
    //ball moving
    ballX+= ballSpeed
    coinX+= ballSpeed

 
    
    if(ballX < 0){restartBall();}
    if(coinX < 0){restartCoin();}
    
    
    requestAnimationFrame(draw)
    
  //  if(spacePressed && jerryFig.y >150){
  //    jerryFig.y -= 20;
  //  } 

  //  if(!spacePressed && jerryFig.y < canvas.height-100){
  //    jerryFig.y += 7
  //  }
    


  }
  
  draw()
  
})


