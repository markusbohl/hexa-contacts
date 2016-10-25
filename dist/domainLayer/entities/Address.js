"use strict";
const Identity_1 = require("./Identity");
class Address extends Identity_1.Identity {
    constructor(id, ref, type, street, houseNumber, postCode, city, country) {
        super(id);
        this._ref = ref;
        this._type = type;
        this._street = street;
        this._houseNumber = houseNumber;
        this._postCode = postCode;
        this._city = city;
        this._country = country;
    }
    get ref() {
        return this._ref;
    }
    get type() {
        return this._type;
    }
    get street() {
        return this._street;
    }
    get houseNumber() {
        return this._houseNumber;
    }
    get postCode() {
        return this._postCode;
    }
    get city() {
        return this._city;
    }
    get country() {
        return this._country;
    }
}
exports.Address = Address;

//# sourceMappingURL=Address.js.map
