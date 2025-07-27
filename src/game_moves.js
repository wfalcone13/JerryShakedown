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
import jerryFig from './jerry';
import { newGame } from './game';

// Update all game objects
export function updateGameObjects() {
  // Update obstacles
  trashCanOne.update();
  coneOne.update();
  
  // Update collectibles
  musicNoteOne.update();
  musicNoteTwo.update();
  musicNoteThree.update();
  
  // Update power-ups
  invinciblePowerUp.update();
  doubleJumpPowerUp.update();
  speedBoostPowerUp.update();
}

// Enhanced collision detection for music notes
export function checkMusicNoteCollisions() {
  const notes = [musicNoteOne, musicNoteTwo, musicNoteThree];
  
  notes.forEach(note => {
    if (note.active && !note.collected && jerryFig.isColliding(note)) {
      const points = note.collect();
      newGame.score += points;
      
      // Progressive difficulty
      newGame.updateDifficulty();
    }
  });
}

// Enhanced collision detection for power-ups
export function checkPowerUpCollisions() {
  const powerUps = [invinciblePowerUp, doubleJumpPowerUp, speedBoostPowerUp];
  
  powerUps.forEach(powerUp => {
    if (powerUp.active && !powerUp.collected && jerryFig.isColliding(powerUp)) {
      const powerUpData = powerUp.collect();
      newGame.activatePowerUp(powerUpData.type, powerUpData.duration);
    }
  });
}

// Enhanced collision detection for obstacles
export function checkObstacleCollisions() {
  // Debug invincibility status
  if (newGame.powerUps.invincible) {
    console.log("Skipping collision - invincible");
    console.log("Invincibility timer:", newGame.powerUpTimers.invincible - Date.now(), "ms remaining");
    return;
  }
  
  const obstacles = [trashCanOne, coneOne];
  
  obstacles.forEach(obstacle => {
    if (obstacle.active && jerryFig.isColliding(obstacle)) {
      console.log("Collision detected with:", obstacle.constructor.name);
      console.log("Obstacle speed:", obstacle.speed);
      console.log("Jerry speed:", jerryFig.xVelocity);
      handleObstacleCollision();
    }
  });
}

// Handle obstacle collision with lives system
function handleObstacleCollision() {
  console.log("Handling obstacle collision. Lives before:", newGame.lives);
  const stillAlive = newGame.loseLife();
  console.log("Lives after:", newGame.lives, "Still alive:", stillAlive);
  
  if (stillAlive) {
    console.log("Resetting Jerry position and giving invincibility");
    // Reset Jerry position but keep score
    jerryFig.restartJer();
    
    // Brief invincibility period
    newGame.activatePowerUp('invincible', 2000);
    
    // Reset obstacles
    resetObstacles();
  } else {
    console.log("Game over!");
    // Game over
    newGame.gameOver = true;
    resetAllObjects();
  }
}

// Reset all game objects
export function resetAllObjects() {
  // Reset obstacles
  trashCanOne.reset();
  coneOne.reset();
  
  // Reset collectibles
  musicNoteOne.reset();
  musicNoteTwo.reset();
  musicNoteThree.reset();
  
  // Reset power-ups
  invinciblePowerUp.reset();
  doubleJumpPowerUp.reset();
  speedBoostPowerUp.reset();
  
  // Reset Jerry
  jerryFig.restartJer();
}

// Reset only obstacles
export function resetObstacles() {
  trashCanOne.reset();
  coneOne.reset();
}

// Update object speeds based on difficulty
export function updateObjectSpeeds() {
  const speed = newGame.difficulty.obstacleSpeed;
  
  trashCanOne.speed = speed;
  coneOne.speed = speed;
  
  // Power-ups move slower
  invinciblePowerUp.speed = speed * 0.6;
  doubleJumpPowerUp.speed = speed * 0.6;
  speedBoostPowerUp.speed = speed * 0.6;
}

// Legacy functions for backward compatibility
export function music2Move() {
  musicNoteTwo.update();
}

export function gameOverObs() {
  resetObstacles();
}

export function restartObjs() {
  resetAllObjects();
  newGame.resetGame();
}

export function resestSpeed() {
  updateObjectSpeeds();
}

// Legacy collision functions (simplified versions)
export function jerryHitNote1() {
  if (musicNoteOne.active && !musicNoteOne.collected && jerryFig.isColliding(musicNoteOne)) {
    newGame.score += musicNoteOne.collect();
    newGame.updateDifficulty();
  }
}

export function jerryHitNote2() {
  if (musicNoteTwo.active && !musicNoteTwo.collected && jerryFig.isColliding(musicNoteTwo)) {
    newGame.score += musicNoteTwo.collect();
    newGame.updateDifficulty();
  }
}

export function jerryHitNote3() {
  if (musicNoteThree.active && !musicNoteThree.collected && jerryFig.isColliding(musicNoteThree)) {
    newGame.score += musicNoteThree.collect();
    newGame.updateDifficulty();
  }
}

export function trashHitJerry() {
  if (!newGame.powerUps.invincible && trashCanOne.active && jerryFig.isColliding(trashCanOne)) {
    console.log("Legacy collision detected with trash");
    handleObstacleCollision();
  }
}

export function coneHitJerry() {
  if (!newGame.powerUps.invincible && coneOne.active && jerryFig.isColliding(coneOne)) {
    console.log("Legacy collision detected with cone");
    handleObstacleCollision();
  }
}

export function scoreIncreaseSpeed() {
  newGame.updateDifficulty();
  updateObjectSpeeds();
} 

