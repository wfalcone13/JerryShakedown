/// create the trash, cone and music notes


class GameObjects{
  constructor(start, posX, posY, speed, height, width){
    this.start = start;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.height = height;
    this.width = width;
  }
}

export let trashCanOne = new GameObjects(
  750,
  750,
  350,
  -5,
  75,
  50
)

export let coneOne = new GameObjects(
  1020,
  1020,
  350,
  -5,
  50,
  50
)

export  let musicNoteOne = new GameObjects(

)

// export default trashCanOne;