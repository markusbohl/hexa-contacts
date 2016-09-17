"use strict";
var ImmutableGenericList = (function () {
    function ImmutableGenericList(equalityChecker) {
        this._list = new Array();
        this._equalityChecker = equalityChecker;
    }
    Object.defineProperty(ImmutableGenericList.prototype, "length", {
        get: function () {
            return this._list.length;
        },
        enumerable: true,
        configurable: true
    });
    ImmutableGenericList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    ImmutableGenericList.prototype.add = function (value) {
        this._list.push(value);
    };
    ImmutableGenericList.prototype.remove = function (value) {
        var _this = this;
        this._list = this._list.filter(function (element) {
            return !_this._equalityChecker.isEqual(value, element);
        });
    };
    ImmutableGenericList.prototype.values = function () {
        return this._list.slice(0);
    };
    return ImmutableGenericList;
}());
exports.ImmutableGenericList = ImmutableGenericList;

//# sourceMappingURL=ImmutableGenericList.js.map
