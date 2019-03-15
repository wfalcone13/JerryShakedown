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

export class Trash extends GameObjects{
  constructor(start, posX, posY, speed, height, width){
    super(start, posX, posY, speed, height, width)
  }

  restartTrash() {
  this.posX = Math.floor(Math.random() * (1500 - 780) + 780)   
  }
}



class Cone extends GameObjects{
  constructor(start, posX, posY, speed, height, width) {
    super(start, posX, posY, speed, height, width)
  }

  restartCone() {
    this.posX = Math.floor(Math.random() * (1300 - 780) + 780)

  }
}


class Notes extends GameObjects{
  constructor(posX, posY, speed, height, width){
    super(start,posX, posY, speed, height, width)
  }

  restartMusicNote(){
    this.posX = Math.floor(Math.random() * (1300 - 800) + 800);
    this.posY = Math.floor(Math.random() * (375 - 250) + 100);
  }
}

export let trashCanOne = new Trash(
  750,
  750,
  350,
  -5,
  75,
  50
)

export let coneOne = new Cone(
  1020,
  1020,
  350,
  -5,
  50,
  50
)

export let musicNoteOne = new Notes(
  500,
  Math.floor(Math.random() * ((350) - 150) + 150),
  -4,
  50,
  25
)


export let musicNoteTwo = new Notes(
  700,
  Math.floor(Math.random() * ((350) - 150) + 150),
  -4,
  50,
  25
)

export let musicNoteThree = new Notes(
  950,
  Math.floor(Math.random() * ((350) - 150) + 150),
  -4,
  50,
  25
)


  //for tire -- add bounce colision
  // function music2Move() {
  //   musicNote2.x += musicNote2.speed;
  //   // musicNote2.y += Math.floor(Math.random() * (20 - 10) + 10)
  //   // musicNote2.y -= Math.floor(Math.random() * (20 - 10) + 10)
  //   musicNote2.y_velocity += 1.5;
  //   musicNote2.x += musicNote2.x_velocity;
  //   musicNote2.y += musicNote2.y_velocity;
  //   musicNote2.x_velocity *= 0.9;
  //   musicNote2.y_velocity *= 0.9;
  //   musicNote2.y -= musicNote2.y_velocity;


  // }


