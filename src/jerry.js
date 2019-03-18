



class Jerry {
  constructor(height, width, x, y, x_velocity, y_velocity){
    this.height = height;
    this.jumping = true;
    this.width = width;
    this.x = x;
    this.y = y;
    this.y_velocity = y_velocity;
    this.x_velocity = x_velocity;
    this.leftPressed = false;
    this.rightPressed = false;
    this.spacePressed = false;
  }

  restartJer(){
    this.x_velocity = 0;
    this.x = 150;
    this.leftPressed = false;
    this.rightPressed = false;
  }
}

export let jerryFig =  new Jerry(
  100,
  80,
  150,
  200,
  0,
  0
)

const jerry = new Image();
jerry.src = 'assets/images/jerr3.png';




export default jerryFig