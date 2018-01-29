class Scene extends myScene {
    constructor(game) {
        super(game);


        this.options();
    }

    options() {

        var game = this.game;
        var than = this;
        this.bg = new Background(game, 'background')
        this.myPlane = myPlane.new(game, 'my');

        this.addElement = [];
        this.addElement.push(this.bg);
        this.addElement.push(this.myPlane);


        game.registerAction('a', function (game) {
            than.myPlane.leftMove();
        })

        game.registerAction('d', function (game) {
            than.myPlane.rightMove();
        })

        game.registerAction('s', function (game) {
            than.myPlane.downMove();
        })

        game.registerAction('w', function (game) {
            than.myPlane.upMove();
        })

    }

    update() {

        // this.bg.downMove()

    }

    draw() {

        for (let i of this.addElement) {
            this.game.drawImage(i);
        }
    }
}