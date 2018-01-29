class SceneStart extends myScene {
    constructor(game) {
        super(game);

        this.palne = PlaneStart.new(game, 'ks');

        this.options()
    }

    options() {

        var game = this.game;
        game.registerAction('k', function() {
            var scene = new Scene(game);
            game.replaceScene(scene);
        })
    }

    draw() {

        this.game.drawImage(this.palne);
    }
}