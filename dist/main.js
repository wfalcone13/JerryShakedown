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

eval("document.addEventListener(\"DOMContentLoaded\", () =>{\n  let canvas = document.getElementById(\"game-canvas\")\n  let ctx = canvas.getContext('2d');\n\n  let backImg = new Image();\n  // backImg.src = '/Users/william_falcone/Desktop/javascript_game/assets/images/marioclouds2.jpg';\n  backImg.src = 'assets/images/back2.jpg';\n\n  let cW = ctx.canvas.width;\n  let cH = ctx.canvas.height;\n\n  function Background(){\n    this.x = 0, this.y = 0, this.w = backImg.width, this.h = backImg.height;\n    this.render = function(){\n      ctx.drawImage(backImg, this.x --, 0);\n      if(this.x <= -800){\n        this.x = 0;\n      }\n    }\n  }\n\n\n  let background = new Background();\n  \n  let ballX = 800\n  let ballY = Math.floor(Math.random() * (300 - 100) + 100) //450;\n  let ballRad = 5\n  let ballSpeed = -3\n\n  let coinX = 800;\n  let coinY = 150\n\n  let rectPosY = 150\n  let rectPosX = 150\n  let spacePressed = false;\n\n  let jerryPosX = 100;\n  let jerryPosY = 200;\n\n  const posResetY = Math.floor(Math.random() * (300 - 100) + 100);\n\n  const jerry = new Image();\n  jerry.src ='assets/images/jerry2.jpg';\n\n\n  let score = 0;\n\n  //bounce off walls\n  function bouncWall(){\n    if(ballX < 0 || ballX > canvas.width){\n      score += 1\n      ballSpeed = -ballSpeed\n    }\n  }\n\n  function restartBall(){\n    if (ballX < 0){\n      ballX = canvas.width;\n      ballY = Math.floor(Math.random() * (300 - 100) + 100)\n      \n    }\n  }\n\n  function restartCoin(){\n    if(coinX < 0){\n      coinX = canvas.width;\n      coinY = Math.floor(Math.random() * (300 - 100) + 100)\n    }\n  }\n\n  document.addEventListener(\"keydown\", keyDownHander, false);\n  document.addEventListener(\"keyup\", keyUpHander, false);\n\n  function keyDownHander(e){\n    if (e.keyCode === 32){\n      spacePressed = true;\n    }\n  }\n\n  function keyUpHander(e) {\n    if (e.keyCode === 32) {\n      spacePressed = false;\n    }\n  }\n\n  \n\n\n  function drawScore(){\n    ctx.font ='16px Arial';\n    ctx.fillStyle = \"white\";\n    ctx.fillText(\"Score: \"+score, 100, 100)\n  }\n\n  function coinHitBlock(){\n    \n    if ((coinX === jerryPosX && (coinY > jerryPosY && coinY < jerryPosY + 100)) || (coinX === jerryPosX + 50 && (coinY > jerryPosY && coinY < jerryPosY + 100))) {\n      score += 1\n      coinX = canvas.width\n      coinY = Math.floor(Math.random() * (300 - 100) + 100)\n    }\n  }\n\n  function ballHitBlock() {\n\n    if ((ballX === jerryPosX && (ballY > jerryPosY && ballY < jerryPosY + 100)) || (ballX === jerryPosY + 50 && (ballY > jerryPosY && ballY < jerryPosY + 100))) {\n      score = 0\n      ballX = canvas.width\n      ballY = Math.floor(Math.random() * (300 - 100) + 100)\n    }\n  }\n\n\n \n\n\n\n  function coin(){\n    ctx.beginPath();\n    ctx.arc(coinX, coinY, ballRad, 0, Math.PI * 2);\n    ctx.fillStyle = 'green';\n    ctx.fill();\n    ctx.closePath();\n  }\n\n  \n  function draw(){\n    ctx.save();\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    // background.render();\n\n    //ball\n    ctx.beginPath();\n    ctx.arc(ballX, ballY, ballRad, 0, Math.PI * 2);\n    ctx.fillStyle = 'red';\n    ctx.fill();\n    ctx.closePath();\n    ctx.strokeStyle = \"#202830\";\n    ctx.lineWidth = 6;\n    ctx.beginPath();\n    ctx.moveTo(0, 400);\n    ctx.lineTo(800, 400);\n    ctx.stroke();\n    \n    \n    ctx.drawImage(jerry, jerryPosX, jerryPosY,50,100);\n    \n    // ctx.beginPath();\n    // ctx.rect(350, 200, 50, 100);\n    // ctx.fillStyle = \"green\";\n    // ctx.fill();\n    // ctx.closePath();\n\n   \n\n    drawScore();\n    coin();\n    restartCoin();\n\n\n\n    \n    \n    //ball moving\n    ballX+= ballSpeed\n    coinX+= ballSpeed\n\n \n    // bouncWall();\n    coinHitBlock();\n    ballHitBlock();\n    restartBall();\n    \n    \n    requestAnimationFrame(draw)\n    \n   if(spacePressed && jerryPosY >150){\n     jerryPosY -= 20;\n     \n\n\n   } \n\n   if(!spacePressed && jerryPosY < canvas.height-100){\n     jerryPosY += 7\n   }\n\n  }\n  draw()\n  \n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });