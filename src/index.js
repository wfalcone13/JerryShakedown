import jerryFig from './jerry';
import { trashCanOne, coneOne, musicNoteOne, musicNoteThree, musicNoteTwo} from './object';
import { music2Move, resestSpeed, jerryHitNote1, jerryHitNote2, jerryHitNote3, 
        trashHitJerry, coneHitJerry, scoreIncreaseSpeed} from './game_moves'
import {newGame} from './game';
import { f_config } from './fb_config'
// import * as firebase from "firebase/app";
// import "firebase/database";
// import "" from 'firebase/database';


document.addEventListener("DOMContentLoaded", () =>{
  // Your web app's Firebase configuration
  var firebaseConfig = f_config;
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

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




  function scorePlus(){ 
      newGame.score+=1
  }
 
  setInterval(scorePlus, 500)



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

  let finalScore;
  function enterName(){
    ctx.font = '30px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("New High Score: " + newGame.score, 200, 150)
    finalScore = newGame.score
    ctx.fillText("Enter Name", 200, 200)
    let name = document.createElement("input")
    name.setAttribute("id", "name-id")
    name.autofocus = true;

    let butt = document.createElement("button")
    butt.setAttribute("id", "butt-name")
    butt.innerText = "submit"
    
    let b = document.getElementsByClassName("board")[0];
    b.appendChild(name)

    b.appendChild(butt)

  }

  function newAfterHS(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("Hit Enter to go again", 200, 200)

  }

  function beginGameScreen(){
    
    ctx.font = '30px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("Press Enter to start", 300,200)
  }

  //check if the score is a top 10
  //grab the score
  //check the db if its higher than the lowest score

  function isHighScore(){
    
    let score = newGame.score;
    db.collection("scores").orderBy("score", "desc").limit(10).get().then((snapshot) => {
      let lastHighScore = snapshot.docs.pop().data().score;
      
      if (score > lastHighScore){
        enterName()
        let button = document.getElementById("butt-name")
        button.addEventListener("click", enterScore)
      } else {
        drawGameDone()
      }
    })
  }

  function enterScore(){
    let name = document.getElementById("name-id").value;
    let score = finalScore;
     
    if (name !== "") {
     
      // Add a new document in collection "scores"
      db.collection("scores").doc().set({
        name: name,
        score: score
      })
        .then(function () {
          console.log("Document successfully written!");
          updateScores();
          removeEnterNodes()
          newAfterHS()
          
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    } else {
      alert('Please enter a name');
    }

  }
  

  function lost(){
    if (newGame.gameOver){
      cancelAnimationFrame(id);
      resestSpeed();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // drawGameDone() 
      isHighScore()
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
  
    // increaseScore();
  
    lost();

    let music_play;     


  if (newGame.begin){
        beginGameScreen()
      }

    const start = document.getElementById('start')
    start.addEventListener('click', () => {
      
      if (newGame.paused){
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
        audio.play()  // TURN BACK ON
        music_play = true

      } else if (newGame.gameOver) {
        newGame.score = 0;
        newGame.gameOver = false;
        draw()
        newGame.begin = false;
        // audio.play()  //leave off so it goes with game play
        // music_play = true
      }
    }
  }

  function removeEnterNodes(){
    let node = document.getElementsByClassName("board")[0];

    let enter = node.childNodes[3];
    let sub = node.childNodes[4];

    node.removeChild(enter);
    node.removeChild(sub)
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
        finalScore = newGame.score

      } else if (newGame.paused) {
        draw()
        newGame.paused = false;
        pText.innerText = "pause"
        newGame.score = finalScore
        
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
      
  function updateScores() {
    // Clear current scores in our scoreboard
    document.getElementById('scoreboard').innerHTML = '<tr><th>Name</th><th>Score</th></tr>';

    // Get the top 5 scores from our scoreboard
    db.collection("scores").orderBy("score", "desc").limit(10).get().then((snapshot) => {
      snapshot.forEach((doc) => {
        document.getElementById('scoreboard').innerHTML += '<tr>' +
          '<td>' + doc.data().name + '</td>' +
          '<td>' + doc.data().score + '</td>' +
          '</tr>';
      })
    })
  }

  window.onload = updateScores();
      
})


