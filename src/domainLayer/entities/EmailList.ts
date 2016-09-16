"use strict";

import { Contact } from './Contact';
import { Email } from './Email';
import { EqualityChecker } from '../ports/EqualityChecker';
import { ContactAspectList } from './ContactAspectList';

export class EmailList extends ContactAspectList<Email> {

    constructor(id: Number, ref: Contact, equalityChecker: EqualityChecker) {
        super(id, ref, equalityChecker);
    }
}