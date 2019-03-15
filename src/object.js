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

export let musicNoteOne = new GameObjects(
  500,
  500,
  Math.floor(Math.random() * ((350) - 150) + 150),
  -4,
  50,
  25
)


export let musicNoteTwo = new GameObjects(
  500,
  700,
  Math.floor(Math.random() * ((350) - 150) + 150),
  -4,
  50,
  25
)

export let musicNoteThree = new GameObjects(
  500,
  950,
  Math.floor(Math.random() * ((350) - 150) + 150),
  -4,
  50,
  25
)



