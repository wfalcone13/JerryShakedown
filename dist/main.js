/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", () =>{\n  let canvas = document.getElementById(\"game-canvas\")\n  let ctx = canvas.getContext('2d');\n  let id;\n  let paused = false;\n  let begin = true;\n  let gameOver = false;\n\n  \n\n\n \n\n\n  //jumping?\n  let spacePressed = false;\n\n  let leftPressed = false;\n  let rightPressed = false;\n\n  //main figure\n\n  let jerryFig = {\n    height: 100,\n    jumping: true,\n    width: 80,\n    x: 150,\n    x_velocity: 0,\n    y: 200,\n    y_velocity: 0\n  }\n\n  const jerry = new Image();\n  jerry.src ='assets/images/jerr3.png';\n\n\n\n\n\n\n\n  //trash figure\n  let trashStart = canvas.width-50\n  let trashPosX = trashStart;   \n  let trashPosY = canvas.height-50; \n  let trashSpeed = -5;             \n  const trash = new Image();\n  trash.src = 'assets/images/trash.png';\n\n\n  //cone figure\n  let coneStart = canvas.width+130\n  let conePosX = coneStart;\n  let conePosY = canvas.height - 50;\n  let coneSpeed = -5;\n  const cone = new Image();\n  cone.src = 'assets/images/cone.png'\n\n  //music figure\n\n  let musicNote1 = {\n    height:50,\n    width: 25,\n    x: 800,\n    y: canvas.height-50,\n    speed: -4\n  }\n  const musicNote = new Image();\n  musicNote.src ='assets/images/music1.png'\n\n  //music2 figure\n\n  let musicNote2 = {\n    height: 50,\n    width: 25,\n    x: 700,\n    x_velocity: 0,\n    y: canvas.height-200,\n    y_velocity: 0,\n    speed: -4\n  }\n\n  const musicNote2img = new Image();\n  musicNote2img.src = 'assets/images/music2.png'\n\n\n  // movement functions\n\n  function music2Move(){\n    musicNote2.x += musicNote2.speed;\n    musicNote2.y += Math.floor(Math.random() * (20 - 10) + 10)\n    musicNote2.y -= Math.floor(Math.random() * (20 - 10) + 10)\n      \n\n  }\n\n  //for tire -- add bounce colision\n  // function music2Move() {\n  //   musicNote2.x += musicNote2.speed;\n  //   // musicNote2.y += Math.floor(Math.random() * (20 - 10) + 10)\n  //   // musicNote2.y -= Math.floor(Math.random() * (20 - 10) + 10)\n  //   musicNote2.y_velocity += 1.5;\n  //   musicNote2.x += musicNote2.x_velocity;\n  //   musicNote2.y += musicNote2.y_velocity;\n  //   musicNote2.x_velocity *= 0.9;\n  //   musicNote2.y_velocity *= 0.9;\n  //   musicNote2.y -= musicNote2.y_velocity;\n\n\n  // }\n\n\n\n  function restartMusicNote1(){\n   \n    musicNote1.x = canvas.width;\n    musicNote1.y = Math.floor(Math.random() * (375 - 250) + 100)\n    }\n\n  function restartMusicNote2() {\n\n    musicNote2.x = canvas.width;\n    musicNote2.y = Math.floor(Math.random() * (375 - 250) + 100)\n    \n\n  }\n  \n  function restartTrash(){\n    trashPosX = Math.floor(Math.random() * (1500 - 780) + 780)   //random\n  \n  }\n  \n  function restartCone() {\n    conePosX = Math.floor(Math.random() * (1300 - 780) + 780)  \n    \n  }\n\n\n  function gameOverObs(){\n    conePosX = coneStart;\n    trashPosX = trashStart\n    \n  }\n  function restartJer(){\n    \n    jerryFig.x_velocity =0;\n    jerryFig.x = 150;\n    leftPressed = false;\n    rightPressed = false;\n    \n   \n  }\n  \n  function restartObjs(){\n    debugger\n    trashSpeed = -4\n    coneSpeed = -4\n    restartJer();\n    gameOverObs();\n    restartMusicNote1();\n    restartMusicNote2();\n    debugger\n   \n    \n  }\n  \n  //score info\n  \n  let score = 0;\n\n  function scorePlus(){\n    score+=1\n  }\n\n  function increaseScore(){\n    setInterval(scorePlus, 500)\n  }\n\n\n\n\n  \n\n  \n\n  document.addEventListener(\"keydown\", keyDownHander, false);\n  document.addEventListener(\"keyup\", keyUpHander, false);\n\n  function keyDownHander(e){\n    if (e.keyCode === 32){\n      spacePressed = true;\n    } else if (e.keyCode === 37){\n      leftPressed = true;\n    } else if (e.keyCode === 39){\n      rightPressed = true;\n    }\n  }\n\n  function keyUpHander(e) {\n    if (e.keyCode === 32) {\n      spacePressed = false;\n    } else if (e.keyCode === 37) {\n      leftPressed = false;\n    } else if (e.keyCode === 39) {\n      rightPressed = false;\n    }\n  }\n\n\n\n\n\n  function drawScore(){\n    ctx.font ='20px Staatliches';\n    ctx.fillStyle = \"black\";\n    ctx.fillText(\"Score: \"+score, 100, 50)\n  }\n\n  function drawGameDone() {\n    ctx.font = '20px Staatliches';\n    ctx.fillStyle = \"black\";\n    ctx.fillText(\"Game Over Click Start to try again. Score: \"+score, 200, 200)\n  }\n\n\n\n  // collision\n  function jerryHitNote1(){  \n    if (((musicNote1.x >= jerryFig.x - 30 && musicNote1.x-20 <= jerryFig.x + 40) && (musicNote1.y+15 >= jerryFig.y && musicNote1.y+10 < jerryFig.y + 100)) || (musicNote1.x === jerryFig.x + 50 && (musicNote1.y > jerryFig.y && musicNote1.y < jerryFig.y + 100))) {\n      score += 5\n      musicNote1.x = canvas.width\n      musicNote1.y = Math.floor(Math.random() * (300 - 100) + 100)\n    } \n  }\n\n  function jerryHitNote2() {\n    if (((musicNote2.x >= jerryFig.x - 30 && musicNote2.x-20 <= jerryFig.x + 40) && (musicNote2.y+15 >= jerryFig.y && musicNote2.y+10 <= jerryFig.y + 100)) || (musicNote2.x === jerryFig.x + 50 && (musicNote2.y >= jerryFig.y && musicNote2.y <= jerryFig.y + 100))) {\n      score += 5\n      musicNote2.x = canvas.width\n      musicNote2.y = Math.floor(Math.random() * (300 - 100) + 100)\n    }\n  }\n\n\n  function resestSpeed(){\n    coneSpeed = -4;\n    trashSpeed = -4;\n  }\n\n  function trashHitJerry(){\n    if (trashPosX === jerryFig.x+30 && (trashPosY > jerryFig.y && trashPosY < jerryFig.y+100)  ) {\n      \n      restartObjs();\n      gameOver = true\n    } else if ( jerryFig.y+100 >= trashPosY && (trashPosX >= jerryFig.x-30 && trashPosX <= jerryFig.x+30) ){\n   \n      restartObjs();\n      gameOver = true\n    }\n  }\n\n  function coneHitJerry() {\n    if (conePosX === jerryFig.x + 30 && (conePosY > jerryFig.y && conePosY < jerryFig.y + 100)) {\n\n      restartObjs();\n      gameOver = true\n    } else if (jerryFig.y + 100 >= conePosY && (conePosX >= jerryFig.x - 30 && conePosX <= jerryFig.x + 30)) {\n\n      restartObjs();\n      gameOver = true\n    }\n  }\n\n \n\n\n  function lost(){\n    if(gameOver){\n      cancelAnimationFrame(id);\n      resestSpeed();\n      ctx.clearRect(0, 0, canvas.width, canvas.height);\n      drawGameDone()\n    \n   \n    }\n  }\n\n  function scoreIncreaseSpeed(){\n    if (score >= 1200){\n        trashSpeed = -10;\n        coneSpeed = -10;\n    } else if (score >= 800){\n        trashSpeed = -9;\n        coneSpeed = -9;\n    } else if (score >= 500) {\n        trashSpeed = -8;\n        coneSpeed = -8;\n    } else if (score >= 300){\n      coneSpeed = -7\n    } else if (score >= 100) {\n      coneSpeed = -6\n    }\n  } \n\n\n  \n  function draw(){\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n\n    //road\n    ctx.strokeStyle = \"gray\";\n    ctx.lineWidth = 8;\n    ctx.beginPath();\n    ctx.moveTo(0, 400);\n    ctx.lineTo(800, 400);\n    ctx.stroke();\n\n    //jumping\n    if(spacePressed && jerryFig.jumping === false){\n      jerryFig.y_velocity -=35;\n      jerryFig.jumping = true;\n    }\n\n    if (leftPressed && jerryFig.x >= 100){\n      jerryFig.x_velocity -= 0.5;\n    }\n\n    if (rightPressed && jerryFig.x <= 700){\n      jerryFig.x_velocity += 0.5;\n    }\n\n    jerryFig.y_velocity += 1.5;\n    jerryFig.x += jerryFig.x_velocity;\n    jerryFig.y += jerryFig.y_velocity;\n    jerryFig.x_velocity *= 0.9;\n    jerryFig.y_velocity *= 0.9;\n\n    if(jerryFig.y > canvas.height -100 ){\n      jerryFig.jumping = false;\n      jerryFig.y = 400-100;\n      jerryFig.y_velocity = 0;\n    }\n    \n     \n    ctx.drawImage(jerry, jerryFig.x, jerryFig.y, jerryFig.width, jerryFig.height);\n    ctx.drawImage(musicNote, musicNote1.x, musicNote1.y,musicNote1.width, musicNote1.height)\n    ctx.drawImage(musicNote2img, musicNote2.x, musicNote2.y, musicNote2.width, musicNote2.height)\n    ctx.drawImage(trash, trashPosX, trashPosY, 75, 50);\n    ctx.drawImage(cone, conePosX, conePosY, 50, 50);\n\n   \n\n    drawScore();\n    jerryHitNote1();\n    jerryHitNote2()\n    trashHitJerry(); \n    coneHitJerry();\n \n\n\n    \n    \n    //ball moving\n    scoreIncreaseSpeed();\n    trashPosX+= trashSpeed\n    conePosX += coneSpeed;\n    musicNote1.x += musicNote1.speed\n    music2Move();\n    \n    \n    \n    if(trashPosX < 0){restartTrash();}\n    if (musicNote1.x < 0) { restartMusicNote1()}\n    if(musicNote2.x < 0){restartMusicNote2()}\n    if (conePosX < 0) { restartCone() }\n  \n\n    \n    \n    id = requestAnimationFrame(draw)\n    \n        \n  lost()      \n  }\n      \n      // draw()\n      increaseScore();\n      \n\n      lost();\n\n      \n      \n  \n      const start = document.getElementById('start')\n      console.log(document.getElementById('start'))\n      start.addEventListener('click', () => {\n        \n        if(paused){\n          \n          // requestAnimationFrame(draw);\n          draw()\n          paused = false;\n          \n          \n        } else if (begin || gameOver){\n          score = 0;\n          gameOver = false;\n          draw()\n          begin = false;\n        }\n         else if (gameOver) {\n           \n           gameOver = false;\n           ctx.clearRect(0, 0, canvas.width, canvas.height);\n           begin = true;\n          \n          \n        }\n        \n      })\n\n  // trashHitJerry()    \n\n  const pause = document.getElementById('pause')\n  console.log(document.getElementById('pause'))\n  pause.addEventListener('click', () => {\n    if (!paused && !gameOver) {\n      cancelAnimationFrame(id);\n      paused = true\n    }\n\n  })\n      \n      \n      \n      \n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });