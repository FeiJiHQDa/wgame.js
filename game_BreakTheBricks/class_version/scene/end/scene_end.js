class SceneEnd extends myScene {
    constructor(game) {
        super(game);
        game.registerAction('u', function () {
            var scene = new SceneStart(game);
            game.replaceScene(scene);
        })
    }

    draw() {
        this.game.context.font = "20px serif";
        this.game.context.fillText('游戏结束', 100, 150);
        this.game.context.fillText('按 u 开始游戏', 100, 250);
    }
}