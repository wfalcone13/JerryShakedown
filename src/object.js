// Base class for all game objects
class GameObject {
  constructor(start, posX, posY, speed, height, width) {
    this.start = start;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.height = height;
    this.width = width;
    this.active = true;
  }

  update() {
    this.posX += this.speed;
    
    // Reset when off screen
    if (this.posX < -100) {
      this.reset();
    }
  }

  reset() {
    this.posX = this.start;
    this.active = true;
  }

  getBounds() {
    return {
      left: this.posX,
      right: this.posX + this.width,
      top: this.posY,
      bottom: this.posY + this.height
    };
  }

  isColliding(other) {
    const bounds = this.getBounds();
    const otherBounds = other.getBounds ? other.getBounds() : {
      left: other.posX,
      right: other.posX + other.width,
      top: other.posY,
      bottom: other.posY + other.height
    };

    return !(bounds.left > otherBounds.right || 
             bounds.right < otherBounds.left || 
             bounds.top > otherBounds.bottom || 
             bounds.bottom < otherBounds.top);
  }
}

// Obstacle classes
export class Trash extends GameObject {
  constructor(start, posX, posY, speed, height, width) {
    super(start, posX, posY, speed, height, width);
  }

  reset() {
    this.posX = Math.floor(Math.random() * (1500 - 780) + 780);
    this.posY = Math.floor(Math.random() * (350 - 300) + 300); // Random ground height
    this.active = true;
  }
}

export class Cone extends GameObject {
  constructor(start, posX, posY, speed, height, width) {
    super(start, posX, posY, speed, height, width);
  }

  reset() {
    this.posX = Math.floor(Math.random() * (1300 - 780) + 780);
    this.posY = Math.floor(Math.random() * (350 - 300) + 300); // Random ground height
    this.active = true;
  }
}

// Collectible classes
export class MusicNote extends GameObject {
  constructor(start, posX, posY, speed, height, width, value = 5) {
    super(start, posX, posY, speed, height, width);
    this.value = value;
    this.collected = false;
    this.animationFrame = 0;
    this.animationSpeed = 0.1;
  }

  update() {
    super.update();
    
    // Floating animation
    this.animationFrame += this.animationSpeed;
    this.posY += Math.sin(this.animationFrame) * 0.5;
  }

  reset() {
    this.posX = Math.floor(Math.random() * (1300 - 800) + 800);
    this.posY = Math.floor(Math.random() * (300 - 150) + 150); // Random height variation
    this.collected = false;
    this.active = true;
  }

  collect() {
    this.collected = true;
    this.active = false;
    return this.value;
  }
}

// Power-up classes
export class PowerUp extends GameObject {
  constructor(start, posX, posY, speed, height, width, type, duration = 5000) {
    super(start, posX, posY, speed, height, width);
    this.type = type; // 'invincible', 'doubleJump', 'speedBoost'
    this.duration = duration;
    this.collected = false;
    this.animationFrame = 0;
    this.animationSpeed = 0.15;
  }

  update() {
    super.update();
    
    // Pulsing animation
    this.animationFrame += this.animationSpeed;
    this.width = this.width + Math.sin(this.animationFrame) * 5;
    this.height = this.height + Math.sin(this.animationFrame) * 5;
  }

  reset() {
    this.posX = Math.floor(Math.random() * (1300 - 800) + 800);
    this.posY = Math.floor(Math.random() * (300 - 150) + 150); // Random height variation
    this.collected = false;
    this.active = true;
    this.width = 50; // Reset to original size
    this.height = 50;
  }

  collect() {
    this.collected = true;
    this.active = false;
    return { type: this.type, duration: this.duration };
  }
}

// Create game objects with random heights
export let trashCanOne = new Trash(750, 750, Math.floor(Math.random() * (350 - 300) + 300), -5, 75, 50); // Random ground height
export let coneOne = new Cone(1020, 1020, Math.floor(Math.random() * (350 - 300) + 300), -5, 50, 50); // Random ground height

export let musicNoteOne = new MusicNote(
  500,
  500,
  Math.floor(Math.random() * (300 - 150) + 150), // Random height
  -4,
  50,
  25,
  5
);

export let musicNoteTwo = new MusicNote(
  700,
  700,
  Math.floor(Math.random() * (300 - 150) + 150), // Random height
  -4,
  50,
  25,
  5
);

export let musicNoteThree = new MusicNote(
  950,
  950,
  Math.floor(Math.random() * (300 - 150) + 150), // Random height
  -4,
  50,
  25,
  5
);

// Power-ups
export let invinciblePowerUp = new PowerUp(
  1200,
  1200,
  Math.floor(Math.random() * (300 - 150) + 150),
  -3,
  50,
  50,
  'invincible',
  8000
);

export let doubleJumpPowerUp = new PowerUp(
  1400,
  1400,
  Math.floor(Math.random() * (300 - 150) + 150),
  -3,
  50,
  50,
  'doubleJump',
  10000
);

export let speedBoostPowerUp = new PowerUp(
  1600,
  1600,
  Math.floor(Math.random() * (300 - 150) + 150),
  -3,
  50,
  50,
  'speedBoost',
  6000
);



