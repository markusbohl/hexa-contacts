"use strict";

namespace Domain {
    export class Address {

        private _id: number;
        private _contact: Contact;

        private _street: string;
        private _housenumber: string;
        private _postcode: string;
        private _city: string;

        set id(value: number) {
            this._id = value;
        }

        get id(): number {
            return this._id;
        }

        set contact(contact: Contact) {
            this._contact = contact;
        }

        get contact(): Contact {
            return this._contact;
        }

        set street(street: string) {
            this._street = street;
        }

        get street(): string {
            return this._street;
        }

        set housenumber(housenumber: string) {
            this._housenumber = housenumber;
        }

        get housenumber(): string {
            return this._housenumber;
        }

        set postcode(postcode: string) {
            this._postcode = postcode;
        }

        get postcode(): string {
            return this._postcode;
        }

        set city(city: string) {
            this._city = city;
        }

        get city(): string {
            return this._city;
        }
    }
}