"use strict";

import { Identity } from './Identity';

export class Address extends Identity {
    private _street: string;
    private _houseNumber: string;
    private _postCode: string;
    private _city: string;
    private _country: string;

    constructor(id: number, street: string, houseNumber: string, postCode: string, city: string, country: string) {
        super(id);
        this._street = street;
        this._houseNumber = houseNumber;
        this._postCode = postCode;
        this._city = city;
        this._country = country;
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