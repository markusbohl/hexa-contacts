"use strict";
var HandlerRegistry = (function () {
    function HandlerRegistry() {
        this.registry = new Array();
    }
    HandlerRegistry.prototype.register = function (handler, cmdType) {
        console.log(cmdType);
        console.log(handler);
    };
    HandlerRegistry.prototype.getHandler = function (command) {
        return null;
    };
    return HandlerRegistry;
}());
exports.HandlerRegistry = HandlerRegistry;
