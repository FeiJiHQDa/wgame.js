'use strict'
       
function __main() {

    var ball = Ball();
    var game = myGame();

    var blocks = loadLevels(1);

    var paddle = Paddle();
    var pause = Pause();
    // game.drawImage(paddle);

    // 注册 按键
    game.registerAction('a', function () {
        paddle.leftMove();
    })
    game.registerAction('d', function () {
        paddle.rightMove();
    })

    game.registerAction('f', function () {
        ball.fire();
    })

    //暂停
    game.registerAction('q', function() {
        pause.transform();
    })

    // 开始
    game.registerAction('s', function() {
        pause.start();
    })

    // // 程序 注入
    game.update = function () {

        if (pause.use()) {
            return;
        }

        ball.move();

        if (paddle.collide(ball)) {
            ball.rebound();
        }

        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            if (block.collide(ball)) {
                block.kill();
            }
        }
    }

    // 程序 注入
    game.draw = function () {
        game.drawImage(paddle);
        game.drawImage(ball);

        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            if (block.active) {
                game.drawImage(block);
            }
        }
    }

}

__main();