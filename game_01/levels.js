
var loadLevels = function (n) {
    var blocks = [];
    var level = levels[n];
    for (var i = 0; i < level.length; i++) {
        var b = Block(level[i]);
        blocks.push(b);
    }
    return blocks;
}

// 添加关卡
var levels = [
    [
        [50, 30]
    ],
    [
        [50, 30, 2],
        [100, 100, 2],
        [200, 100],
    ]
];