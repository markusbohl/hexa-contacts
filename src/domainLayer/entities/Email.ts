"use strict";

import { Identity } from "./Identity";
import { EmailType } from "./EmailType";

export class Email extends Identity {

    private _type: EmailType;
    private _email: string;

    constructor(id: string, type: EmailType, email: string) {
        super(id);
        this._type = type;
        this._email = email;
    }

    get type(): EmailType {
        return this._type;
    }

    get email(): string {
        return this._email;
    }
}