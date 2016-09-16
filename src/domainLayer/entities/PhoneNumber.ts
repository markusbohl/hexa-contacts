"use strict";

import { Identity } from '../utils/Identity';
import { PhoneType } from './PhoneType';

export class PhoneNumber extends Identity {

    private _type: PhoneType;
    private _number: string;

    constructor(id: Number, type: PhoneType, number: string) {
        super(id);
        this._type = type;
        this._number = number;
    }

    get type(): PhoneType {
        return this._type;
    }

    get number(): string {
        return this._number;
    }
}