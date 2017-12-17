var myGame = function () {
    var g = {
        actions: {},
        keydowns: {},
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

    setInterval(function () {

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


    }, 1000 / 30);

    return g;
}