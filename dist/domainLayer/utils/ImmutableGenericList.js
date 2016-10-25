"use strict";
class ImmutableGenericList {
    constructor(equalityChecker) {
        this._list = new Array();
        this._equalityChecker = equalityChecker;
    }
    get length() {
        return this._list.length;
    }
    isEmpty() {
        return this.length === 0;
    }
    add(value) {
        this._list.push(value);
    }
    remove(value) {
        this._list = this._list.filter((element) => {
            return !this._equalityChecker.isEqual(value, element);
        });
    }
    values() {
        return this._list.slice(0);
    }
}
exports.ImmutableGenericList = ImmutableGenericList;

//# sourceMappingURL=ImmutableGenericList.js.map
