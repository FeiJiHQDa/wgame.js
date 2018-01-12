class myGame {
    constructor(images, runCallback) {

        this.images = images;

        this.runCallback = runCallback;

        this.scene = null;
        this.actions = {};
        this.keydowns = {};
        // this.images = {};
        var than = this;
        // var canvas = document.querySelector('#tutorial');
        // var context = canvas.getContext('2d');
        this.canvas = document.querySelector('#tutorial');
        this.context = this.canvas.getContext('2d');

        // 使用事件
        document.addEventListener('keydown', function (event) {
            than.keydowns[event.key] = true;
        });
        document.addEventListener('keyup', function (event) {
            than.keydowns[event.key] = false;
        });

        this.init();
    }

    drawImage(myImage) {
        this.context.drawImage(myImage.img, myImage.pageX, myImage.pageY);
    }

    registerAction(key, callback) {
        this.actions[key] = callback;
    }

    init() {
        var than = this;
        var loads = [];
        var names = Object.keys(than.images);
        for (var i = 0; i < names.length; i++) {
            let name = names[i];
            var path = than.images[name];
            let img = new Image();
            img.src = path;

            
            img.onload = function () {
                than.images[name] = img;
                loads.push(1);
                if (loads.length == names.length) {
                    log('load images', than.images);
                    // than.__start();
                    than.start();
                }
            }
        }
    }

    imageByName(name) {
        var img = this.images[name];
        var image = {
            w: img.width,
            h: img.height,
            img: img,
        }
        return image;
    }

    start() {
        this.runCallback(this);
    }

    update() {
        this.scene.update();
    }

    draw() {
        this.scene.draw();
    }


    runloop() {
        // 执行程序
        var than = this;
        var actions = Object.keys(than.actions);
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i];
            if (than.keydowns[key]) {
                than.actions[key]();
            }
        }

        // update
        than.update();

        // draw
        than.context.clearRect(0, 0, than.canvas.width, than.canvas.height);
        than.draw();

        setTimeout(function () {
            than.runloop();
        }, 1000 / 30)
    }


    runWithScene (scene) {
        var than = this;
        this.scene = scene;
        setTimeout(function () {
            than.runloop();
        }, 1000 / 30);
    }

    replaceScene(scene) {
        this.scene = scene;
    }
}