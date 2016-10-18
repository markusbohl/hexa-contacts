"use strict";

import { Contact } from "./Contact";
import { PhoneNumber } from "./PhoneNumber";
import { EqualityChecker } from "../ports/EqualityChecker";
import { ContactAspectList } from "./ContactAspectList";

export class PhoneList extends ContactAspectList<PhoneNumber> {

    constructor(id: Number, ref: Contact, equalityChecker: EqualityChecker) {
        super(id, ref, equalityChecker);
    }
}