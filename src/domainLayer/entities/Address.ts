"use strict";

import { Identity } from '../utils/Identity';
import { Contact } from './Contact';
import { AddressType } from './AddressType';

export class Address extends Identity {

    private _ref: Contact;
    private _type: AddressType;
    private _street: string;
    private _houseNumber: string;
    private _postCode: string;
    private _city: string;
    private _country: string;

    constructor(id: Number, ref: Contact, type: AddressType, street: string, houseNumber: string, postCode: string, city: string, country: string) {
        super(id);
        this._ref = ref;
        this._type = type;
        this._street = street;
        this._houseNumber = houseNumber;
        this._postCode = postCode;
        this._city = city;
        this._country = country;
    }

    get ref(): Contact {
        return this._ref;
    }

    get type(): AddressType {
        return this._type;
    }

    get street(): string {
        return this._street;
    }

    get houseNumber(): string {
        return this._houseNumber;
    }

    get postCode(): string {
        return this._postCode;
    }

    get city(): string {
        return this._city;
    }

    get country(): string {
        return this._country;
    }
}