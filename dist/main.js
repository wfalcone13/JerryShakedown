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

eval("document.addEventListener(\"DOMContentLoaded\", () =>{\n  let canvas = document.getElementById(\"game-canvas\")\n  let ctx = canvas.getContext('2d');\n  let id;\n  let paused = false;\n  let pauseCount = 1;\n  \n\n\n  //ball variables\n  let ballX = 800\n  let ballY = Math.floor(Math.random() * (390 -200 ) + 200) //450;\n  let ballRad = 5\n  let ballSpeed = -3\n\n  //coin variables\n  let coinX = 800;\n  let coinY = Math.floor(Math.random() * (390 - 200) + 200)\n\n  //jumping?\n  let spacePressed = false;\n\n  //main figure\n\n  let jerryFig = {\n    height: 100,\n    jumping: true,\n    width: 75,\n    x: 150,\n    x_velocity: 0,\n    y: 200,\n    y_velocity: 0\n  }\n\n  let jerryPosX = 150;\n  let jerryPosY = 200;\n  const jerry = new Image();\n  jerry.src ='assets/images/jerr3.png';\n\n  // const posResetY = Math.floor(Math.random() * (300 - 100) + 100);\n\n  let trashPosX = 800;    //canvas.width;\n  let trashPosY = canvas.height-50; \n  let trashSpeed = -6;             \n  const trash = new Image();\n  trash.src = 'assets/images/trash.png';\n\n  let score = 0;\n\n  function scorePlus(){\n    score+=1\n  }\n\n  function increaseScore(){\n    setInterval(scorePlus, 500)\n  }\n\n  //bounce off walls\n  // function bouncWall(){\n  //   if(ballX < 0 || ballX > canvas.width){\n  //     score += 1\n  //     ballSpeed = -ballSpeed\n  //   }\n  // }\n\n  function restartTrash(){\n    trashPosX = canvas.width + 100\n    trashSpeed = -6\n    }\n  \n\n  function restartBall(){\n      ballX = canvas.width;\n      ballY = Math.floor(Math.random() * (300 - 100) + 100)    \n    }\n\n  function restartCoin(){\n   \n      coinX = canvas.width;\n      coinY = Math.floor(Math.random() * (300 - 100) + 100)\n    }\n  \n\n  document.addEventListener(\"keydown\", keyDownHander, false);\n  document.addEventListener(\"keyup\", keyUpHander, false);\n\n  function keyDownHander(e){\n    if (e.keyCode === 32){\n      spacePressed = true;\n    }\n  }\n\n  function keyUpHander(e) {\n    if (e.keyCode === 32) {\n      spacePressed = false;\n    }\n  }\n\n\n  // let controller = { up: false,\n    \n  //   keyListener:function(event){\n  //     let key_state = (event.type === 'keydown') ? true:false;\n      \n  //     switch (event.type) {\n  //       case 32:\n  //       controller.up = key_state;\n  //       break;\n  //     }\n  //   }\n    \n  // }\n\n\n\n\n  function drawScore(){\n    ctx.font ='16px Arial';\n    ctx.fillStyle = \"white\";\n    ctx.fillText(\"Score: \"+score, 100, 100)\n  }\n\n  function coinHitBlock(){  \n    if ((coinX === jerryPosX && (coinY > jerryPosY && coinY < jerryPosY + 100)) || (coinX === jerryPosX + 50 && (coinY > jerryPosY && coinY < jerryPosY + 100))) {\n      score += 1\n      coinX = canvas.width\n      coinY = Math.floor(Math.random() * (300 - 100) + 100)\n    }\n  }\n\n  function ballHitBlock() {\n\n    if ((ballX === jerryPosX && (ballY > jerryPosY && ballY < jerryPosY + 100)) || (ballX === jerryPosX + 50 && (ballY > jerryPosY && ballY < jerryPosY + 100))) {\n      score = 0\n      restartBall();\n    }\n  }\n\n  function trashHitJerry(){\n    if (trashPosX === jerryFig.x+30 && (trashPosY > jerryFig.y && trashPosY < jerryFig.y)  ) {\n      score = 0\n      restartTrash();\n    }\n  }\n\n\n \n\n\n\n  function coin(){\n    ctx.beginPath();\n    ctx.arc(coinX, coinY, ballRad, 0, Math.PI * 2);\n    ctx.fillStyle = 'green';\n    ctx.fill();\n    ctx.closePath();\n  }\n\n  \n  function draw(){\n    // ctx.save();\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    // background.render();\n    //ball\n    ctx.beginPath();\n    ctx.arc(ballX, ballY, ballRad, 0, Math.PI * 2);\n    ctx.fillStyle = 'red';\n    ctx.fill();\n    ctx.closePath();\n\n    //road\n    ctx.strokeStyle = \"gray\";\n    ctx.lineWidth = 8;\n    ctx.beginPath();\n    ctx.moveTo(0, 400);\n    ctx.lineTo(800, 400);\n    ctx.stroke();\n\n    //jumping\n    if(spacePressed && jerryFig.jumping === false){\n      jerryFig.y_velocity -=35;\n      jerryFig.jumping = true;\n    }\n\n    jerryFig.y_velocity += 1.5;\n    // jerryFig.x += jerryFig.x_velocity;\n    jerryFig.y += jerryFig.y_velocity;\n    // jerryFig.x_velocity *= 0.9;\n    jerryFig.y_velocity *= 0.9;\n\n    if(jerryFig.y > canvas.height -100 ){\n      jerryFig.jumping = false;\n      jerryFig.y = 400-100;\n      jerryFig.y_velocity = 0;\n    }\n    \n     \n    ctx.drawImage(jerry, jerryFig.x, jerryFig.y, jerryFig.width, jerryFig.height);\n    ctx.drawImage(trash, trashPosX, trashPosY, 75, 50);\n    \n    \n\n   \n\n    drawScore();\n    coin();\n    coinHitBlock();\n    ballHitBlock();\n    trashHitJerry(); \n    // restartCoin();\n\n\n    \n    \n    //ball moving\n    ballX+= ballSpeed\n    trashPosX+= trashSpeed\n    coinX+= ballSpeed\n    \n    if(trashPosX < 0){restartTrash();}\n    \n    if(ballX < 0){restartBall();}\n    if(coinX < 0){restartCoin();}\n    \n    \n    id = requestAnimationFrame(draw)\n    \n    //  if(spacePressed && jerryFig.y >150){\n      //    jerryFig.y -= 20;\n      //  } \n      \n      //  if(!spacePressed && jerryFig.y < canvas.height-100){\n        //    jerryFig.y += 7\n        //  }\n        \n        \n        \n        \n      }\n      \n      draw()\n      increaseScore();\n      \n      const body = document.getElementsByTagName('body')[0]\n      console.log(document.getElementsByTagName('body')[0])\n      body.addEventListener('click', () => {\n        if(paused){\n          \n          // requestAnimationFrame(draw);\n          draw()\n          paused = false;\n          \n        } else {\n          cancelAnimationFrame(id);\n          paused = true\n        }\n        \n\n\n      })\n      \n      \n      \n      \n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });