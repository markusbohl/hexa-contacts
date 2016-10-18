"use strict";
class HandlerRegistry {
    constructor() {
        this.registry = new Array();
    }
    findHandlerFor(cmdType) {
        let handler = null;
        this.registry.forEach(element => {
            if (element.cmdType.prototype === cmdType.prototype) {
                handler = element.handler;
            }
        });
        return handler;
    }
    register(handler, cmdType) {
        if (this.findHandlerFor(cmdType)) {
            throw new Error("Handler for command already registered.");
        }
        this.registry.push({ cmdType: cmdType, handler: handler });
    }
    getHandler(cmdType) {
        let handler = this.findHandlerFor(cmdType);
        if (handler) {
            return handler;
        }
        else {
            throw new Error("No handler registered for given command.");
        }
    }
}
exports.HandlerRegistry = HandlerRegistry;

//# sourceMappingURL=HandlerRegistry.js.map
