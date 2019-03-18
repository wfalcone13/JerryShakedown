

class GameStatus{
  constructor(){
    this.paused = false;
    this.begin = true;
    this.gameOver = false;
    this.score = 0;
  }
}

export let newGame = new GameStatus(); 