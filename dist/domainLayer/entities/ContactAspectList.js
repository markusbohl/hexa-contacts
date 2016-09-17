"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ImmutableGenericList_1 = require('../utils/ImmutableGenericList');
var ContactAspectList = (function (_super) {
    __extends(ContactAspectList, _super);
    function ContactAspectList(id, ref, equalityChecker) {
        _super.call(this, equalityChecker);
        this._id = id;
        this._ref = ref;
    }
    Object.defineProperty(ContactAspectList.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactAspectList.prototype, "ref", {
        get: function () {
            return this._ref;
        },
        enumerable: true,
        configurable: true
    });
    return ContactAspectList;
}(ImmutableGenericList_1.ImmutableGenericList));
exports.ContactAspectList = ContactAspectList;

//# sourceMappingURL=ContactAspectList.js.map
