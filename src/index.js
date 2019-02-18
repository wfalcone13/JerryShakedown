document.addEventListener("DOMContentLoaded", () =>{
  let canvas = document.getElementById("game-canvas")
  let ctx = canvas.getContext('2d');
  let id;
  let paused = false;
  let begin = true;
  let gameOver = false;

  


  //ball variables
  // let ballX = 800
  // let ballY = Math.floor(Math.random() * (390 -200 ) + 200) //450;
  // let ballRad = 5
  // let ballSpeed = -3


  //jumping?
  let spacePressed = false;

  //main figure

  let jerryFig = {
    height: 100,
    jumping: true,
    width: 80,
    x: 150,
    x_velocity: 0,
    y: 200,
    y_velocity: 0
  }

 
  const jerry = new Image();
  jerry.src ='assets/images/jerr3.png';

 

  let trashPosX = 825;    //canvas.width;
  let trashPosY = canvas.height-50; 
  let trashSpeed = -6;             
  const trash = new Image();
  trash.src = 'assets/images/trash.png';

  let musicNote1 = {
    height:50,
    width: 25,
    x: 800,
    y: canvas.height-50,
    speed: -4
  }
  const musicNote = new Image();
  musicNote.src ='assets/images/music1.png'

  let musicNote2 = {
    height: 50,
    width: 25,
    x: 810,
    y: canvas.height-100,
    speed: -4
  }

  const musicNote2img = new Image();
  musicNote2img.src = 'assets/images/music2.png'

  function music2Move(){
    musicNote2.x += musicNote2.speed;
    musicNote2.y += Math.floor(Math.random() * (20 - 10) + 10)
    musicNote2.y -= Math.floor(Math.random() * (20 - 10) + 10)
   

  }

  function music2MoveUp(){
    // musicNote2.y -= 5
    // musicNote2.y += 10;

  }

  let score = 0;

  function scorePlus(){
    score+=1
  }

  function increaseScore(){
    setInterval(scorePlus, 500)
  }



  function restartTrash(){
    trashPosX = canvas.width + 100
    trashSpeed = -6
    }
  

  function restartMusicNote1(){
   
      musicNote1.x = canvas.width;
      musicNote1.y = Math.floor(Math.random() * (375 - 250) + 100)
    }

  function restartMusicNote2() {

    musicNote2.x = canvas.width;
    musicNote2.y = Math.floor(Math.random() * (375 - 250) + 100)
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
    ctx.fillStyle = "black";
    ctx.fillText("Score: "+score, 100, 50)
  }

  function drawGameDone() {
    ctx.font = '16px Arial';
    ctx.fillStyle = "black";
    ctx.fillText("Game Over Click Start to try again. Score: "+score, 200, 200)
  }


  function jerryHitNote1(){  
    if (((musicNote1.x >= jerryFig.x - 30 && musicNote1.x <= jerryFig.x + 30) && (musicNote1.y > jerryFig.y && musicNote1.y < jerryFig.y + 100)) || (musicNote1.x === jerryFig.x + 50 && (musicNote1.y > jerryFig.y && musicNote1.y < jerryFig.y + 100))) {
      score += 5
      musicNote1.x = canvas.width
      musicNote1.y = Math.floor(Math.random() * (300 - 100) + 100)
    } 
  }

  function jerryHitNote2() {
    if (((musicNote2.x >= jerryFig.x - 30 && musicNote2.x <= jerryFig.x + 30) && (musicNote2.y > jerryFig.y && musicNote2.y < jerryFig.y + 100)) || (musicNote2.x === jerryFig.x + 50 && (musicNote2.y > jerryFig.y && musicNote2.y < jerryFig.y + 100))) {
      score += 5
      musicNote2.x = canvas.width
      musicNote2.y = Math.floor(Math.random() * (300 - 100) + 100)
    }
  }


 

  function trashHitJerry(){
    if (trashPosX === jerryFig.x+30 && (trashPosY > jerryFig.y && trashPosY < jerryFig.y+100)  ) {
      restartObjs();
      gameOver = true
    } else if ( jerryFig.y+100 >= trashPosY && (trashPosX >= jerryFig.x-30 && trashPosX <= jerryFig.x+30) ){
      restartObjs();
      gameOver = true
    }
  }

  function restartObjs(){
    restartTrash();
    restartMusicNote1();
    restartMusicNote2();
  }
 


  function lost(){
    if(gameOver){
      cancelAnimationFrame(id);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGameDone()
    
   
    }
  }


  
  function draw(){
    // ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // background.render();


    //road
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 8;
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
    ctx.drawImage(musicNote, musicNote1.x, musicNote1.y,musicNote1.width, musicNote1.height)
    ctx.drawImage(musicNote2img, musicNote2.x, musicNote2.y, musicNote2.width, musicNote2.height)
    
    

   

    drawScore();
    jerryHitNote1();
    jerryHitNote2()
    trashHitJerry(); 
    // restartCoin();


    
    
    //ball moving
   
    trashPosX+= trashSpeed
    musicNote1.x += musicNote1.speed
    music2Move();
    music2MoveUp();
    
    if(trashPosX < 0){restartTrash();}
    if (musicNote1.x < 0) { restartMusicNote1()}
    if(musicNote2.x < 0){restartMusicNote2()}
  

    
    
    id = requestAnimationFrame(draw)
    
        
  lost()      
  }
      
      // draw()
      increaseScore();

      lost();
      
      // const body = document.getElementsByTagName('body')[0]
      // console.log(document.getElementsByTagName('body')[0])
      const start = document.getElementById('start')
      console.log(document.getElementById('start'))
      start.addEventListener('click', () => {
        debugger
        if(paused){
          
          // requestAnimationFrame(draw);
          draw()
          paused = false;
          
          
        } else if (begin || gameOver){
          score = 0;
          gameOver = false;
          draw()
          begin = false;
        }
         else if (gameOver) {
           debugger
           gameOver = false;
           ctx.clearRect(0, 0, canvas.width, canvas.height);
           begin = true;
          
          
        }
        
      })

  // trashHitJerry()    

  const pause = document.getElementById('pause')
  console.log(document.getElementById('pause'))
  pause.addEventListener('click', () => {
    if (!paused && !gameOver) {
      cancelAnimationFrame(id);
      paused = true
    }

  })
      
      
      
      
})


