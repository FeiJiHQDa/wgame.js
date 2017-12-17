 // 球
 var Ball = function () {
    var img = imageFromPath('ball.png');
    var o = {
        img: img,
        pageX: 100,
        pageY: 200,
        spaceX: 10,
        spaceY: 10,
        fired: false,
    }

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

    return o;
}