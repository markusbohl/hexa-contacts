"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Identity_1 = require('../utils/Identity');
var PhoneNumber = (function (_super) {
    __extends(PhoneNumber, _super);
    function PhoneNumber(id, type, number) {
        _super.call(this, id);
        this._type = type;
        this._number = number;
    }
    Object.defineProperty(PhoneNumber.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhoneNumber.prototype, "number", {
        get: function () {
            return this._number;
        },
        enumerable: true,
        configurable: true
    });
    return PhoneNumber;
}(Identity_1.Identity));
exports.PhoneNumber = PhoneNumber;

//# sourceMappingURL=PhoneNumber.js.map
