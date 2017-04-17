import * as uuid from "uuid";
import {Contact} from "../entities/contact";
import {ContactValidator} from "../validators/contactValidator";
import {IllegalInstanceError} from "../errors/illegalInstanceError";

export class ContactBuilder {
    private _id: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _dateOfBirth: Date;

    constructor(private contactValidator: ContactValidator) {
    }

    id(id: string): this {
        this._id = id;
        return this;
    }

    firstName(firstName: string): this {
        this._firstName = firstName;
        return this;
    }

    lastName(lastName: string): this {
        this._lastName = lastName;
        return this;
    }

    email(email: string): this {
        this._email = email;
        return this;
    }

    dateOfBirth(dateOfBirth: Date): this {
        this._dateOfBirth = dateOfBirth;
        return this;
    }

    build(): Readonly<Contact> {
        const contact = new Contact();
        contact.id = this._id || uuid.v4();
        contact.firstName = this._firstName;
        contact.lastName = this._lastName;
        contact.email = this._email;
        contact.dateOfBirth = this._dateOfBirth;

        const result = this.contactValidator.validate(contact);

        if (result.isValid()) {
            return contact;
        } else {
            throw new IllegalInstanceError();
        }
    }
}