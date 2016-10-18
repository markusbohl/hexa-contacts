"use strict";
const ImmutableGenericList_1 = require("../utils/ImmutableGenericList");
class ContactAspectList extends ImmutableGenericList_1.ImmutableGenericList {
    constructor(id, ref, equalityChecker) {
        super(equalityChecker);
        this._id = id;
        this._ref = ref;
    }
    get id() {
        return this._id;
    }
    get ref() {
        return this._ref;
    }
}
exports.ContactAspectList = ContactAspectList;

//# sourceMappingURL=ContactAspectList.js.map
