var SceneEnd = function(game) {


    game.registerAction('u', function () {
        var scene = SceneStart(game);
        game.replaceScene(scene);
    })

    game.draw = function() {
        game.context.font = "20px serif";
        game.context.fillText('游戏结束', 100, 150);
        game.context.fillText('按 u 开始游戏', 100, 250);
    }

    game.update = function() {

    }

    return game;
}