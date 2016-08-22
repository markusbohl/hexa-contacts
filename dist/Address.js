"use strict";
var Domain;
(function (Domain) {
    var Address = (function () {
        function Address() {
        }
        Object.defineProperty(Address.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "contact", {
            get: function () {
                return this._contact;
            },
            set: function (contact) {
                this._contact = contact;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "city", {
            get: function () {
                return this._city;
            },
            enumerable: true,
            configurable: true
        });
        return Address;
    }());
    Domain.Address = Address;
})(Domain || (Domain = {}));
