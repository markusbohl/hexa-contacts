"use strict";
var Identity = (function () {
    function Identity(id) {
        this._id = id;
    }
    Object.defineProperty(Identity.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return Identity;
}());
exports.Identity = Identity;
