/// <reference path="../../typings/globals/jasmine/index.d.ts" />

"use strict";

import { ContactBuilder } from "./ContactBuilder";

describe("ContactBuilder", () => {
    describe("build", () => {
        it("returns a contact with id set", () => {
            // Arrange
            let builder = new ContactBuilder();
            builder.id(1);

            // Act
            let contact = builder.build();

            // Assert
            expect(contact.id).toBe(1);
        });
    });
});