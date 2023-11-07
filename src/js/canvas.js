import utils, { distance, randomColor, randomIntFromRange } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
let jules = document.querySelector('.imge')
// Once the image is loaded, draw it on the canvas.

canvas.width = innerWidth
canvas.height = innerHeight

let {cos, sin, random, abs, PI }  = Math;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const loves = ["❤️", "💖", "😻", "👏🏽" ,"💜", "💓", "😍", "🥰", "👩‍❤️‍👨", "💛", "🙌" , "💚", "🤎"]
const colors = ['#2185C5', '#7ECEFD', 'lightgreen', '#FF7F66', 'gray', 'orange']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
  
  initGalaxy()
  init()
})

//galactic Event Listeners
let mouseDown = false;
addEventListener('mousedown', (event) => {
  mouseDown = true;
})

addEventListener('mouseup', (event) => {
  mouseDown = false;
});


// Objects
class Particle {
  constructor(x, y, radius, color, love, angle) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: cos(angle) * 1,
      y: sin(angle) * 1
    }
    this.radius = radius;
    this.color = color;
    this.love = love;
    this.lifeTime = 1000;
  }

  draw() {
    c.beginPath()
    c.font = "15px sans-serif";
    // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    // c.strokeStyle = this.color
    c.fillStyle = this.color
    c.fill()
    // c.stroke();
    c.fillText(this.love, this.x, this.y)
    c.closePath()
  }

  update () {
    // c.drawImage(img, canvas.width / 2.5, canvas.height / 3, canvas.width / 4, canvas.height / 4);
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.lifeTime--;
  }
}



// function to generate love

// Implementation
let particles = []
function init() {
  let heartCount = 20;

  for (let i = 0; i < heartCount; i++) {
    let radius = 15;
    // let heartRadius = 100;
    let angle = (2 * PI / heartCount) * i;
    // let x = canvas.width / 2 + cos(angle) * heartRadius;
    // let y = canvas.height / 2 + sin(angle) * heartRadius;
    let x = mouse.x;
    let y = mouse.y;
    let color= 'blue';
    let love = randomColor(loves);
    let newC = new Particle(x, y, radius, color, love, angle);
    particles.push(newC);
  }
}
function newLove() {
  setTimeout(newLove, 1000);
  init();
}

function rotateElement(deg) {
    deg += 1; // Rotate by 45 degrees (adjust as needed)

    jules.style.transform = `rotate(${deg}deg)`;
}

//galactic effects

const galColors = ['#2185C5', '#7ECEFD', 'orange','#FFF6E5', '#FF7F66']

// Objects
class Galaxy {
  constructor(x, y, radius, color) {
    this.x = x 
    this.y = y 
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, PI * 2, false);
    c.shadowColor = this.color;
    c.shadowBlur = 15;
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
  }

}
function findBigSize () {
  if (canvas.width > canvas.height)
    return canvas.width + 300;
  else
    return canvas.height + 300;
}

// Implementation
let planets;
function initGalaxy() { 
  planets = [];
  let particlesCount = 800;
  for (let i = 0; i < particlesCount; i++) {
    let color = randomColor(galColors);
    let radius = 2 * random() + 0.08;
    let x = findBigSize() * random()  - canvas.width / 2;
    let y = findBigSize() * random() - canvas.height / 2;
    planets.push(new Galaxy(x, y, radius, color));
  }
}

// Animation Loop
let rotateRadians = 0;
let a = 1;

// Animation Loop
let rotateDeg = 0;
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = `rgba(8, 8, 8, ${a})`
  c.fillRect(0, 0, canvas.width, canvas.height)

  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  particles.forEach((love, i) => {
    if (love.lifeTime > 0)
        love.update();
    else
        particles.splice(i, 1);
      
  })
  if (rotateDeg > 2000) {
    rotateDeg = -rotateDeg;
  }
  rotateElement(rotateDeg);

  rotateDeg += 1.5;

  // handle galaxies
  c.save()
  c.translate( canvas.width / 2, canvas.height / 2)
  c.rotate(rotateRadians)
    planets.forEach((particle) => {
      particle.update();
    })
  c.restore()
  rotateRadians += 0.001;
  if (mouseDown && a > 0.05) {
    a -= 0.01;
  } else if (!mouseDown && a < 1) {
    a += 0.01
 }
}

init()
initGalaxy()
animate()
newLove()
