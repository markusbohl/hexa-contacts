"use strict";

import { Contact } from './Contact';
import { ContactBuilder } from './ContactBuilder';
import { AddressList } from './AddressList';

describe("AddressList as ContactAspectList", () => {
    
    it("sets id via constructor", () => {
        let addressList = new AddressList(1, null, null);

        expect(addressList.id).toBe(1);
    });

    it("allows null to be set as id", () => {
        let addressList = new AddressList(null, null, null);

        expect(addressList.id).toBeNull();
    });

    it("sets contact via constructor", () => {
        let contact: Contact = new ContactBuilder().build();
        let addressList = new AddressList(null, contact, null);

        expect(addressList.ref).toBe(contact);
    });
});