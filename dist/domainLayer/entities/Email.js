"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Identity_1 = require('../utils/Identity');
var Email = (function (_super) {
    __extends(Email, _super);
    function Email(id, type, email) {
        _super.call(this, id);
        this._type = type;
        this._email = email;
    }
    Object.defineProperty(Email.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    return Email;
}(Identity_1.Identity));
exports.Email = Email;

//# sourceMappingURL=Email.js.map
