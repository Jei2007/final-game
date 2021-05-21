var pcImg, pc
var road1Img, road1
var road2Img, road2
var car1Img, car1

var train1Img, train1
var trainImg, train

var gameState = "LOAD"


function preload() {
    pcImg = loadImage("PC.png")
    road1Img = loadImage("road.png")
    train1Img = loadImage("train1.png")
    car1Img = loadImage("car.png")
    trainImg = loadImage("train.png")
}

function setup() {
    createCanvas(displayWidth,displayHeight)
    pc = createSprite(displayWidth/2,100)
    pc.addImage(pcImg)
    pc.scale = 0.35
    

    road1 = createSprite(displayWidth/2, 200, displayWidth, 120)
    road1.addImage(road1Img)

    train1 = createSprite(displayWidth/2, 350, displayWidth, 120)
    train1.addImage(train1Img)
    train1.scale = 1.2

}

function draw() {
    background("lightBlue")

    if(gameState === "LOAD") {
        textSize()
        text("LOADING...", displayWidth/2, displayHeight/2)
        gameState = "PLAY"
    } else if (gameState === "PLAY") {
        if(keyDown = "DOWN_ARROW") {
            pc.y += 2
        }
        if(keyDown = "UP_ARROW") {
            pc.velocityY = -2
        }
    }

    

    

    spawnTrain()
    spawnCar()

    drawSprites()
}

function spawnCar() {
    if(frameCount % 200 === 0) {
        car1 = createSprite(40,200,50,75)
        car1.addImage(car1Img)
        car1.scale = 0.5
        car1.velocityX = 5

        // car1.lifetime = 500
    }
}

function spawnTrain() {
    if(frameCount % 200 === 0) {
        train = createSprite(displayWidth,350,50,75)
        train.addImage(trainImg)
        train.scale = 0.8
        train.velocityX = -5
        train.depth = train1.depth + 2

        // train.lifetime = 500
    }
}