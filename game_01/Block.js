// 方块
var Block = function (game, position) {
    
    // var img = imageFromPath('block.png');
    // var p = {
    //     img: img,
    //     pageX: position[0],
    //     pageY: position[1],
    //     active: true,
    //     lifes: position[2] || 1,
    // }

    var block = game.imageByName('block');

    var other = {
        pageX: position[0],
        pageY: position[1],
        active: true,
        lifes: position[2] || 1,
    }

    var p =  Object.assign(block, other);

    p.kill = function () {
        log('pxx');
        p.lifes--;
        if (p.lifes < 1) {
            p.active = false;
        }
    }

    p.collide = function (b) {
        return p.active && (rectIntersects(p, b) || rectIntersects(b, p))
    }

    return p;
}