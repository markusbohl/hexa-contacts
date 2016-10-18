"use strict";

import { Identity } from "./Identity";

export class Contact extends Identity {

    private _firstName: string;
    private _lastName: string;
    private _dateOfBirth: Date;

    constructor(id: string, firstName: string, lastName: string, dateOfBirth: Date) {
        super(id);
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get dateOfBirth(): Date {
        return this._dateOfBirth;
    }
}