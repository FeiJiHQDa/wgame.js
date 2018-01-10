var Scene = function (game) {

    var ball = Ball(game);

    var blocks = loadLevels(game, 1);

    var paddle = Paddle(game);
    var pause = Pause();
    // game.drawImage(paddle);

    var score = 0;

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
    game.registerAction('q', function () {
        pause.transform();
    })

    // 开始
    game.registerAction('s', function () {
        pause.start();
    })

    // // 程序 注入
    game.update = function () {

        if (pause.use()) {
            return;
        }

        ball.move();

        // if( Number(paddle.pageY) < Number(ball.pageY)) {
        //     var end = SceneEnd(game);
        //     game.replaceScene(SceneEnd);
        // }

        if (paddle.collide(ball)) {
            ball.rebound();
        }

        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            if (block.collide(ball)) {
                block.kill();
                ball.rebound();
                score += 10;
            }
        }
    }

    // mouse event
    var enableDrag = false;
    game.canvas.addEventListener('mousedown', function (event) {
        log(x, y, 'down');
        var x = event.offsetX;
        var y = event.offsetY;

        if (ball.hasPoint(x, y)) {
            enableDrag = true;
        }
    })

    game.canvas.addEventListener('mousemove', function (event) {
        if (enableDrag) {
            var x = event.offsetX;
            var y = event.offsetY;
            log(x, y, 'move');
            ball.pageX = x;
            ball.pageY = y;
        }
    })

    game.canvas.addEventListener('mouseup', function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        log(x, y, 'up');
        enableDrag = false;

    })

    // 程序 注入
    game.draw = function () {
        // draw 背景
        game.context.fillStyle = "#FFA500";
        game.context.fillRect(0, 0, 400, 350);

        game.drawImage(paddle);
        game.drawImage(ball);

        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            if (block.active) {
                game.drawImage(block);
            }
        }
        game.context.font = "20px serif";
        game.context.fillText("分数：" + score, 10, 385);
    }

    return game;
}