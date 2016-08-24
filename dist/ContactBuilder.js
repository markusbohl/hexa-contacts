"use strict";
var ContactBuilder = (function () {
    function ContactBuilder() {
    }
    ContactBuilder.prototype.id = function (value) {
        this._id = value;
        return this;
    };
    ContactBuilder.prototype.build = function () {
        return new Contact(null, null, null, null);
    };
    return ContactBuilder;
}());
exports.ContactBuilder = ContactBuilder;
var Contact = (function () {
    function Contact(id, firstName, lastName, dateOfBirth) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
    }
    Contact.prototype.id = function () {
        return this._id;
    };
    Contact.prototype.firstName = function () {
        return this._firstName;
    };
    Contact.prototype.lastName = function () {
        return this._lastName;
    };
    Contact.prototype.dateOfBirth = function () {
        return this._dateOfBirth;
    };
    return Contact;
}());
