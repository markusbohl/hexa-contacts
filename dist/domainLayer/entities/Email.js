"use strict";
const Identity_1 = require("./Identity");
class Email extends Identity_1.Identity {
    constructor(id, type, email) {
        super(id);
        this._type = type;
        this._email = email;
    }
    get type() {
        return this._type;
    }
    get email() {
        return this._email;
    }
}
exports.Email = Email;

//# sourceMappingURL=Email.js.map
