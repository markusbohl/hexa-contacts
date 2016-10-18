"use strict";

import { Contact } from "./Contact";
import { EqualityChecker } from "../ports/EqualityChecker";
import { ImmutableGenericList } from "../utils/ImmutableGenericList";

export abstract class ContactAspectList<T> extends ImmutableGenericList<T> {

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