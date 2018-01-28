class PlaneStart {
    constructor(game, name) {

        this.img = game.imageByName(name);
        this.pageX= 0;
        this.pageY= 0;
        this.w= this.img.width;
        this.h= this.img.height;
    }

    static new(game, name) {
        var i = new this(game, name);
        return i;
    }



}