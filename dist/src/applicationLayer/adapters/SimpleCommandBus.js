"use strict";
class SimpleCommandBus {
    constructor(handlerRegistry) {
        this.handlerRegistry = handlerRegistry;
    }
    execute(command) {
        let handler = this.handlerRegistry.getHandler(command);
        handler.handle(command);
    }
}
exports.SimpleCommandBus = SimpleCommandBus;

//# sourceMappingURL=SimpleCommandBus.js.map
