import jerryFig from './jerry';
import { 
  trashCanOne, 
  coneOne, 
  musicNoteOne, 
  musicNoteThree, 
  musicNoteTwo,
  invinciblePowerUp,
  doubleJumpPowerUp,
  speedBoostPowerUp
} from './object';
import { 
  music2Move, 
  resestSpeed, 
  jerryHitNote1, 
  jerryHitNote2, 
  jerryHitNote3, 
  trashHitJerry, 
  coneHitJerry, 
  scoreIncreaseSpeed,
  updateGameObjects,
  checkMusicNoteCollisions,
  checkPowerUpCollisions,
  checkObstacleCollisions,
  updateObjectSpeeds
} from './game_moves';
import { newGame } from './game';
import { f_config } from './fb_config';
// import * as firebase from "firebase/app";
// import "firebase/database";
// import "" from 'firebase/database';


document.addEventListener("DOMContentLoaded", () =>{
  // Your web app's Firebase configuration
  var firebaseConfig = f_config;
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext('2d');
  let id;

  // Load images
  const jerry = new Image();
  jerry.src = 'assets/images/jerr3.png';

  const trash = new Image();
  trash.src = 'assets/images/trash.png';

  const cone = new Image();
  cone.src = 'assets/images/cone.png';

  const musicNote = new Image();
  musicNote.src = 'assets/images/music1.png';
  
  const musicNote3Img = new Image();
  musicNote3Img.src = 'assets/images/music1.png';
 
  const musicNote2img = new Image();
  musicNote2img.src = 'assets/images/music2.png';

  // Power-up images (using existing images for now)
  const powerUpImg = new Image();
  powerUpImg.src = 'assets/images/music2.png'; // Using music note as power-up placeholder

  // Score increment
  function scorePlus() { 
    if (!newGame.paused && !newGame.gameOver && !newGame.begin) {
      newGame.score += 1;
    }
  }
 
  setInterval(scorePlus, 500);

  // Enhanced input handling
  document.addEventListener("keydown", keyDownHander, false);
  document.addEventListener("keyup", keyUpHander, false);

  function keyDownHander(e) {
    if (e.keyCode === 32) {
      jerryFig.spacePressed = true;
    } else if (e.keyCode === 37) {
      jerryFig.leftPressed = true;
    } else if (e.keyCode === 39) {
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

  // Enhanced UI drawing functions
  function drawScore() {
    ctx.font = '20px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + newGame.score, 100, 50);
    
    // Draw lives
    ctx.fillText("Lives: " + newGame.lives, 100, 80);
    
    // Draw level
    ctx.fillText("Level: " + newGame.level, 100, 110);
  }

  function drawPowerUpStatus() {
    const powerUps = newGame.powerUps;
    let yPos = 140;
    
    if (powerUps.invincible) {
      ctx.fillStyle = "gold";
      ctx.fillText("INVINCIBLE!", 100, yPos);
      yPos += 25;
    }
    
    if (powerUps.doubleJump) {
      ctx.fillStyle = "blue";
      ctx.fillText("DOUBLE JUMP!", 100, yPos);
      yPos += 25;
    }
    
    if (powerUps.speedBoost) {
      ctx.fillStyle = "green";
      ctx.fillText("SPEED BOOST!", 100, yPos);
    }
  }

  function drawGameDone() {
    ctx.font = '30px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + newGame.score, 200, 150);
    ctx.fillText("Game Over!", 200, 200);
    ctx.fillText("Hit Enter to try again", 200, 250);
  }

  let finalScore;
  function enterName() {
    ctx.font = '30px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("New High Score: " + newGame.score, 200, 150);
    finalScore = newGame.score;
    ctx.fillText("Enter Name", 200, 200);
    let name = document.createElement("input")
    name.setAttribute("id", "name-id")
    name.setAttribute('type', 'text')
    name.setAttribute("maxlength",15)
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
      // Immediately remove the input elements to give user feedback
      removeEnterNodes();
      
      // Add a new document in collection "scores"
      db.collection("scores").doc().set({
        name: name,
        score: score
      })
        .then(function () {
          console.log("Document successfully written!");
          updateScores();
          newAfterHS();
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
          // If there's an error, show the input again
          isHighScore();
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


  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw road
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(800, 400);
    ctx.stroke();

    // Update Jerry with new physics and power-ups
    jerryFig.update(newGame);
    
    // Update all game objects
    updateGameObjects();
    
    // Update power-ups
    newGame.updatePowerUps();
    
    // Draw Jerry (with invincibility effect)
    if (newGame.powerUps.invincible) {
      ctx.globalAlpha = 0.7; // Make Jerry semi-transparent when invincible
    }
    ctx.drawImage(jerry, jerryFig.x, jerryFig.y, jerryFig.width, jerryFig.height);
    ctx.globalAlpha = 1.0; // Reset transparency
    
    // Draw music notes
    if (musicNoteOne.active && !musicNoteOne.collected) {
      ctx.drawImage(musicNote, musicNoteOne.posX, musicNoteOne.posY, musicNoteOne.width, musicNoteOne.height);
    }
    if (musicNoteTwo.active && !musicNoteTwo.collected) {
      ctx.drawImage(musicNote2img, musicNoteTwo.posX, musicNoteTwo.posY, musicNoteTwo.width, musicNoteTwo.height);
    }
    if (musicNoteThree.active && !musicNoteThree.collected) {
      ctx.drawImage(musicNote3Img, musicNoteThree.posX, musicNoteThree.posY, musicNoteThree.width, musicNoteThree.height);
    }
    
    // Draw obstacles
    if (trashCanOne.active) {
      ctx.drawImage(trash, trashCanOne.posX, trashCanOne.posY, trashCanOne.width, trashCanOne.height);
    }
    if (coneOne.active) {
      ctx.drawImage(cone, coneOne.posX, coneOne.posY, coneOne.width, coneOne.height);
    }
    
    // Draw power-ups
    if (invinciblePowerUp.active && !invinciblePowerUp.collected) {
      ctx.fillStyle = "gold";
      ctx.globalAlpha = 0.8;
      ctx.drawImage(powerUpImg, invinciblePowerUp.posX, invinciblePowerUp.posY, invinciblePowerUp.width, invinciblePowerUp.height);
      ctx.globalAlpha = 1.0;
    }
    if (doubleJumpPowerUp.active && !doubleJumpPowerUp.collected) {
      ctx.fillStyle = "blue";
      ctx.globalAlpha = 0.8;
      ctx.drawImage(powerUpImg, doubleJumpPowerUp.posX, doubleJumpPowerUp.posY, doubleJumpPowerUp.width, doubleJumpPowerUp.height);
      ctx.globalAlpha = 1.0;
    }
    if (speedBoostPowerUp.active && !speedBoostPowerUp.collected) {
      ctx.fillStyle = "green";
      ctx.globalAlpha = 0.8;
      ctx.drawImage(powerUpImg, speedBoostPowerUp.posX, speedBoostPowerUp.posY, speedBoostPowerUp.width, speedBoostPowerUp.height);
      ctx.globalAlpha = 1.0;
    }

    // Draw UI
    drawScore();
    drawPowerUpStatus();
    
    // Enhanced collision detection
    checkMusicNoteCollisions();
    checkPowerUpCollisions();
    checkObstacleCollisions();
    
    // Update object speeds based on difficulty
    updateObjectSpeeds();
    
    // Legacy collision functions for backward compatibility (commented out to avoid conflicts)
    // jerryHitNote1();
    // jerryHitNote2();
    // jerryHitNote3();
    // trashHitJerry(); 
    // coneHitJerry();
    scoreIncreaseSpeed();
    
    id = requestAnimationFrame(draw);
    lost();
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
        newGame.resetGame();
        draw()
        newGame.begin = false;
        
        audio.play()
        music_play = true
        
      } else if (newGame.gameOver) {
        newGame.resetGame();
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
        newGame.resetGame();
        draw()
        newGame.begin = false;
        audio.play()  // TURN BACK ON
        music_play = true

      } else if (newGame.gameOver) {
        newGame.resetGame();
        draw()
        newGame.begin = false;
        // audio.play()  //leave off so it goes with game play
        // music_play = true
      }
    }
  }

  function removeEnterNodes(){
    // Remove the name input field
    const nameInput = document.getElementById("name-id");
    if (nameInput) {
      nameInput.remove();
      console.log("Name input removed");
    } else {
      console.log("Name input not found");
    }
    
    // Remove the submit button
    const submitButton = document.getElementById("butt-name");
    if (submitButton) {
      submitButton.remove();
      console.log("Submit button removed");
    } else {
      console.log("Submit button not found");
    }
    
    // Also try to remove any elements with these classes as backup
    const inputs = document.querySelectorAll('input[type="text"]');
    const buttons = document.querySelectorAll('button');
    
    inputs.forEach(input => {
      if (input.id === "name-id" || input.placeholder === "Enter name") {
        input.remove();
        console.log("Removed input by selector");
      }
    });
    
    buttons.forEach(button => {
      if (button.id === "butt-name" || button.textContent === "submit") {
        button.remove();
        console.log("Removed button by selector");
      }
    });
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


