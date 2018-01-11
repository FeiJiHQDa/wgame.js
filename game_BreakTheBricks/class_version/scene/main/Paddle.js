// 挡板
var Paddle = function (game) {
    // var img = imageFromPath('paddle.png');
    // var o = {
    //     img: img,
    //     pageX: 150,
    //     pageY: 280,
    //     space: 15,
    // }

    var paddle = game.imageByName('paddle');

    var other = {
        pageX: 150,
        pageY: 280,
        space: 15,
    }

    var o = Object.assign(paddle, other);

    o.leftMove = function () {
        o.pageX -= o.space;

        if (o.pageX < 0) {
            o.pageX = 0;
        }
    }
    o.rightMove = function () {
        o.pageX += o.space;

        if (o.pageX > 400 - o.img.width) {
            o.pageX = 400 - o.img.width;
        }
    }

    var aInb = function (x, x1, x2) {
        return Number(x) >= Number(x1) && Number(x) <= Number(x2);
    }

    o.collide = function (ball) {

        var b = ball;
        var a = o;

        var bw = aInb(b.pageX, a.pageX, a.pageX + a.w);
        var aw = aInb(a.pageX, b.pageX, b.pageX + b.w);
        var bh = aInb(b.pageY, a.pageY, a.pageY + a.h);
        var ah = aInb(a.pageY, b.pageY, b.pageY + b.h);

        if (bw || aw) {
            if ( bh || ah) {
                return true
            }
        }

        // if (ball.pageY + ball.img.height > o.pageY && ball.pageY < o.pageY + o.img.height) {
        //     if (ball.pageX > o.pageX && ball.pageX < o.pageX + o.img.width) {
        //         return true;
        //     }

        // }
        return false;
    }

    return o;
}