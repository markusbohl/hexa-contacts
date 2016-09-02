"use strict";

import { IContact } from "./IContact";

export class ContactBuilder {

    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _dateOfBirth: Date;

    id(value: number): ContactBuilder {
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

    build(): IContact {
        return new Contact(this._id, this._firstName, this._lastName, this._dateOfBirth);
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