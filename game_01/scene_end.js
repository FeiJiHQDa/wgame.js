var SceneEnd = function(game) {

    game.draw = function() {
        game.context.font = "20px serif";
        game.context.fillText('游戏结束', 100, 290);
    }

    game.update = function() {

    }

    return game;
}