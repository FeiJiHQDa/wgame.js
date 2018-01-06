var myGame = function (images, runCallback) {
    // images 是一个对象, 里面是图片的引用名字和图片路径
    // 程序会在所有图片载入成功后才运行
    var g = {
        scene : null,
        actions: {},
        keydowns: {},
        images: {},
    };

    var canvas = document.querySelector('#tutorial');
    var context = canvas.getContext('2d');

    g.canvas = canvas;
    g.context = context;

    g.drawImage = function (myImage) {
        context.drawImage(myImage.img, myImage.pageX, myImage.pageY);
    }

    // 使用事件
    document.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true;
    });
    document.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false;
    });

    g.registerAction = function (key, callback) {
        g.actions[key] = callback;
    }


    var loads = [];
    var names = Object.keys(images);
    for (var i = 0; i < names.length; i++) {
        let name = names[i];
        var path = images[name];
        let img = new Image();
        img.src = path;
        img.onload = function () {

            g.images[name] = img
            loads.push(1);
            if (loads.length == names.length) {
                log('load images', g.images);
                // g.__start();
                g.run();
            }
        }
    }

    g.imageByName = function (name) {
        var img = g.images[name];
        log(img);
        var image = {
            w: img.width,
            h: img.height,
            img: img,
        }
        return image;
    }

    g.run = function () {
        runCallback(g);        
    }
    // setTimeout(function () {
    //     runloop();
    // }, 1000 / 30);

    var runloop = function () {
        // 执行程序 
        var actions = Object.keys(g.actions);
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i];
            if (g.keydowns[key]) {
                g.actions[key]();
            }
        }

        // update
        g.update();

        // draw
        g.context.clearRect(0, 0, canvas.width, canvas.height);
        g.draw();

        setTimeout(function () {
            runloop();
        }, 1000 / 30)
    }

    g.runWithScene = function(scene) {
        g.scene = scene;
        setTimeout(function () {
            runloop();
        }, 1000 / 30);
    }

    g.replaceScene = function(scene) {
        g.scene = scene;        
    }


    return g;
}