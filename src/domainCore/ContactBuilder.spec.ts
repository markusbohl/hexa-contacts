/// <reference path="../../typings/globals/jasmine/index.d.ts" />

"use strict";

import { ContactBuilder } from "./ContactBuilder";

describe("ContactBuilder", () => {
    describe("build", () => {
        it("returns a contact with id set", () => {
            // Arrange
            let builder = new ContactBuilder();

            // Act
            let contact = builder.id(1).build();

            // Assert
            expect(contact.id()).toBe(1);
        });
    });
});