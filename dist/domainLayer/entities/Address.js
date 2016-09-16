"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Identity_1 = require('../utils/Identity');
var Address = (function (_super) {
    __extends(Address, _super);
    function Address(id, street, houseNumber, postCode, city, country) {
        _super.call(this, id);
        this._street = street;
        this._houseNumber = houseNumber;
        this._postCode = postCode;
        this._city = city;
        this._country = country;
    }
    Object.defineProperty(Address.prototype, "street", {
        get: function () {
            return this._street;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "houseNumber", {
        get: function () {
            return this._houseNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "postCode", {
        get: function () {
            return this._postCode;
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
    Object.defineProperty(Address.prototype, "country", {
        get: function () {
            return this._country;
        },
        enumerable: true,
        configurable: true
    });
    return Address;
}(Identity_1.Identity));
exports.Address = Address;
