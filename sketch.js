var bg
var game
var level1
var level2
var gameState = 0

function preload() {
  bgImg = loadImage("assets/bg.png")
  turtleImg = loadImage("assets/turtle.png")
  can1Img = loadImage("assets/can1.png")
  can2Img = loadImage("assets/can2.png")
  can3Img = loadImage("assets/can3.png")
  can4Img = loadImage("assets/can4.png")
  can5Img = loadImage("assets/can5.png")
  can6Img = loadImage("assets/can6.png")
  endImg = loadImage("assets/portal.png")

}
function setup() {
  createCanvas(600, 600);


  bg = createSprite(300, 300)
  bg.scale = 1.5
  bg.addImage(bgImg)

  level1 = new Level1()
  level2 = new Level2()
}


function draw() {


  if (gameState === 0) {
    background(51);
    gameState = 1
  }

  if (gameState === 1) {
    level1.display()
  }

  if (gameState === 2) {
    level2.display()
  }

  if (gameState === 3) {
    background("green")
  }


  console.log(gameState)


}


