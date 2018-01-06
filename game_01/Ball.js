 // 球
 var Ball = function (game) {
    // var img = imageFromPath('ball.png');
    // var o = {
    //     img: img,
    //     pageX: 100,
    //     pageY: 200,
    //     spaceX: 10,
    //     spaceY: 10,
    //     fired: false,
    // }

    // 更换 图片加载的方式
    var o = game.imageByName('ball');
    // o.img= img;
    o.pageX= 100;
    o.pageY= 200;
    o.spaceX= 10;
    o.spaceY= 10;
    o.fired =false;

    o.fire = function () {
        o.fired = true;
    }

    o.move = function () {

        if (o.fired) {
            if (o.pageX < 0 || o.pageX > 400) {
                o.spaceX = -o.spaceX;
            }
            if (o.pageY < 0 || o.pageY > 400) {
                o.spaceY = -o.spaceY;
            }

            o.pageX += o.spaceX;
            o.pageY += o.spaceY;
        }
    }

    o.rebound = function () {
        o.spaceY *= -1;
    }

    o.hasPoint = function(x, y) {
        var xMouse = x >= o.pageX && x <= o.pageX + o.w;
        var yMouse = y >= o.pageY && y <= o.pageY + o.h;
        return xMouse && yMouse;
    }

    return o;
}