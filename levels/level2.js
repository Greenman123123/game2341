class Level2 {
    constructor() {

        this.turtle1 = createSprite(300, 525)
        this.turtle1.addImage(turtleImg)
        this.turtle1.scale = 0.4

        this.can11 = createSprite(150, 400, 100, 20);
        this.can11.addImage(can1Img)
        this.can11.scale = 0.4
        this.can11.velocityX = random(-2,2)
        this.can11.velocityY = random(-2,2)
        

        this.can22 = createSprite(425, 400, 20, 100);
        this.can22.addImage(can2Img)
        this.can22.scale = 0.4
        this.can22.velocityX = random(-2,2)
        this.can22.velocityY = random(-2,2)

        this.can33 = createSprite(145, 250, 100, 20);
        this.can33.addImage(can3Img)
        this.can33.scale = 1.4
        this.can33.velocityX = random(-2,2)
        this.can33.velocityY = random(-2,2)

        this.can44 = createSprite(425, 150, 20, 100);
        this.can44.addImage(can4Img)
        this.can44.scale = 1.3
        this.can44.velocityX = random(-2,2)
        this.can44.velocityY = random(-2,2)

        this.can55 = createSprite(145, 140, 100, 20);
        this.can55.addImage(can5Img)
        this.can55.scale = 0.4
        this.can55.velocityX = random(-2,2)
        this.can55.velocityY = random(-2,2)

        this.can66 = createSprite(425, 250, 100, 20);
        this.can66.addImage(can6Img)
        this.can66.velocityX = random(-2,2)
        this.can66.velocityY = random(-2,2)

        this.end2 = createSprite(300, 70, 50, 50)
        this.end2.addImage(endImg)
        this.end2.scale = 0.3
    }

    movement() {
        if (keyDown("up")) {
            this.turtle1.y = this.turtle1.y - 3
        }
        if (keyDown("down")) {
            this.turtle1.y = this.turtle1.y + 3
        }
        if (keyDown("left")) {
            this.turtle1.x = this.turtle1.x - 3
        }
        if (keyDown("right")) {
            this.turtle1.x = this.turtle1.x + 3
        }
    }

    display() {

        this.movement();

        if (this.turtle1.isTouching(this.end2)) {
            gameState = 3
        }

    }
}