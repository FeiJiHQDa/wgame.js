
// 弃用
var enableDebugMode = function (enable) {
    if (!enable) {
        return;
    }

    document.addEventListener('keydown', function (event) {

        var k = event.key;
        log(k);
        if ('0123456'.includes(k)) {
            return loadLevels(k);
        }
    });
}

