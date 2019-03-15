import jerryFig from './jerry';
import { trashCanOne, coneOne, musicNoteOne} from './object';


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



  const jerry = new Image();
  jerry.src ='assets/images/jerr3.png';







  //trash figure
             
  const trash = new Image();
  trash.src = 'assets/images/trash.png';


  //cone figure
 
  const cone = new Image();
  cone.src = 'assets/images/cone.png'

  //music figure

  
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



  function restartmusicNoteOne(){
   
    musicNoteOne.posX = Math.floor(Math.random() * (1300 - canvas.width) + canvas.width);
    musicNoteOne.posY = Math.floor(Math.random() * (375 - 250) + 100)
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
    trashCanOne.posX = Math.floor(Math.random() * (1500 - 780) + 780)   //random
  
  }
  
  function restartCone() {
    coneOne.posX = Math.floor(Math.random() * (1300 - 780) + 780)  
    
  }


  function gameOverObs(){
    coneOne.posX = coneOne.start;
    trashCanOne.posX = trashCanOne.start
    
  }
  function restartJer(){
    
    jerryFig.x_velocity =0;
    jerryFig.x = 150;
    leftPressed = false;
    rightPressed = false;
    
   
  }
  
  function restartObjs(){
    
    trashCanOne.speed = -4
    coneOne.speed = -4
    restartJer();
    gameOverObs();
    restartmusicNoteOne();
    restartMusicNote2();
    restartMusicNote3();
    
   
    
  }
  
  //score info
  
  let score = 0;

  function scorePlus(){
    if(!paused){
    score+=1
    }
    
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
    ctx.fillText("Hit Enter to try again", 200, 250 )
  }

  function beginGameScreen(){
    
    ctx.font = '30px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("Press Enter to start", 300,200)
    
  }



  // collision
  function jerryHitNote1(){  
    if (((musicNoteOne.posX >= jerryFig.x - 30 && musicNoteOne.posX - 20 <= jerryFig.x + 40) && (musicNoteOne.posY + 20 >= jerryFig.y && musicNoteOne.posY + 15 < jerryFig.y + 100)) || (musicNoteOne.posX === jerryFig.x + 50 && (musicNoteOne.posY > jerryFig.y && musicNoteOne.posY < jerryFig.y + 100))) {
      score += 5
      musicNoteOne.posX = Math.floor(Math.random() * (1000 - canvas.width) + canvas.width);
      musicNoteOne.posY = Math.floor(Math.random() * (300 - 100) + 100)
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
    coneOne.speed = -4;
    trashCanOne.speed = -4;
  }

  function trashHitJerry(){
    if (trashCanOne.posX === jerryFig.x+30 && (trashCanOne.posY > jerryFig.y && trashCanOne.posY < jerryFig.y+100)  ) {
      
      restartObjs();
      gameOver = true
    } else if ( jerryFig.y+100 >= trashCanOne.posY && (trashCanOne.posX >= jerryFig.x-30 && trashCanOne.posX <= jerryFig.x+30) ){
   
      restartObjs();
      gameOver = true
    }
  }

  function coneHitJerry() {
    if (coneOne.posX === jerryFig.x + 30 && (coneOne.posY > jerryFig.y && coneOne.posY < jerryFig.y + 100)) {

      restartObjs();
      gameOver = true
    } else if (jerryFig.y + 100 >= coneOne.posY && (coneOne.posX >= jerryFig.x - 30 && coneOne.posX <= jerryFig.x + 30)) {

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
        trashCanOne.speed = -10;
        coneOne.speed = -10;
    } else if (score >= 400){
        trashCanOne.speed = -9;
        coneOne.speed = -9;
    } else if (score >= 150) {
        trashCanOne.speed = -8;
        coneOne.speed = -8;
    } else if (score >= 100){
      coneOne.speed = -7
      trashCanOne.speed = -7
    } else if (score >= 50) {
      coneOne.speed = -6
      trashCanOne.speed = -6
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
    ctx.drawImage(musicNote, musicNoteOne.posX, musicNoteOne.posY, musicNoteOne.width, musicNoteOne.height)
    ctx.drawImage(musicNote2img, musicNote2.x, musicNote2.y, musicNote2.width, musicNote2.height)
    ctx.drawImage(musicNote3Img, musicNote3.x, musicNote3.y, musicNote3.width, musicNote3.height)
    
    ctx.drawImage(trash, trashCanOne.posX, trashCanOne.posY, trashCanOne.height, trashCanOne.width);
    ctx.drawImage(cone, coneOne.posX, coneOne.posY, coneOne.height, coneOne.width);

   

    drawScore();
    jerryHitNote1();
    jerryHitNote2()
    jerryHitNote3();
    trashHitJerry(); 
    coneHitJerry();
 


    
    
    //ball moving
    scoreIncreaseSpeed();
    trashCanOne.posX+= trashCanOne.speed
    coneOne.posX += coneOne.speed;
    musicNoteOne.posX += musicNoteOne.speed;
    musicNote3.x += musicNote3.speed;
    music2Move();
    
    
    
    if(trashCanOne.posX < 0){restartTrash();}
    if (musicNoteOne.posX < 0) { restartmusicNoteOne()}
    if(musicNote2.x < 0){restartMusicNote2()}
    if (musicNote3.x < 0) { restartMusicNote3() }
    if (coneOne.posX < 0) { restartCone() }
  

    
    
    id = requestAnimationFrame(draw)
   
        
  lost()      
  }
      
      // draw()
      increaseScore();
      

      lost();

    
      let music_play;
    
     


      if(begin){
        beginGameScreen()
      }

      const start = document.getElementById('start')
      start.addEventListener('click', () => {
        
        if(paused){
          
          // requestAnimationFrame(draw);
          draw()
          paused = false;
          
          
          
        } else if (begin){
          
          score = 0;
          gameOver = false;
          draw()
          begin = false;
          audio.play()
          music_play = true
          
         
        } else if (gameOver) {
          score = 0;
          gameOver = false;
          draw()
          begin = false;
          audio.play()
          music_play = true 
       }
        
      })
      

  document.addEventListener("keydown", enterStart, false);
 
  function enterStart(e){
    
    if(e.keyCode === 13){
      if (paused) {

        // requestAnimationFrame(draw);
        draw()
        paused = false;
      


      } else if (begin) {
        score = 0;
        gameOver = false;
        draw()
        begin = false;
        audio.play()
        music_play = true
        
      } else if (gameOver) {
        score = 0;
        gameOver = false;
        draw()
        begin = false;
        audio.play()
        music_play = true
      }
    }
  }

// Pause Functions
  document.addEventListener("keydown", pauseKey, false);
  const pText = document.getElementById('pause')
  function pauseKey(e){
    if(e.keyCode === 80){
      if (!paused && !gameOver && !begin) {
        cancelAnimationFrame(id);
        paused = true
        pText.innerText = "paused"
      } else if (paused) {

        // requestAnimationFrame(draw);
        draw()
        paused = false;
        pText.innerText = "pause"

      }
    }
  }
    

  const pause = document.getElementById('pause')
  pause.addEventListener('click', () => {
    if (!paused && !gameOver) {
      cancelAnimationFrame(id);
      paused = true
    }

  })

  // music
  const audio = new Audio();
  audio.src = "./assets/mp3/shake.mp3"
  

  const music = document.getElementById('music-p')
  music.addEventListener('mousedown', ()=>{
    if (music_play){
      audio.pause();
      music_play = !music_play
      music.innerText = 'Music On'
    } else {
      audio.play();
      music_play = !music_play
      music.innerText = 'Music Off'

      
    }

  })   
  
  document.addEventListener("keydown", musicKey, false);
  function musicKey(e){
    if(e.keyCode === 77){
      if (music_play) {
        audio.pause();
        music_play = !music_play
        music.innerText = 'Music On'
      } else {
        audio.play();
        music_play = !music_play
        music.innerText = 'Music Off'


      }
    }
  }
      
      
})


