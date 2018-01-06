'use strict'

function __main() {

    // 预先载入所有图片
    var images = {
        ball: 'img/ball.png',
        paddle: 'img/paddle.png',
        block: 'img/block.png',
    };

    var game = myGame(images, function (g) {

        // Scene(game);
        var g = Scene(game);
        game.runWithScene(g);
    });


}

__main();