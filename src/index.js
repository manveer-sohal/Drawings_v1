//import InputHandler from "/src/input";
//import Practice from "/src/practice";
let canvas = document.getElementById("gamescreen");
//gets "gamescreen" from index.html = canvas
let ctx = canvas.getContext("2d");
//ctx is the context that the object is 2d

//screen dimesnions
const gameWidth = 800;
const gameLength = 600;

let positionX = gameWidth / 2;
let positionY = gameLength - gameLength / 6;
let Xspeed = 10;
let Yspeed = 10;


window.addEventListener("keydown", onKeyDown);

function onKeyDown() {
  switch (event.keyCode) {
    case 37:    
    positionX -= Xspeed;
      break;

    case 39:    
    positionX += Xspeed;
      break;
    
    case 38:    
    positionY -= Yspeed;
      break;

     case 40:    
     positionY += Yspeed;
      break;
  }
}

let LastTime = 0;

function gameloop(timestamp) {
  let deltaTime = timestamp - LastTime;
  LastTime = timestamp;

ctx.fillRect(positionX, positionY, 10, 10);
requestAnimationFrame(gameloop);
}
gameloop();