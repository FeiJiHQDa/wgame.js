
class Background extends myTexture {

    constructor(game, name) {
        super(game, name);
    }


    downMove() {
        this.pageY++;
    }



}


class myPlane extends myTexture {

    constructor(game, name) {
        super(game, name);

        this.pageX= 120;
        this.pageY= 400;
    }

    leftMove() {
        this.pageX--;
    }

    rightMove() {
        this.pageX++;
    }

    downMove() {
        this.pageY++;
    }

    upMove() {
        this.pageY--;
    }
}