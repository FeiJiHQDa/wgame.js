'use strict'

var loadLevels = function (game, n) {
    var blocks = [];
    var level = levels[n];
    for (var i = 0; i < level.length; i++) {
        var b = Block(game, level[i]);
        blocks.push(b);
    }
    return blocks;
}

function __main() {

    // 预先载入所有图片
    var images = {
        ball: 'img/ball.png',
        paddle: 'img/paddle.png',
        block: 'img/block.png',
    };

    var game = myGame(images, function (g) {

        // Scene(game);
        // var g = Scene(game);
        var g = SceneStart(game);
        game.runWithScene(g);
    });


}

__main();