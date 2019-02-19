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

  let trashPosX = 825;   
  let trashPosY = canvas.height-50; 
  let trashSpeed = -5;             
  const trash = new Image();
  trash.src = 'assets/images/trash.png';


  //cone figure

  let conePosX = 1000;
  let conePosY = canvas.height - 50;
  let coneSpeed = -5;
  const cone = new Image();
  cone.src = 'assets/images/cone.png'

  //music figure

  let musicNote1 = {
    height:50,
    width: 25,
    x: 800,
    y: canvas.height-50,
    speed: -4
  }
  const musicNote = new Image();
  musicNote.src ='assets/images/music1.png'

  //music2 figure

  let musicNote2 = {
    height: 50,
    width: 25,
    x: 810,
    y: canvas.height-75,
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



  function restartMusicNote1(){
   
    musicNote1.x = canvas.width;
    musicNote1.y = Math.floor(Math.random() * (375 - 250) + 100)
    }

  function restartMusicNote2() {

    musicNote2.x = canvas.width;
    musicNote2.y = Math.floor(Math.random() * (375 - 250) + 100)


  }
  
  function restartTrash(){
    trashPosX = canvas.width + 100
    // trashSpeed = -5
  }
  
  function restartCone() {
    conePosX = canvas.width + 300
    // trashSpeed = -5
  }
  
  function restartObjs(){
    restartTrash();
    restartMusicNote1();
    restartMusicNote2();
    restartCone()
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
    ctx.font = '20px Staatliches';
    ctx.fillStyle = "black";
    ctx.fillText("Game Over Click Start to try again. Score: "+score, 200, 200)
  }



  // collision
  function jerryHitNote1(){  
    if (((musicNote1.x >= jerryFig.x - 30 && musicNote1.x-20 <= jerryFig.x + 40) && (musicNote1.y+15 >= jerryFig.y && musicNote1.y+10 < jerryFig.y + 100)) || (musicNote1.x === jerryFig.x + 50 && (musicNote1.y > jerryFig.y && musicNote1.y < jerryFig.y + 100))) {
      score += 5
      musicNote1.x = canvas.width
      musicNote1.y = Math.floor(Math.random() * (300 - 100) + 100)
    } 
  }

  function jerryHitNote2() {
    if (((musicNote2.x >= jerryFig.x - 30 && musicNote2.x-20 <= jerryFig.x + 40) && (musicNote2.y+15 >= jerryFig.y && musicNote2.y+10 <= jerryFig.y + 100)) || (musicNote2.x === jerryFig.x + 50 && (musicNote2.y >= jerryFig.y && musicNote2.y <= jerryFig.y + 100))) {
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGameDone()
    
   
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
    ctx.drawImage(trash, trashPosX, trashPosY, 75, 50);
    ctx.drawImage(cone, conePosX, conePosY, 50, 50);
    ctx.drawImage(musicNote, musicNote1.x, musicNote1.y,musicNote1.width, musicNote1.height)
    ctx.drawImage(musicNote2img, musicNote2.x, musicNote2.y, musicNote2.width, musicNote2.height)
    
    

   

    drawScore();
    jerryHitNote1();
    jerryHitNote2()
    trashHitJerry(); 
    coneHitJerry();
 


    
    
    //ball moving
   
    trashPosX+= trashSpeed
    conePosX += coneSpeed;
    musicNote1.x += musicNote1.speed
    music2Move();
 
    
    if(trashPosX < 0){restartTrash();}
    if (musicNote1.x < 0) { restartMusicNote1()}
    if(musicNote2.x < 0){restartMusicNote2()}
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


