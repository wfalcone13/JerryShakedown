import jerryFig from './jerry';
import { trashCanOne, coneOne, musicNoteOne, musicNoteThree, musicNoteTwo} from './object';
import { music2Move, restartObjs, resestSpeed, jerryHitNote1, jerryHitNote2, jerryHitNote3, trashHitJerry, coneHitJerry} from './game_moves'
import {newGame} from './game';

document.addEventListener("DOMContentLoaded", () =>{
  let canvas = document.getElementById("game-canvas")
  let ctx = canvas.getContext('2d');
  let id;


  



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


  
  const musicNote3Img = new Image();
  musicNote3Img.src = 'assets/images/music1.png'

 

  const musicNote2img = new Image();
  musicNote2img.src = 'assets/images/music2.png'


  // movement functions

 
  


  function scorePlus(){
    if (!newGame.paused){
    newGame.score+=1
    } 
  }

 
  function increaseScore(){
    setInterval(scorePlus, 500)
  }

  




  

  

  document.addEventListener("keydown", keyDownHander, false);
  document.addEventListener("keyup", keyUpHander, false);

  function keyDownHander(e){
    if (e.keyCode === 32){
      jerryFig.spacePressed = true;
    } else if (e.keyCode === 37){
      jerryFig.leftPressed = true;
    } else if (e.keyCode === 39){
      jerryFig.rightPressed = true;
    }
  }

  function keyUpHander(e) {
    if (e.keyCode === 32) {
      jerryFig.spacePressed = false;
    } else if (e.keyCode === 37) {
      jerryFig.leftPressed = false;
    } else if (e.keyCode === 39) {
      jerryFig.rightPressed = false;
    }
  }





  function drawScore(){
    ctx.font ='20px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("Score: " +newGame.score, 100, 50)
  }

  function drawGameDone() {
    ctx.font = '30px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + newGame.score, 200, 150)
    ctx.fillText("Game Over!", 200, 200)
    ctx.fillText("Hit Enter to try again", 200, 250 )
  }

  function beginGameScreen(){
    
    ctx.font = '30px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("Press Enter to start", 300,200)
    
  }

 


  function lost(){
    if (newGame.gameOver){
      cancelAnimationFrame(id);
      resestSpeed();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGameDone()
    
   
    }
  }

  function scoreIncreaseSpeed(){
    if (newGame.score >= 600){
        trashCanOne.speed = -10;
        coneOne.speed = -10;
    } else if (newGame.score >= 400){
        trashCanOne.speed = -9;
        coneOne.speed = -9;
    } else if (newGame.score >= 150) {
        trashCanOne.speed = -8;
        coneOne.speed = -8;
    } else if (newGame.score >= 100){
      coneOne.speed = -7
      trashCanOne.speed = -7
    } else if (newGame.score >= 50) {
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
    if (jerryFig.spacePressed && jerryFig.jumping === false){
      jerryFig.y_velocity -=35;
      jerryFig.jumping = true;
    }

    if (jerryFig.leftPressed && jerryFig.x >= 100){
      jerryFig.x_velocity -= 0.5;
    }

    if (jerryFig.rightPressed && jerryFig.x <= 700){
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
    ctx.drawImage(musicNote2img, musicNoteTwo.posX, musicNoteTwo.posY, musicNoteTwo.width, musicNoteTwo.height)
    ctx.drawImage(musicNote3Img, musicNoteThree.posX, musicNoteThree.posY, musicNoteThree.width, musicNoteThree.height)
    
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
    musicNoteThree.posX += musicNoteThree.speed;
    music2Move();
    
    
    
    if (trashCanOne.posX < 0) {trashCanOne.restartTrash();}
    if (musicNoteOne.posX < 0) { musicNoteOne.restartMusicNote()}
    if (musicNoteTwo.posX < 0) { musicNoteTwo.restartMusicNote()}
    if (musicNoteThree.posX < 0) { musicNoteThree.restartMusicNote() }
    if (coneOne.posX < 0) { coneOne.restartCone() }
  

    
    
    id = requestAnimationFrame(draw)
   
        
  lost()      
  }
      
      // draw()
      increaseScore();
      

      lost();

    
      let music_play;
    
     


  if (newGame.begin){
        beginGameScreen()
      }

      const start = document.getElementById('start')
      start.addEventListener('click', () => {
        
        if (newGame.paused){
          
          // requestAnimationFrame(draw);
          draw()
          newGame.paused = false;
          
          
          
        } else if (newGame.begin){
          
          newGame.score = 0;
          newGame.gameOver = false;
          draw()
          newGame.begin = false;
          audio.play()
          music_play = true
          
         
        } else if (newGame.gameOver) {
          newGame.score = 0;
          newGame.gameOver = false;
          draw()
          newGame.begin = false;
          audio.play()
          music_play = true 
       }
        
      })
      

  document.addEventListener("keydown", enterStart, false);
 
  function enterStart(e){
    
    if(e.keyCode === 13){
      if (newGame.paused) {

        
        draw()
        newGame.paused = false;
      


      } else if (newGame.begin) {
        newGame.score = 0;
        newGame.gameOver = false;
        draw()
        newGame.begin = false;
        // audio.play()   TURN BACK ON
        music_play = true
        
      } else if (newGame.gameOver) {
        newGame.score = 0;
        newGame.gameOver = false;
        draw()
        newGame.begin = false;
        // audio.play()  TURN BACK ON
        music_play = true
      }
    }
  }

// Pause Functions
  document.addEventListener("keydown", pauseKey, false);
  const pText = document.getElementById('pause')
  function pauseKey(e){
    if(e.keyCode === 80){
      if (!newGame.paused && !newGame.gameOver && !newGame.begin) {
        cancelAnimationFrame(id);
        newGame.paused = true
        pText.innerText = "paused"
      } else if (newGame.paused) {

        // requestAnimationFrame(draw);
        draw()
        newGame.paused = false;
        pText.innerText = "pause"

      }
    }
  }
    

  const pause = document.getElementById('pause')
  pause.addEventListener('click', () => {
    if (!newGame.paused && !newGame.gameOver) {
      cancelAnimationFrame(id);
      newGame.paused = true
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


