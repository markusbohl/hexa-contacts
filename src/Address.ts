"use strict";

namespace Domain {
    export class Address {

        private _id: number;
        private _contact: Contact;
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

        get city(): string {
            return this._city;
        }
    }
}