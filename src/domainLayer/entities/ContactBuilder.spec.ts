/// <reference path="../../../typings/globals/jasmine/index.d.ts" />

"use strict";

import { ContactBuilder } from "./ContactBuilder";

describe("ContactBuilder", () => {
    describe("build", () => {
        it("returns a contact with attributes set", () => {
            // Arrange
            let builder = new ContactBuilder();
            const BIRTHDAY = new Date();

            // Act
            let contact = builder
                .id(1)
                .firstName("John")
                .lastName("Doe")
                .dateOfBirth(BIRTHDAY)
                .build();

            // Assert
            expect(contact.id()).toBe(1);
            expect(contact.firstName()).toBe("John");
            expect(contact.lastName()).toBe("Doe");
            expect(contact.dateOfBirth()).toBe(BIRTHDAY);
        });
    });
});