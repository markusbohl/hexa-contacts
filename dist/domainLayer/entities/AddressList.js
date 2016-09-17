"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ContactAspectList_1 = require('./ContactAspectList');
var AddressList = (function (_super) {
    __extends(AddressList, _super);
    function AddressList(id, ref, equalityChecker) {
        _super.call(this, id, ref, equalityChecker);
    }
    return AddressList;
}(ContactAspectList_1.ContactAspectList));
exports.AddressList = AddressList;

//# sourceMappingURL=AddressList.js.map
