"use strict";

import { Contact } from "./Contact";

export class ContactBuilder {

    private _id: string;
    private _firstName: string;
    private _lastName: string;
    private _dateOfBirth: Date;

    id(value: string): ContactBuilder {
        this._id = value;
        return this;
    }

    firstName(value: string): ContactBuilder {
        this._firstName = value;
        return this;
    }

    lastName(value: string): ContactBuilder {
        this._lastName = value;
        return this;
    }

    dateOfBirth(value: Date): ContactBuilder {
        this._dateOfBirth = value;
        return this;
    }

    build(): Contact {
        return new Contact(this._id, this._firstName, this._lastName, this._dateOfBirth);
    }
}