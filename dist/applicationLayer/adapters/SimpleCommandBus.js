"use strict";
var SimpleCommandBus = (function () {
    function SimpleCommandBus(handlerRegistry) {
        this.handlerRegistry = handlerRegistry;
    }
    SimpleCommandBus.prototype.execute = function (command) {
        var handler = this.handlerRegistry.getHandler(command);
        handler.handle(command);
    };
    return SimpleCommandBus;
}());
exports.SimpleCommandBus = SimpleCommandBus;

//# sourceMappingURL=SimpleCommandBus.js.map
