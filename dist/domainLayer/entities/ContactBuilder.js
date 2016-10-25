"use strict";
const Contact_1 = require("./Contact");
class ContactBuilder {
    id(value) {
        this._id = value;
        return this;
    }
    firstName(value) {
        this._firstName = value;
        return this;
    }
    lastName(value) {
        this._lastName = value;
        return this;
    }
    dateOfBirth(value) {
        this._dateOfBirth = value;
        return this;
    }
    build() {
        return new Contact_1.Contact(this._id, this._firstName, this._lastName, this._dateOfBirth);
    }
}
exports.ContactBuilder = ContactBuilder;

//# sourceMappingURL=ContactBuilder.js.map
