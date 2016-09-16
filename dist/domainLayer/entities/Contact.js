"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Identity_1 = require('../utils/Identity');
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact(id, firstName, lastName, dateOfBirth) {
        _super.call(this, id);
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
    }
    Object.defineProperty(Contact.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "dateOfBirth", {
        get: function () {
            return this._dateOfBirth;
        },
        enumerable: true,
        configurable: true
    });
    return Contact;
}(Identity_1.Identity));
exports.Contact = Contact;
