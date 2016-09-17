"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ContactAspectList_1 = require('./ContactAspectList');
var PhoneList = (function (_super) {
    __extends(PhoneList, _super);
    function PhoneList(id, ref, equalityChecker) {
        _super.call(this, id, ref, equalityChecker);
    }
    return PhoneList;
}(ContactAspectList_1.ContactAspectList));
exports.PhoneList = PhoneList;

//# sourceMappingURL=PhoneList.js.map
