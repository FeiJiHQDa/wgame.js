class Scene extends myScene {
    constructor(game) {
        super(game);


        this.ball = Ball(game);
        this.blocks = loadLevels(game, 1);
        this.paddle = Paddle(game);
        this.pause = Pause();

        log(this.ball);
        // game.drawImage(paddle);
        this.score = 0;

        var than = this;

        game.registerAction('a', function () {
            than.paddle.leftMove();
        })
        game.registerAction('d', function () {
            than.paddle.rightMove();
        })

        game.registerAction('f', function () {
           log(this);
            than.ball.fire();
        })

        //暂停
        game.registerAction('q', function () {
            than.pause.transform();
        })

        // 开始
        game.registerAction('s', function () {
            than.pause.start();
        })

        // mouse event
        var enableDrag = false;
        game.canvas.addEventListener('mousedown', function (event) {
            log(x, y, 'down');
            var x = event.offsetX;
            var y = event.offsetY;

            if (than.ball.hasPoint(x, y)) {
                enableDrag = true;
            }
        })

        game.canvas.addEventListener('mousemove', function (event) {
            if (enableDrag) {
                var x = event.offsetX;
                var y = event.offsetY;
                log(x, y, 'move');
                than.ball.pageX = x;
                than.ball.pageY = y;
            }
        })

        game.canvas.addEventListener('mouseup', function (event) {
            var x = event.offsetX;
            var y = event.offsetY;
            log(x, y, 'up');
            enableDrag = false;
        })
    }


    update() {

        if (this.pause.use()) {
            return;
        }

        this.ball.move();

        // if( Number(paddle.pageY) < Number(ball.pageY)) {
        //     var end = SceneEnd(game);
        //     game.replaceScene(SceneEnd);
        // }

        if (this.paddle.collide(this.ball)) {
            this.ball.rebound();
        }

        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            if (block.collide(this.ball)) {
                block.kill();
                this.ball.rebound();
                this.score += 10;
            }
        }
    }

    draw() {
        // draw 背景
        this.game.context.fillStyle = "#FFA500";
        this.game.context.fillRect(0, 0, 400, 350);

        this.game.drawImage(this.paddle);
        this.game.drawImage(this.ball);

        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            if (block.active) {
                this.game.drawImage(block);
            }
        }
        this.game.context.font = "20px serif";
        this.game.context.fillText("分数：" + this.score, 10, 385);
    }
}