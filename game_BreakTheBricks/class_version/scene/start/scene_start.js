// class SceneStart {

// }


var SceneStart = function(game) {

    game.registerAction('k', function () {
        var scene = Scene(game);
        game.replaceScene(scene);
    })

    game.update = function() {

    }

    game.draw = function() {
        game.context.font = "20px serif";
        game.context.fillText('按 k 开始游戏', 100, 290);
    }


    return game;
}