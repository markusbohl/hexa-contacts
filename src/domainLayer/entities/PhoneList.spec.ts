"use strict";

import { PhoneList } from './PhoneList';
import { PhoneType } from './PhoneType';
import { PhoneNumber } from './PhoneNumber';
import { Contact } from './Contact';
import { ContactBuilder } from './ContactBuilder';
import { EqualityChecker } from '../ports/EqualityChecker';

describe("PhoneList", () => {
    
    it("sets id via constructor", () => {
        let phoneList = new PhoneList(1, null, null);

        expect(phoneList.id).toBe(1);
    });

    it("allows null to be set as id", () => {
        let phoneList = new PhoneList(null, null, null);

        expect(phoneList.id).toBeNull();
    });

    it("sets contact via constructor", () => {
        let contact: Contact = new ContactBuilder().build();
        let phoneList = new PhoneList(null, contact, null);

        expect(phoneList.ref).toBe(contact);
    });
});