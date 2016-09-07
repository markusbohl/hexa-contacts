"use strict";
var SimpleCommandBus = (function () {
    function SimpleCommandBus(handlerProvider) {
        this.handlerProvider = handlerProvider;
    }
    SimpleCommandBus.prototype.execute = function (command) {
        var handler = this.handlerProvider.getHandler(command);
        handler.handle(command);
    };
    return SimpleCommandBus;
}());
exports.SimpleCommandBus = SimpleCommandBus;
