// 挡板
var Paddle = function () {
    var img = imageFromPath('baffle.png');
    var o = {
        img: img,
        pageX: 150,
        pageY: 280,
        space: 15,
    }

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

    o.collide = function (ball) {

        if (ball.pageY + ball.img.height > o.pageY && ball.pageY < o.pageY + o.img.height) {
            if (ball.pageX > o.pageX && ball.pageX < o.pageX + o.img.width) {
                log('相撞');
                return true;
            }

        }
        return false;
    }

    return o;
}