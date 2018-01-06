var log = console.log.bind(console);

// 返回 图片路径
var imageFromPath = function (path) {
    var img = new Image();
    img.src = path;
    return img;
}

// 碰撞算法
var rectIntersects = function (a, b) {

    // return function(a,b) {}
    if (b.pageY > a.pageY && a.pageY + a.img.height > b.pageY) {
        if (b.pageX > a.pageX && b.pageX < a.pageX + a.img.width) {
            log('rpz');
            return true;
        }
    }
    return false;
}