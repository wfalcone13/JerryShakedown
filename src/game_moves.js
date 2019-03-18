import { trashCanOne, coneOne, musicNoteOne, musicNoteThree, musicNoteTwo } from './object';
import jerryFig from './jerry';
import {newGame} from './game'

export function music2Move() {
  musicNoteTwo.posX += musicNoteTwo.speed;
  musicNoteTwo.posY += Math.floor(Math.random() * (20 - 10) + 10)
  musicNoteTwo.posY -= Math.floor(Math.random() * (20 - 10) + 10)
}

export function gameOverObs() {
  coneOne.posX = coneOne.start;
  trashCanOne.posX = trashCanOne.start

}

export function restartObjs() {

  trashCanOne.speed = -4
  coneOne.speed = -4
  jerryFig.restartJer();
  gameOverObs();
  musicNoteOne.restartMusicNote();
  musicNoteTwo.restartMusicNote();
  musicNoteThree.restartMusicNote();

}


export function resestSpeed() {
  coneOne.speed = -4;
  trashCanOne.speed = -4;
}


export function jerryHitNote1() {
  if (((musicNoteOne.posX >= jerryFig.x - 30 && musicNoteOne.posX - 20 <= jerryFig.x + 40) && (musicNoteOne.posY + 20 >= jerryFig.y && musicNoteOne.posY + 15 < jerryFig.y + 100)) || (musicNoteOne.posX === jerryFig.x + 50 && (musicNoteOne.posY > jerryFig.y && musicNoteOne.posY < jerryFig.y + 100))) {
    newGame.score += 5
    musicNoteOne.posX = Math.floor(Math.random() * (1000 - 800) + 800);
    musicNoteOne.posY = Math.floor(Math.random() * (300 - 100) + 100)
  }
}

export function jerryHitNote3() {
  if (((musicNoteThree.posX >= jerryFig.x - 30 && musicNoteThree.posX - 20 <= jerryFig.x + 40) && (musicNoteThree.posY + 20 >= jerryFig.y && musicNoteThree.posY + 15 < jerryFig.y + 100)) || (musicNoteThree.posX === jerryFig.x + 50 && (musicNoteThree.posY > jerryFig.y && musicNoteThree.posY < jerryFig.y + 100))) {
    newGame.score += 5
    musicNoteThree.posX = Math.floor(Math.random() * (1000 - 800 + 35) + 800 + 25);
    musicNoteThree.posY = Math.floor(Math.random() * (300 - 100) + 100)
  }
}

export function jerryHitNote2() {
  if (((musicNoteTwo.posX >= jerryFig.x - 30 && musicNoteTwo.posX - 20 <= jerryFig.x + 40) && (musicNoteTwo.posY + 20 >= jerryFig.y && musicNoteTwo.posY + 15 <= jerryFig.y + 100)) || (musicNoteTwo.posX === jerryFig.x + 50 && (musicNoteTwo.posY >= jerryFig.y && musicNoteTwo.posY <= jerryFig.y + 100))) {
    newGame.score += 5
    musicNoteTwo.posX = Math.floor(Math.random() * (1000 - 800 + 50) + 800 + 50);
    musicNoteTwo.posY = Math.floor(Math.random() * (300 - 100) + 100)
  }
}

export function trashHitJerry() {
  if (trashCanOne.posX === jerryFig.x + 30 && (trashCanOne.posY > jerryFig.y && trashCanOne.posY < jerryFig.y + 100)) {

    restartObjs();
    newGame.gameOver = true
  } else if (jerryFig.y + 100 >= trashCanOne.posY && (trashCanOne.posX >= jerryFig.x - 30 && trashCanOne.posX <= jerryFig.x + 30)) {

    restartObjs();
    newGame.gameOver = true
  }
}

export function coneHitJerry() {
  if (coneOne.posX === jerryFig.x + 30 && (coneOne.posY > jerryFig.y && coneOne.posY < jerryFig.y + 100)) {

    restartObjs();
    newGame.gameOver = true
  } else if (jerryFig.y + 100 >= coneOne.posY && (coneOne.posX >= jerryFig.x - 30 && coneOne.posX <= jerryFig.x + 30)) {

    restartObjs();
    newGame.gameOver = true
  }
}


export function scoreIncreaseSpeed() {
  if (newGame.score >= 600) {
    trashCanOne.speed = -10;
    coneOne.speed = -10;
  } else if (newGame.score >= 400) {
    trashCanOne.speed = -9;
    coneOne.speed = -9;
  } else if (newGame.score >= 150) {
    trashCanOne.speed = -8;
    coneOne.speed = -8;
  } else if (newGame.score >= 100) {
    coneOne.speed = -7
    trashCanOne.speed = -7
  } else if (newGame.score >= 50) {
    coneOne.speed = -6
    trashCanOne.speed = -6
  }
} 

