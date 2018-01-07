
var Pause = function () {

    var o = {
        active: false,
    }

    o.transform = function () {
        o.active = true;
    }
    o.start = function () {
        o.active = false;
    }

    o.use = function () {
        return o.active;
    }

    return o;
}