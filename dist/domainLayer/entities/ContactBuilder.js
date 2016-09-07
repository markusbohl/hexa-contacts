"use strict";
var Contact_1 = require("./Contact");
var ContactBuilder = (function () {
    function ContactBuilder() {
    }
    ContactBuilder.prototype.id = function (value) {
        this._id = value;
        return this;
    };
    ContactBuilder.prototype.firstName = function (value) {
        this._firstName = value;
        return this;
    };
    ContactBuilder.prototype.lastName = function (value) {
        this._lastName = value;
        return this;
    };
    ContactBuilder.prototype.dateOfBirth = function (value) {
        this._dateOfBirth = value;
        return this;
    };
    ContactBuilder.prototype.build = function () {
        return new Contact_1.Contact(this._id, this._firstName, this._lastName, this._dateOfBirth);
    };
    return ContactBuilder;
}());
exports.ContactBuilder = ContactBuilder;
