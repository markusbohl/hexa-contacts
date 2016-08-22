"use strict";

namespace Domain {
    export class Contact {

        private _id: number;
        private _firstName: string;
        private _lastName: string;
        private _dateOfBirth: Date;

        set id(value: number) {
            this._id = value;
        }

        get id(): number {
            return this._id;
        }

        set firstName(value: string) {
            this._firstName = value;
        }

        get firstName(): string {
            return this._firstName;
        }

        set lastName(value: string) {
            this._lastName = value;
        }

        get lastName(): string {
            return this._lastName;
        }

        set dateOfBirth(value: Date) {
            this._dateOfBirth = value;
        }

        get dateOfBirth(): Date {
            return this._dateOfBirth;
        }
    }
}