
class Jerry {
  constructor(height, width, x, y, x_velocity, y_velocity){
    this.height = height;
    this.jumping = true;
    this.width = width;
    this.x = x;
    this.y = y;
    this.y_velocity = y_velocity;
    this.x_velocity = x_velocity;
  }
}

let jerryFig =  new Jerry(
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