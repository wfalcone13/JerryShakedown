/// create the trash, cone and music notes


class GameObjects{
  constructor(start, posX, posY, speed){
    this.start = start;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
  }
}

let trashCanOne = new GameObjects(
  750,
  750,
  350,
  -5
)


export default trashCanOne;