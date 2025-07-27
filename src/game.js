

class GameStatus {
  constructor() {
    this.paused = false;
    this.begin = true;
    this.gameOver = false;
    this.score = 0;
    this.lives = 3;
    this.level = 1;
    this.powerUps = {
      invincible: false,
      doubleJump: false,
      speedBoost: false
    };
    this.powerUpTimers = {
      invincible: 0,
      doubleJump: 0,
      speedBoost: 0
    };
    this.difficulty = {
      obstacleSpeed: -4,
      obstacleFrequency: 1,
      noteValue: 5
    };
  }

  resetGame() {
    this.gameOver = false;
    this.score = 0;
    this.lives = 3;
    this.level = 1;
    this.powerUps = {
      invincible: false,
      doubleJump: false,
      speedBoost: false
    };
    this.powerUpTimers = {
      invincible: 0,
      doubleJump: 0,
      speedBoost: 0
    };
    this.difficulty = {
      obstacleSpeed: -4,
      obstacleFrequency: 1,
      noteValue: 5
    };
  }

  loseLife() {
    this.lives--;
    if (this.lives <= 0) {
      this.gameOver = true;
    }
    return this.lives > 0;
  }

  updateDifficulty() {
    // Progressive difficulty based on score
    if (this.score >= 1000) {
      this.level = 4;
      this.difficulty.obstacleSpeed = -12;
      this.difficulty.obstacleFrequency = 1.5;
      this.difficulty.noteValue = 10;
    } else if (this.score >= 600) {
      this.level = 3;
      this.difficulty.obstacleSpeed = -10;
      this.difficulty.obstacleFrequency = 1.3;
      this.difficulty.noteValue = 8;
    } else if (this.score >= 300) {
      this.level = 2;
      this.difficulty.obstacleSpeed = -7;
      this.difficulty.obstacleFrequency = 1.1;
      this.difficulty.noteValue = 6;
    }
  }

  activatePowerUp(type, duration = 5000) {
    this.powerUps[type] = true;
    this.powerUpTimers[type] = Date.now() + duration;
  }

  updatePowerUps() {
    const now = Date.now();
    Object.keys(this.powerUpTimers).forEach(type => {
      if (this.powerUpTimers[type] > 0 && now > this.powerUpTimers[type]) {
        this.powerUps[type] = false;
        this.powerUpTimers[type] = 0;
        console.log("Power-up expired:", type);
      }
    });
  }
}

export let newGame = new GameStatus(); 