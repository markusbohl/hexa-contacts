"use strict";
var HandlerRegistry = (function () {
    function HandlerRegistry() {
        this.registry = new Array();
    }
    HandlerRegistry.prototype.findHandlerFor = function (cmdType) {
        var handler = null;
        this.registry.forEach(function (element) {
            if (element.cmdType.prototype == cmdType.prototype) {
                handler = element.handler;
            }
        });
        return handler;
    };
    HandlerRegistry.prototype.register = function (handler, cmdType) {
        if (this.findHandlerFor(cmdType)) {
            throw new Error("Handler for command already registered.");
        }
        this.registry.push({ cmdType: cmdType, handler: handler });
    };
    HandlerRegistry.prototype.getHandler = function (cmdType) {
        var handler = this.findHandlerFor(cmdType);
        if (handler) {
            return handler;
        }
        else {
            throw new Error("No handler registered for given command.");
        }
    };
    return HandlerRegistry;
}());
exports.HandlerRegistry = HandlerRegistry;

//# sourceMappingURL=HandlerRegistry.js.map
