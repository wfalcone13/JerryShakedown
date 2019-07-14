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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: newGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newGame\", function() { return newGame; });\n\n\nclass GameStatus{\n  constructor(){\n    this.paused = false;\n    this.begin = true;\n    this.gameOver = false;\n    this.score = 0;\n  }\n\n}\n\nlet newGame = new GameStatus(); \n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_moves.js":
/*!***************************!*\
  !*** ./src/game_moves.js ***!
  \***************************/
/*! exports provided: music2Move, gameOverObs, restartObjs, resestSpeed, jerryHitNote1, jerryHitNote3, jerryHitNote2, trashHitJerry, coneHitJerry, scoreIncreaseSpeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"music2Move\", function() { return music2Move; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameOverObs\", function() { return gameOverObs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restartObjs\", function() { return restartObjs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resestSpeed\", function() { return resestSpeed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jerryHitNote1\", function() { return jerryHitNote1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jerryHitNote3\", function() { return jerryHitNote3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jerryHitNote2\", function() { return jerryHitNote2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trashHitJerry\", function() { return trashHitJerry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"coneHitJerry\", function() { return coneHitJerry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scoreIncreaseSpeed\", function() { return scoreIncreaseSpeed; });\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ \"./src/object.js\");\n/* harmony import */ var _jerry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jerry */ \"./src/jerry.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\nfunction music2Move() {\n  _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].posX += _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].speed;\n  _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].posY += Math.floor(Math.random() * (20 - 10) + 10)\n  _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].posY -= Math.floor(Math.random() * (20 - 10) + 10)\n}\n\nfunction gameOverObs() {\n  _object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].posX = _object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].start;\n  _object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].posX = _object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].start\n\n}\n\nfunction restartObjs() {\n\n  _object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].speed = -4\n  _object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].speed = -4\n  _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].restartJer();\n  gameOverObs();\n  _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteOne\"].restartMusicNote();\n  _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].restartMusicNote();\n  _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteThree\"].restartMusicNote();\n\n}\n\n\nfunction resestSpeed() {\n  _object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].speed = -4;\n  _object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].speed = -4;\n}\n\n\nfunction jerryHitNote1() {\n  if (((_object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteOne\"].posX >= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x - 30 && _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteOne\"].posX - 20 <= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x + 40) && (_object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteOne\"].posY + 20 >= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y && _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteOne\"].posY + 15 < _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y + 100)) || (_object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteOne\"].posX === _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x + 50 && (_object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteOne\"].posY > _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y && _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteOne\"].posY < _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y + 100))) {\n    _game__WEBPACK_IMPORTED_MODULE_2__[\"newGame\"].score += 5\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteOne\"].posX = Math.floor(Math.random() * (1000 - 800) + 800);\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteOne\"].posY = Math.floor(Math.random() * (300 - 100) + 100)\n  }\n}\n\nfunction jerryHitNote3() {\n  if (((_object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteThree\"].posX >= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x - 30 && _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteThree\"].posX - 20 <= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x + 40) && (_object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteThree\"].posY + 20 >= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y && _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteThree\"].posY + 15 < _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y + 100)) || (_object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteThree\"].posX === _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x + 50 && (_object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteThree\"].posY > _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y && _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteThree\"].posY < _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y + 100))) {\n    _game__WEBPACK_IMPORTED_MODULE_2__[\"newGame\"].score += 5\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteThree\"].posX = Math.floor(Math.random() * (1000 - 800 + 35) + 800 + 25);\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteThree\"].posY = Math.floor(Math.random() * (300 - 100) + 100)\n  }\n}\n\nfunction jerryHitNote2() {\n  if (((_object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].posX >= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x - 30 && _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].posX - 20 <= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x + 40) && (_object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].posY + 20 >= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y && _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].posY + 15 <= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y + 100)) || (_object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].posX === _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x + 50 && (_object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].posY >= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y && _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].posY <= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y + 100))) {\n    _game__WEBPACK_IMPORTED_MODULE_2__[\"newGame\"].score += 5\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].posX = Math.floor(Math.random() * (1000 - 800 + 50) + 800 + 50);\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"musicNoteTwo\"].posY = Math.floor(Math.random() * (300 - 100) + 100)\n  }\n}\n\nfunction trashHitJerry() {\n  if (_object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].posX === _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x + 30 && (_object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].posY > _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y && _object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].posY < _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y + 100)) {\n\n    restartObjs();\n    _game__WEBPACK_IMPORTED_MODULE_2__[\"newGame\"].gameOver = true\n  } else if (_jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y + 100 >= _object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].posY && (_object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].posX >= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x - 30 && _object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].posX <= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x + 30)) {\n\n    restartObjs();\n    _game__WEBPACK_IMPORTED_MODULE_2__[\"newGame\"].gameOver = true\n  }\n}\n\nfunction coneHitJerry() {\n  if (_object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].posX === _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x + 30 && (_object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].posY > _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y && _object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].posY < _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y + 100)) {\n\n    restartObjs();\n    _game__WEBPACK_IMPORTED_MODULE_2__[\"newGame\"].gameOver = true\n  } else if (_jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y + 100 >= _object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].posY && (_object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].posX >= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x - 30 && _object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].posX <= _jerry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x + 30)) {\n\n    restartObjs();\n    _game__WEBPACK_IMPORTED_MODULE_2__[\"newGame\"].gameOver = true\n  }\n}\n\n\nfunction scoreIncreaseSpeed() {\n  if (_game__WEBPACK_IMPORTED_MODULE_2__[\"newGame\"].score >= 600) {\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].speed = -10;\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].speed = -10;\n  } else if (_game__WEBPACK_IMPORTED_MODULE_2__[\"newGame\"].score >= 400) {\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].speed = -9;\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].speed = -9;\n  } else if (_game__WEBPACK_IMPORTED_MODULE_2__[\"newGame\"].score >= 150) {\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].speed = -8;\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].speed = -8;\n  } else if (_game__WEBPACK_IMPORTED_MODULE_2__[\"newGame\"].score >= 100) {\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].speed = -7\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].speed = -7\n  } else if (_game__WEBPACK_IMPORTED_MODULE_2__[\"newGame\"].score >= 50) {\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"coneOne\"].speed = -6\n    _object__WEBPACK_IMPORTED_MODULE_0__[\"trashCanOne\"].speed = -6\n  }\n} \n\n\n\n//# sourceURL=webpack:///./src/game_moves.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jerry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jerry */ \"./src/jerry.js\");\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ \"./src/object.js\");\n/* harmony import */ var _game_moves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_moves */ \"./src/game_moves.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () =>{\n  let canvas = document.getElementById(\"game-canvas\")\n  let ctx = canvas.getContext('2d');\n  let id;\n\n  const jerry = new Image();\n  jerry.src ='assets/images/jerr3.png';\n\n  //trash figure             \n  const trash = new Image();\n  trash.src = 'assets/images/trash.png';\n\n  //cone figure \n  const cone = new Image();\n  cone.src = 'assets/images/cone.png'\n\n  //music figure\n  const musicNote = new Image();\n  musicNote.src ='assets/images/music1.png'\n  \n  const musicNote3Img = new Image();\n  musicNote3Img.src = 'assets/images/music1.png'\n \n  const musicNote2img = new Image();\n  musicNote2img.src = 'assets/images/music2.png'\n\n\n  function scorePlus(){\n    if (!_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].paused){\n    _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].score+=1\n    } \n  }\n\n  function increaseScore(){\n    \n    setInterval(scorePlus, 500)\n  }\n\n  document.addEventListener(\"keydown\", keyDownHander, false);\n  document.addEventListener(\"keyup\", keyUpHander, false);\n\n  function keyDownHander(e){\n    if (e.keyCode === 32){\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].spacePressed = true;\n    } else if (e.keyCode === 37){\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].leftPressed = true;\n    } else if (e.keyCode === 39){\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rightPressed = true;\n    }\n  }\n\n  function keyUpHander(e) {\n    if (e.keyCode === 32) {\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].spacePressed = false;\n    } else if (e.keyCode === 37) {\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].leftPressed = false;\n    } else if (e.keyCode === 39) {\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rightPressed = false;\n    }\n  }\n\n\n  function drawScore(){\n    ctx.font ='20px Staatliches';\n    ctx.fillStyle = \"black\";\n    ctx.fillText(\"Score: \" +_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].score, 100, 50)\n  }\n\n  function drawGameDone() {\n    ctx.font = '30px Staatliches';\n    ctx.fillStyle = \"black\";\n    ctx.fillText(\"Score: \" + _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].score, 200, 150)\n    ctx.fillText(\"Game Over!\", 200, 200)\n    ctx.fillText(\"Hit Enter to try again\", 200, 250 )\n  }\n\n  function beginGameScreen(){\n    \n    ctx.font = '30px Staatliches';\n    ctx.fillStyle = \"black\";\n    ctx.fillText(\"Press Enter to start\", 300,200)\n    \n  }\n\n\n  function lost(){\n    if (_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].gameOver){\n      cancelAnimationFrame(id);\n      Object(_game_moves__WEBPACK_IMPORTED_MODULE_2__[\"resestSpeed\"])();\n      ctx.clearRect(0, 0, canvas.width, canvas.height);\n      drawGameDone() \n    }\n  }\n\n\n  \n  function draw(){\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    //road\n    ctx.strokeStyle = \"gray\";\n    ctx.lineWidth = 8;\n    ctx.beginPath();\n    ctx.moveTo(0, 400);\n    ctx.lineTo(800, 400);\n    ctx.stroke();\n\n    //jumping\n    if (_jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].spacePressed && _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].jumping === false){\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y_velocity -=35;\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].jumping = true;\n    }\n\n    if (_jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].leftPressed && _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x >= 100){\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x_velocity -= 0.5;\n    }\n\n    if (_jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rightPressed && _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x <= 700){\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x_velocity += 0.5;\n    }\n\n    _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y_velocity += 1.5;\n    _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x += _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x_velocity;\n    _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y += _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y_velocity;\n    _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x_velocity *= 0.9;\n    _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y_velocity *= 0.9;\n\n    if(_jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y > canvas.height -100 ){\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].jumping = false;\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y = 400-100;\n      _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y_velocity = 0;\n    }\n    \n     \n    ctx.drawImage(jerry, _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x, _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y, _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width, _jerry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height);\n    ctx.drawImage(musicNote, _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteOne\"].posX, _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteOne\"].posY, _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteOne\"].width, _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteOne\"].height)\n    ctx.drawImage(musicNote2img, _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteTwo\"].posX, _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteTwo\"].posY, _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteTwo\"].width, _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteTwo\"].height)\n    ctx.drawImage(musicNote3Img, _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteThree\"].posX, _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteThree\"].posY, _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteThree\"].width, _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteThree\"].height)\n    \n    ctx.drawImage(trash, _object__WEBPACK_IMPORTED_MODULE_1__[\"trashCanOne\"].posX, _object__WEBPACK_IMPORTED_MODULE_1__[\"trashCanOne\"].posY, _object__WEBPACK_IMPORTED_MODULE_1__[\"trashCanOne\"].height, _object__WEBPACK_IMPORTED_MODULE_1__[\"trashCanOne\"].width);\n    ctx.drawImage(cone, _object__WEBPACK_IMPORTED_MODULE_1__[\"coneOne\"].posX, _object__WEBPACK_IMPORTED_MODULE_1__[\"coneOne\"].posY, _object__WEBPACK_IMPORTED_MODULE_1__[\"coneOne\"].height, _object__WEBPACK_IMPORTED_MODULE_1__[\"coneOne\"].width);\n\n   \n\n    drawScore();\n    Object(_game_moves__WEBPACK_IMPORTED_MODULE_2__[\"jerryHitNote1\"])();\n    Object(_game_moves__WEBPACK_IMPORTED_MODULE_2__[\"jerryHitNote2\"])()\n    Object(_game_moves__WEBPACK_IMPORTED_MODULE_2__[\"jerryHitNote3\"])();\n    Object(_game_moves__WEBPACK_IMPORTED_MODULE_2__[\"trashHitJerry\"])(); \n    Object(_game_moves__WEBPACK_IMPORTED_MODULE_2__[\"coneHitJerry\"])();\n \n    Object(_game_moves__WEBPACK_IMPORTED_MODULE_2__[\"scoreIncreaseSpeed\"])();\n    _object__WEBPACK_IMPORTED_MODULE_1__[\"trashCanOne\"].posX+= _object__WEBPACK_IMPORTED_MODULE_1__[\"trashCanOne\"].speed\n    _object__WEBPACK_IMPORTED_MODULE_1__[\"coneOne\"].posX += _object__WEBPACK_IMPORTED_MODULE_1__[\"coneOne\"].speed;\n    _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteOne\"].posX += _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteOne\"].speed;\n    _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteThree\"].posX += _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteThree\"].speed;\n    Object(_game_moves__WEBPACK_IMPORTED_MODULE_2__[\"music2Move\"])();\n    \n    if (_object__WEBPACK_IMPORTED_MODULE_1__[\"trashCanOne\"].posX < 0) {_object__WEBPACK_IMPORTED_MODULE_1__[\"trashCanOne\"].restartTrash();}\n    if (_object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteOne\"].posX < 0) { _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteOne\"].restartMusicNote()}\n    if (_object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteTwo\"].posX < 0) { _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteTwo\"].restartMusicNote()}\n    if (_object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteThree\"].posX < 0) { _object__WEBPACK_IMPORTED_MODULE_1__[\"musicNoteThree\"].restartMusicNote() }\n    if (_object__WEBPACK_IMPORTED_MODULE_1__[\"coneOne\"].posX < 0) { _object__WEBPACK_IMPORTED_MODULE_1__[\"coneOne\"].restartCone() }\n   \n    id = requestAnimationFrame(draw)\n   \n        \n    lost()      \n  }\n      \n      // draw()\n    increaseScore();\n    lost();\n\n    let music_play;     \n\n\n  if (_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].begin){\n        beginGameScreen()\n      }\n\n    const start = document.getElementById('start')\n    start.addEventListener('click', () => {\n      \n      if (_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].paused){\n        draw()\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].paused = false;\n        \n      } else if (_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].begin){\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].score = 0;\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].gameOver = false;\n        draw()\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].begin = false;\n        audio.play()\n        music_play = true\n        \n      } else if (_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].gameOver) {\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].score = 0;\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].gameOver = false;\n        draw()\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].begin = false;\n        audio.play()\n        music_play = true \n      }\n      \n     })\n      \n\n  document.addEventListener(\"keydown\", enterStart, false);\n \n  function enterStart(e){\n    \n    if(e.keyCode === 13){\n      if (_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].paused) {\n        draw()\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].paused = false;\n\n      } else if (_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].begin) {\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].score = 0;\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].gameOver = false;\n        draw()\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].begin = false;\n        audio.play()  // TURN BACK ON\n        music_play = true\n\n      } else if (_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].gameOver) {\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].score = 0;\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].gameOver = false;\n        draw()\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].begin = false;\n        // audio.play()  //leave off so it goes with game play\n        // music_play = true\n      }\n    }\n  }\n\n// Pause Functions\n  document.addEventListener(\"keydown\", pauseKey, false);\n  const pText = document.getElementById('pause')\n  function pauseKey(e){\n    if(e.keyCode === 80){\n      if (!_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].paused && !_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].gameOver && !_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].begin) {\n        cancelAnimationFrame(id);\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].paused = true\n        pText.innerText = \"paused\"\n      } else if (_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].paused) {\n        draw()\n        _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].paused = false;\n        pText.innerText = \"pause\"\n\n      }\n    }\n  }\n    \n\n  const pause = document.getElementById('pause')\n  pause.addEventListener('click', () => {\n    if (!_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].paused && !_game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].gameOver) {\n      cancelAnimationFrame(id);\n      _game__WEBPACK_IMPORTED_MODULE_3__[\"newGame\"].paused = true\n    }\n\n  })\n\n  // music\n  const audio = new Audio();\n  audio.src = \"./assets/mp3/shake.mp3\"\n  \n\n  const music = document.getElementById('music-p')\n  music.addEventListener('mousedown', ()=>{\n    if (music_play){\n      audio.pause();\n      music_play = !music_play\n      music.innerText = 'Music On'\n    } else {\n      audio.play();\n      music_play = !music_play\n      music.innerText = 'Music Off'\n\n      \n    }\n\n  })   \n  \n  document.addEventListener(\"keydown\", musicKey, false);\n  function musicKey(e){\n    if(e.keyCode === 77){\n      if (music_play) {\n        audio.pause();\n        music_play = !music_play\n        music.innerText = 'Music On'\n      } else {\n        audio.play();\n        music_play = !music_play\n        music.innerText = 'Music Off'\n      }\n    }\n  }\n      \n      \n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/jerry.js":
/*!**********************!*\
  !*** ./src/jerry.js ***!
  \**********************/
