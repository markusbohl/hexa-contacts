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
        Object.defineProperty(Address.prototype, "street", {
            get: function () {
                return this._street;
            },
            set: function (street) {
                this._street = street;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "housenumber", {
            get: function () {
                return this._housenumber;
            },
            set: function (housenumber) {
                this._housenumber = housenumber;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "postcode", {
            get: function () {
                return this._postcode;
            },
            set: function (postcode) {
                this._postcode = postcode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "city", {
            get: function () {
                return this._city;
            },
            set: function (city) {
                this._city = city;
            },
            enumerable: true,
            configurable: true
        });
        return Address;
    }());
    Domain.Address = Address;
})(Domain || (Domain = {}));
