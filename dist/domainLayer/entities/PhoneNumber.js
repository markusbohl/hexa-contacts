"use strict";
const Identity_1 = require("./Identity");
class PhoneNumber extends Identity_1.Identity {
    constructor(id, type, phoneNumber) {
        super(id);
        this._type = type;
        this._phoneNumber = phoneNumber;
    }
    get type() {
        return this._type;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
}
exports.PhoneNumber = PhoneNumber;

//# sourceMappingURL=PhoneNumber.js.map
