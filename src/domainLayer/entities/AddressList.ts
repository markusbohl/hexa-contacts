"use strict";

import { Address } from './Address';
import { Contact } from './Contact';
import { EqualityChecker } from '../ports/EqualityChecker';
import { ContactAspectList } from './ContactAspectList';


export class AddressList extends ContactAspectList<Address> {

    constructor(id: Number, ref: Contact, equalityChecker: EqualityChecker) {
        super(id, ref, equalityChecker);
    }
}