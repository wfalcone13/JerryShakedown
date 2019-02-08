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

eval("document.addEventListener(\"DOMContentLoaded\", () =>{\n  let canvas = document.getElementById(\"game-canvas\")\n  let ctx = canvas.getContext('2d');\n  \n  let ballX = 600\n  let ballY = 450;\n  let ballRad = 5\n  let ballSpeed = -5\n\n  let rectPosY = 250\n  let rectPosX = 150\n  let spacePressed = false;\n\n\n  let score = 0;\n\n  //bounce off walls\n  function bouncWall(){\n    if(ballX < 0 || ballX > canvas.width){\n      score += 1\n      ballSpeed = -ballSpeed\n    }\n  }\n\n  document.addEventListener(\"keydown\", keyDownHander, false);\n  document.addEventListener(\"keyup\", keyUpHander, false);\n\n  function keyDownHander(e){\n    if (e.keyCode === 32){\n      spacePressed = true;\n    }\n  }\n\n  function keyUpHander(e) {\n    if (e.keyCode === 32) {\n      spacePressed = false;\n    }\n  }\n\n\n  function drawScore(){\n    ctx.font ='16px Arial';\n    ctx.fillStyle = \"white\";\n    ctx.fillText(\"Score: \"+score, 100, 100)\n  }\n\n  function hitBlock(){\n    \n    if ((ballX === rectPosX && (ballY > rectPosY && ballY < rectPosY + 100)) || (ballX === rectPosX + 50 && (ballY > rectPosY && ballY < rectPosY + 100))) {\n      score = 0\n    }\n  }\n \n\n  function rect(){\n    ctx.beginPath();\n    ctx.rect(rectPosX, rectPosY, 50, 100);\n    ctx.fillStyle = \"red\";\n    ctx.fill();\n    ctx.closePath();\n  }\n\n  \n  function draw(){\n  \n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n    //ball\n    ctx.beginPath();\n    ctx.arc(ballX, ballY, ballRad, 0, Math.PI * 2);\n    ctx.fillStyle = 'red';\n    ctx.fill();\n    ctx.closePath();\n    \n    \n    \n    // ctx.beginPath();\n    // ctx.rect(350, 200, 50, 100);\n    // ctx.fillStyle = \"green\";\n    // ctx.fill();\n    // ctx.closePath();\n\n    rect();\n\n    drawScore();\n\n    \n    \n    //ball moving\n    ballX+= ballSpeed\n\n \n    bouncWall();\n    hitBlock();\n    \n    \n    requestAnimationFrame(draw)\n    \n   if(spacePressed && rectPosY >0){\n     rectPosY -= 5;\n   } \n\n   if(!spacePressed && rectPosY < canvas.height-100){\n     rectPosY += 7\n   }\n\n  }\n  draw()\n  \n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });