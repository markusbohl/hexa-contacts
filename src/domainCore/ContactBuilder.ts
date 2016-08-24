"use strict";

import { IContact } from './IContact';

export class ContactBuilder {

    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _dateOfBirth: Date;

    id(value: number): ContactBuilder {
        this._id = value;
        return this;
    }

    build(): IContact {
        return new Contact(null, null, null, null);
    }
}

class Contact implements IContact {

    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _dateOfBirth: Date;

    constructor(id: number, firstName: string, lastName: string, dateOfBirth: Date) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
    }

    id(): number {
        return this._id;
    }

    firstName(): string {
        return this._firstName;
    }

    lastName(): string {
        return this._lastName;
    }

    dateOfBirth(): Date {
        return this._dateOfBirth;
    }
}