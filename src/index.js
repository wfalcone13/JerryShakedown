document.addEventListener("DOMContentLoaded", () =>{
  let canvas = document.getElementById("game-canvas")
  let ctx = canvas.getContext('2d');
  let id;
  let paused = false;
  let begin = true;
  let gameOver = false;

  


 


  //jumping?
  let spacePressed = false;

  let leftPressed = false;
  let rightPressed = false;

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







  //trash figure
  let trashStart = canvas.width-50
  let trashPosX = trashStart;   
  let trashPosY = canvas.height-50; 
  let trashSpeed = -5;             
  const trash = new Image();
  trash.src = 'assets/images/trash.png';


  //cone figure
  let coneStart = canvas.width+220
  let conePosX = coneStart;
  let conePosY = canvas.height - 50;
  let coneSpeed = -5;
  const cone = new Image();
  cone.src = 'assets/images/cone.png'

  //music figure

  let musicNote1 = {
    height:50,
    width: 25,
    x: 800,
    y: Math.floor(Math.random() * ((canvas.height - 50) - 150) + 150),
    speed: -4
  }
  const musicNote = new Image();
  musicNote.src ='assets/images/music1.png'


  let musicNote3 = {
    height: 50,
    width: 25,
    x: 950,
    y: Math.floor(Math.random() * ((canvas.height - 50) - 150) + 150),
    speed: -4
  }
  const musicNote3Img = new Image();
  musicNote3Img.src = 'assets/images/music1.png'

  //music2 figure
  // Math.floor(Math.random() * ((canvas.height - 50) - 150) + 150)
  let musicNote2 = {
    height: 50,
    width: 25,
    x: 700,
    x_velocity: 0,
    y: Math.floor(Math.random() * ((canvas.height - 50) - 150) + 150),
    y_velocity: 0,
    speed: -4
  }

  const musicNote2img = new Image();
  musicNote2img.src = 'assets/images/music2.png'


  // movement functions

  function music2Move(){
    musicNote2.x += musicNote2.speed;
    musicNote2.y += Math.floor(Math.random() * (20 - 10) + 10)
    musicNote2.y -= Math.floor(Math.random() * (20 - 10) + 10)
      

  }

  //for tire -- add bounce colision
  // function music2Move() {
  //   musicNote2.x += musicNote2.speed;
  //   // musicNote2.y += Math.floor(Math.random() * (20 - 10) + 10)
  //   // musicNote2.y -= Math.floor(Math.random() * (20 - 10) + 10)
  //   musicNote2.y_velocity += 1.5;
  //   musicNote2.x += musicNote2.x_velocity;
  //   musicNote2.y += musicNote2.y_velocity;
  //   musicNote2.x_velocity *= 0.9;
  //   musicNote2.y_velocity *= 0.9;
  //   musicNote2.y -= musicNote2.y_velocity;


  // }



  function restartMusicNote1(){
   
    musicNote1.x = Math.floor(Math.random() * (1300 - canvas.width) + canvas.width);
    musicNote1.y = Math.floor(Math.random() * (375 - 250) + 100)
    }

  function restartMusicNote3() {

    musicNote3.x = Math.floor(Math.random() * (1300 - canvas.width+75) + canvas.width+75);
    musicNote3.y = Math.floor(Math.random() * (375 - 250) + 100)
  }


  function restartMusicNote2() {

    musicNote2.x = Math.floor(Math.random() * (1300 - canvas.width+125) + canvas.width+125)
    musicNote2.y = Math.floor(Math.random() * (375 - 250) + 100)
    

  }
  
  function restartTrash(){
    trashPosX = Math.floor(Math.random() * (1500 - 780) + 780)   //random
  
  }
  
  function restartCone() {
    conePosX = Math.floor(Math.random() * (1300 - 780) + 780)  
    
  }


  function gameOverObs(){
    conePosX = coneStart;
    trashPosX = trashStart
    
  }
  function restartJer(){
    
    jerryFig.x_velocity =0;
    jerryFig.x = 150;
    leftPressed = false;
    rightPressed = false;
    
   
  }
  
  function restartObjs(){
    debugger
    trashSpeed = -4
    coneSpeed = -4
    restartJer();
    gameOverObs();
    restartMusicNote1();
    restartMusicNote2();
    restartMusicNote3();
    
   
    
  }
  
  //score info
  
  let score = 0;

  function scorePlus(){
    score+=1
  }

  function increaseScore(){
    setInterval(scorePlus, 500)
  }




  

  

  document.addEventListener("keydown", keyDownHander, false);
  document.addEventListener("keyup", keyUpHander, false);

  function keyDownHander(e){
    if (e.keyCode === 32){
      spacePressed = true;
    } else if (e.keyCode === 37){
      leftPressed = true;
    } else if (e.keyCode === 39){
      rightPressed = true;
    }
  }

  function keyUpHander(e) {
    if (e.keyCode === 32) {
      spacePressed = false;
    } else if (e.keyCode === 37) {
      leftPressed = false;
    } else if (e.keyCode === 39) {
      rightPressed = false;
    }
  }





  function drawScore(){
    ctx.font ='20px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("Score: "+score, 100, 50)
  }

  function drawGameDone() {
    ctx.font = '30px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 200, 150)
    ctx.fillText("Game Over!", 200, 200)
    ctx.fillText("Click Start to try again", 200, 250 )
  }



  // collision
  function jerryHitNote1(){  
    if (((musicNote1.x >= jerryFig.x - 30 && musicNote1.x-20 <= jerryFig.x + 40) && (musicNote1.y+20 >= jerryFig.y && musicNote1.y+15 < jerryFig.y + 100)) || (musicNote1.x === jerryFig.x + 50 && (musicNote1.y > jerryFig.y && musicNote1.y < jerryFig.y + 100))) {
      score += 5
      musicNote1.x = Math.floor(Math.random() * (1000 - canvas.width) + canvas.width);
      musicNote1.y = Math.floor(Math.random() * (300 - 100) + 100)
    } 
  }

  function jerryHitNote3() {
    if (((musicNote3.x >= jerryFig.x - 30 && musicNote3.x - 20 <= jerryFig.x + 40) && (musicNote3.y + 20 >= jerryFig.y && musicNote3.y + 15 < jerryFig.y + 100)) || (musicNote3.x === jerryFig.x + 50 && (musicNote3.y > jerryFig.y && musicNote3.y < jerryFig.y + 100))) {
      score += 5
      musicNote3.x = Math.floor(Math.random() * (1000 - canvas.width+35) + canvas.width+25);
      musicNote3.y = Math.floor(Math.random() * (300 - 100) + 100)
    }
  }

  function jerryHitNote2() {
    if (((musicNote2.x >= jerryFig.x - 30 && musicNote2.x-20 <= jerryFig.x + 40) && (musicNote2.y+20 >= jerryFig.y && musicNote2.y+15 <= jerryFig.y + 100)) || (musicNote2.x === jerryFig.x + 50 && (musicNote2.y >= jerryFig.y && musicNote2.y <= jerryFig.y + 100))) {
      score += 5
      musicNote2.x = Math.floor(Math.random() * (1000 - canvas.width+50) + canvas.width+50);
      musicNote2.y = Math.floor(Math.random() * (300 - 100) + 100)
    }
  }


  function resestSpeed(){
    coneSpeed = -4;
    trashSpeed = -4;
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

  function coneHitJerry() {
    if (conePosX === jerryFig.x + 30 && (conePosY > jerryFig.y && conePosY < jerryFig.y + 100)) {

      restartObjs();
      gameOver = true
    } else if (jerryFig.y + 100 >= conePosY && (conePosX >= jerryFig.x - 30 && conePosX <= jerryFig.x + 30)) {

      restartObjs();
      gameOver = true
    }
  }

 


  function lost(){
    if(gameOver){
      cancelAnimationFrame(id);
      resestSpeed();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGameDone()
    
   
    }
  }

  function scoreIncreaseSpeed(){
    if (score >= 600){
        trashSpeed = -10;
        coneSpeed = -10;
    } else if (score >= 400){
        trashSpeed = -9;
        coneSpeed = -9;
    } else if (score >= 150) {
        trashSpeed = -8;
        coneSpeed = -8;
    } else if (score >= 100){
      coneSpeed = -7
      trashSpeed = -7
    } else if (score >= 50) {
      coneSpeed = -6
      trashSpeed = -6
    }
  } 


  
  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);


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

    if (leftPressed && jerryFig.x >= 100){
      jerryFig.x_velocity -= 0.5;
    }

    if (rightPressed && jerryFig.x <= 700){
      jerryFig.x_velocity += 0.5;
    }

    jerryFig.y_velocity += 1.5;
    jerryFig.x += jerryFig.x_velocity;
    jerryFig.y += jerryFig.y_velocity;
    jerryFig.x_velocity *= 0.9;
    jerryFig.y_velocity *= 0.9;

    if(jerryFig.y > canvas.height -100 ){
      jerryFig.jumping = false;
      jerryFig.y = 400-100;
      jerryFig.y_velocity = 0;
    }
    
     
    ctx.drawImage(jerry, jerryFig.x, jerryFig.y, jerryFig.width, jerryFig.height);
    ctx.drawImage(musicNote, musicNote1.x, musicNote1.y,musicNote1.width, musicNote1.height)
    ctx.drawImage(musicNote2img, musicNote2.x, musicNote2.y, musicNote2.width, musicNote2.height)
    ctx.drawImage(musicNote3Img, musicNote3.x, musicNote3.y, musicNote3.width, musicNote3.height)
    
    ctx.drawImage(trash, trashPosX, trashPosY, 75, 50);
    ctx.drawImage(cone, conePosX, conePosY, 50, 50);

   

    drawScore();
    jerryHitNote1();
    jerryHitNote2()
    jerryHitNote3();
    trashHitJerry(); 
    coneHitJerry();
 


    
    
    //ball moving
    scoreIncreaseSpeed();
    trashPosX+= trashSpeed
    conePosX += coneSpeed;
    musicNote1.x += musicNote1.speed;
    musicNote3.x += musicNote3.speed;
    music2Move();
    
    
    
    if(trashPosX < 0){restartTrash();}
    if (musicNote1.x < 0) { restartMusicNote1()}
    if(musicNote2.x < 0){restartMusicNote2()}
    if (musicNote3.x < 0) { restartMusicNote3() }
    if (conePosX < 0) { restartCone() }
  

    
    
    id = requestAnimationFrame(draw)
    
        
  lost()      
  }
      
      // draw()
      increaseScore();
      

      lost();

      
      
  
      const start = document.getElementById('start')
      console.log(document.getElementById('start'))
      start.addEventListener('click', () => {
        
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


