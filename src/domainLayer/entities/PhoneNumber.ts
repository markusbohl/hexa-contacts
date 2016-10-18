"use strict";

import { Identity } from "./Identity";
import { PhoneType } from "./PhoneType";

export class PhoneNumber extends Identity {

    private _type: PhoneType;
    private _phoneNumber: string;

    constructor(id: string, type: PhoneType, phoneNumber: string) {
        super(id);
        this._type = type;
        this._phoneNumber = phoneNumber;
    }

    get type(): PhoneType {
        return this._type;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }
}