/*! exports provided: jerryFig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jerryFig\", function() { return jerryFig; });\n\n\n\n\nclass Jerry {\n  constructor(height, width, x, y, x_velocity, y_velocity){\n    this.height = height;\n    this.jumping = true;\n    this.width = width;\n    this.x = x;\n    this.y = y;\n    this.y_velocity = y_velocity;\n    this.x_velocity = x_velocity;\n    this.leftPressed = false;\n    this.rightPressed = false;\n    this.spacePressed = false;\n  }\n\n  restartJer(){\n    this.x_velocity = 0;\n    this.x = 150;\n    this.leftPressed = false;\n    this.rightPressed = false;\n  }\n}\n\nlet jerryFig =  new Jerry(\n  100,\n  80,\n  150,\n  200,\n  0,\n  0\n)\n\nconst jerry = new Image();\njerry.src = 'assets/images/jerr3.png';\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (jerryFig);\n\n//# sourceURL=webpack:///./src/jerry.js?");

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/*! exports provided: Trash, Cone, trashCanOne, coneOne, musicNoteOne, musicNoteTwo, musicNoteThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Trash\", function() { return Trash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cone\", function() { return Cone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trashCanOne\", function() { return trashCanOne; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"coneOne\", function() { return coneOne; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"musicNoteOne\", function() { return musicNoteOne; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"musicNoteTwo\", function() { return musicNoteTwo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"musicNoteThree\", function() { return musicNoteThree; });\n/// create the trash, cone and music notes\n\n\nclass GameObjects{\n  constructor(start, posX, posY, speed, height, width){\n    this.start = start;\n    this.posX = posX;\n    this.posY = posY;\n    this.speed = speed;\n    this.height = height;\n    this.width = width;\n  }\n}\n\nclass Trash extends GameObjects{\n  constructor(start, posX, posY, speed, height, width){\n    super(start, posX, posY, speed, height, width)\n  }\n\n  restartTrash() {\n  this.posX = Math.floor(Math.random() * (1500 - 780) + 780)   \n  }\n}\n\n\n\nclass Cone extends GameObjects{\n  constructor(start, posX, posY, speed, height, width) {\n    super(start, posX, posY, speed, height, width)\n  }\n\n  restartCone() {\n    this.posX = Math.floor(Math.random() * (1300 - 780) + 780)\n\n  }\n}\n\n\nclass Notes extends GameObjects{\n  constructor(posX, posY, speed, height, width){\n    super(start,posX, posY, speed, height, width)\n  }\n\n  restartMusicNote(){\n    this.posX = Math.floor(Math.random() * (1300 - 800) + 800);\n    this.posY = Math.floor(Math.random() * (375 - 250) + 100);\n  }\n}\n\nlet trashCanOne = new Trash(\n  750,\n  750,\n  350,\n  -5,\n  75,\n  50\n)\n\nlet coneOne = new Cone(\n  1020,\n  1020,\n  350,\n  -5,\n  50,\n  50\n)\n\nlet musicNoteOne = new Notes(\n  500,\n  Math.floor(Math.random() * ((350) - 150) + 150),\n  -4,\n  50,\n  25\n)\n\n\nlet musicNoteTwo = new Notes(\n  700,\n  Math.floor(Math.random() * ((350) - 150) + 150),\n  -4,\n  50,\n  25\n)\n\n\n\nlet musicNoteThree = new Notes(\n  950,\n  Math.floor(Math.random() * ((350) - 150) + 150),\n  -4,\n  50,\n  25\n)\n\n\n  //for tire -- add bounce colision\n  // function music2Move() {\n  //   musicNote2.x += musicNote2.speed;\n  //   // musicNote2.y += Math.floor(Math.random() * (20 - 10) + 10)\n  //   // musicNote2.y -= Math.floor(Math.random() * (20 - 10) + 10)\n  //   musicNote2.y_velocity += 1.5;\n  //   musicNote2.x += musicNote2.x_velocity;\n  //   musicNote2.y += musicNote2.y_velocity;\n  //   musicNote2.x_velocity *= 0.9;\n  //   musicNote2.y_velocity *= 0.9;\n  //   musicNote2.y -= musicNote2.y_velocity;\n\n\n  // }\n\n\n\n\n//# sourceURL=webpack:///./src/object.js?");

/***/ })

/******/ });