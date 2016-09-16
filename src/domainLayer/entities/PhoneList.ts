"use strict";

import { Contact } from './Contact';
import { PhoneNumber } from './PhoneNumber';
import { EqualityChecker } from '../ports/EqualityChecker';
import { ImmutableGenericList } from '../utils/ImmutableGenericList';

export class PhoneList extends ImmutableGenericList<PhoneNumber> {

    private _id: Number;
    private _ref: Contact;

    constructor(id: Number, ref: Contact, equalityChecker: EqualityChecker) {
        super(equalityChecker);
        this._id = id;
        this._ref = ref;
    }

    get id(): Number {
        return this._id;
    }

    get ref(): Contact {
        return this._ref;
    }
}