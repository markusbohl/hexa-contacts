"use strict";
const Identity_1 = require("./Identity");
class Contact extends Identity_1.Identity {
    constructor(id, firstName, lastName, dateOfBirth) {
        super(id);
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
}
exports.Contact = Contact;

//# sourceMappingURL=Contact.js.map
