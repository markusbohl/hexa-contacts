"use strict";
var Domain;
(function (Domain) {
    var Contact = (function () {
        function Contact() {
        }
        Object.defineProperty(Contact.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Contact.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (value) {
                this._firstName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Contact.prototype, "lastName", {
            get: function () {
                return this._lastName;
            },
            set: function (value) {
                this._lastName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Contact.prototype, "dateOfBirth", {
            get: function () {
                return this._dateOfBirth;
            },
            set: function (value) {
                this._dateOfBirth = value;
            },
            enumerable: true,
            configurable: true
        });
        return Contact;
    }());
    Domain.Contact = Contact;
})(Domain || (Domain = {}));
