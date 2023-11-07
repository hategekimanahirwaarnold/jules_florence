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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var jules = document.querySelector('.imge');
// Once the image is loaded, draw it on the canvas.

canvas.width = innerWidth;
canvas.height = innerHeight;
var cos = Math.cos,
  sin = Math.sin,
  random = Math.random,
  abs = Math.abs,
  PI = Math.PI;
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var loves = ["❤️", "💖", "😻", "👏🏽", "💜", "💓", "😍", "🥰", "👩‍❤️‍👨", "💛", "🙌", "💚", "🤎"];
var colors = ['#2185C5', '#7ECEFD', 'lightgreen', '#FF7F66', 'gray', 'orange'];

// Event Listeners
addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  initGalaxy();
  init();
});

//galactic Event Listeners
var mouseDown = false;
addEventListener('mousedown', function (event) {
  mouseDown = true;
});
addEventListener('mouseup', function (event) {
  mouseDown = false;
});

// Objects
var Particle = /*#__PURE__*/function () {
  function Particle(x, y, radius, color, love, angle) {
    _classCallCheck(this, Particle);
    this.x = x;
    this.y = y;
    this.velocity = {
      x: cos(angle) * 1,
      y: sin(angle) * 1
    };
    this.radius = radius;
    this.color = color;
    this.love = love;
    this.lifeTime = 1000;
  }
  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.font = "15px sans-serif";
      // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      // c.strokeStyle = this.color
      c.fillStyle = this.color;
      c.fill();
      // c.stroke();
      c.fillText(this.love, this.x, this.y);
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      // c.drawImage(img, canvas.width / 2.5, canvas.height / 3, canvas.width / 4, canvas.height / 4);
      this.draw();
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.lifeTime--;
    }
  }]);
  return Particle;
}(); // function to generate love
// Implementation
var particles = [];
function init() {
  var heartCount = 20;
  for (var i = 0; i < heartCount; i++) {
    var radius = 15;
    // let heartRadius = 100;
    var angle = 2 * PI / heartCount * i;
    // let x = canvas.width / 2 + cos(angle) * heartRadius;
    // let y = canvas.height / 2 + sin(angle) * heartRadius;
    var x = mouse.x;
    var y = mouse.y;
    var color = 'blue';
    var love = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomColor"])(loves);
    var newC = new Particle(x, y, radius, color, love, angle);
    particles.push(newC);
  }
}
function newLove() {
  setTimeout(newLove, 1000);
  init();
}
function rotateElement(deg) {
  deg += 1; // Rotate by 45 degrees (adjust as needed)

  jules.style.transform = "rotate(".concat(deg, "deg)");
}

//galactic effects

var galColors = ['#2185C5', '#7ECEFD', 'orange', '#FFF6E5', '#FF7F66'];

// Objects
var Galaxy = /*#__PURE__*/function () {
  function Galaxy(x, y, radius, color) {
    _classCallCheck(this, Galaxy);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  _createClass(Galaxy, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, PI * 2, false);
      c.shadowColor = this.color;
      c.shadowBlur = 15;
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);
  return Galaxy;
}();
function findBigSize() {
  if (canvas.width > canvas.height) return canvas.width + 300;else return canvas.height + 300;
}

// Implementation
var planets;
function initGalaxy() {
  planets = [];
  var particlesCount = 800;
  for (var i = 0; i < particlesCount; i++) {
    var color = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomColor"])(galColors);
    var radius = 2 * random() + 0.08;
    var x = findBigSize() * random() - canvas.width / 2;
    var y = findBigSize() * random() - canvas.height / 2;
    planets.push(new Galaxy(x, y, radius, color));
  }
}

// Animation Loop
var rotateRadians = 0;
var a = 1;

// function animate() {
//   requestAnimationFrame(animate)
//   c.fillStyle = `rgba(8, 8, 8, ${a})`
//   c.fillRect(0, 0, canvas.width, canvas.height);

//  c.save()
//  c.translate( canvas.width / 2, canvas.height / 2)
//  c.rotate(rotateRadians)
//   planets.forEach((particle) => {
//     particle.update();
//   })
//  c.restore()
//  rotateRadians += 0.001;
//  if (mouseDown && a > 0.05) {
//   a -= 0.01;
//  } else if (!mouseDown && a < 1) {
//   a += 0.01
//  }
// }

// Animation Loop
var rotateDeg = 0;
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(8, 8, 8, ".concat(a, ")");
  c.fillRect(0, 0, canvas.width, canvas.height);

  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  particles.forEach(function (love, i) {
    if (love.lifeTime > 0) love.update();else particles.splice(i, 1);
  });
  if (rotateDeg > 2000) {
    rotateDeg = -rotateDeg;
  }
  rotateElement(rotateDeg);
  rotateDeg += 1.5;

  // handle galaxies
  c.save();
  c.translate(canvas.width / 2, canvas.height / 2);
  c.rotate(rotateRadians);
  planets.forEach(function (particle) {
    particle.update();
  });
  c.restore();
  rotateRadians += 0.001;
  if (mouseDown && a > 0.05) {
    a -= 0.01;
  } else if (!mouseDown && a < 1) {
    a += 0.01;
  }
}
init();
initGalaxy();
animate();
newLove();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map