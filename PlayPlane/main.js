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
        background: 'img/background.png',
        bullet: 'img/bullet.png',
        ks: 'img/ks.png',
        my: 'img/my_plane.gif',
        enemy1: 'img/enemy1_fly_1.png',
        enemy2: 'img/enemy2_fly_1.png',
        enemy3: 'img/enemy3_fly_1.png',
        my_explode: 'img/my_explode.gif',
        big_explode: 'img/big_explode.gif',
        small_explode: 'img/small_explode.gif',
        middle_explode: 'img/middle_explode.gif',
    };

    // var game = myGame(images, function (g) {
    var game = new myGame(images, function (g) {

        var s = new Scene(g);
        g.runWithScene(s);
    });


}

__main();