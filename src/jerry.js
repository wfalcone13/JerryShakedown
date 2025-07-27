



class Jerry {
  constructor(height, width, x, y, xVelocity, yVelocity) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.yVelocity = yVelocity;
    this.xVelocity = xVelocity;
    
    // Movement controls
    this.leftPressed = false;
    this.rightPressed = false;
    this.spacePressed = false;
    
    // Physics
    this.gravity = 0.8;
    this.jumpPower = -15;
    this.maxFallSpeed = 12;
    this.groundY = 300; // Ground level (canvas height 400 - player height 100)
    this.isOnGround = true;
    this.jumping = false;
    
    // Power-up related
    this.jumpsRemaining = 1;
    this.maxJumps = 1;
    this.speedMultiplier = 1;
    this.invincible = false;
    this.invincibleTimer = 0;
    
    // Animation
    this.facingDirection = 1; // 1 for right, -1 for left
    this.animationFrame = 0;
    this.animationSpeed = 0.2;
  }

  update(gameState) {
    // Update power-up effects
    this.invincible = gameState.powerUps.invincible;
    this.speedMultiplier = gameState.powerUps.speedBoost ? 1.5 : 1;
    this.maxJumps = gameState.powerUps.doubleJump ? 2 : 1;
    
    // Handle movement
    this.handleMovement();
    
    // Apply physics
    this.applyPhysics();
    
    // Update animation
    this.updateAnimation();
  }

  handleMovement() {
    // Horizontal movement
    if (this.leftPressed) {
      this.xVelocity = -5 * this.speedMultiplier;
      this.facingDirection = -1;
    } else if (this.rightPressed) {
      this.xVelocity = 5 * this.speedMultiplier;
      this.facingDirection = 1;
    } else {
      this.xVelocity *= 0.8; // Friction
    }

    // Jumping
    if (this.spacePressed && this.jumpsRemaining > 0 && !this.jumping) {
      this.yVelocity = this.jumpPower;
      this.jumpsRemaining--;
      this.jumping = true;
      this.isOnGround = false;
    }

    // Reset jump when on ground
    if (this.isOnGround) {
      this.jumpsRemaining = this.maxJumps;
      this.jumping = false;
    }
  }

  applyPhysics() {
    // Apply gravity
    this.yVelocity += this.gravity;
    
    // Limit fall speed
    if (this.yVelocity > this.maxFallSpeed) {
      this.yVelocity = this.maxFallSpeed;
    }

    // Update position
    this.x += this.xVelocity;
    this.y += this.yVelocity;

    // Ground collision
    if (this.y >= this.groundY) {
      this.y = this.groundY;
      this.yVelocity = 0;
      this.isOnGround = true;
    }

    // Screen boundaries
    if (this.x < 0) this.x = 0;
    if (this.x > 720) this.x = 720; // Canvas width - player width
  }

  updateAnimation() {
    this.animationFrame += this.animationSpeed;
    if (this.animationFrame >= 4) {
      this.animationFrame = 0;
    }
  }

  restartJer() {
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.x = 150;
    this.y = this.groundY;
    this.leftPressed = false;
    this.rightPressed = false;
    this.spacePressed = false;
    this.isOnGround = true;
    this.jumpsRemaining = this.maxJumps;
    this.jumping = false;
  }

  getBounds() {
    return {
      left: this.x,
      right: this.x + this.width,
      top: this.y,
      bottom: this.y + this.height
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

    // Add some tolerance for better collision detection
    const tolerance = 10;
    
    const collision = !(bounds.left > otherBounds.right - tolerance || 
                       bounds.right < otherBounds.left + tolerance || 
                       bounds.top > otherBounds.bottom - tolerance || 
                       bounds.bottom < otherBounds.top + tolerance);
    
    // Debug collision detection occasionally
    if (Math.random() < 0.01) { // Only log 1% of the time to avoid spam
      console.log("Checking collision:", collision);
      console.log("Jerry bounds:", bounds);
      console.log("Other bounds:", otherBounds);
    }
    
    return collision;
  }
}

export let jerryFig = new Jerry(100, 80, 150, 300, 0, 0);

const jerry = new Image();
jerry.src = 'assets/images/jerr3.png';

export default jerryFig;