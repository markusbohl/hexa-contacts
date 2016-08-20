/// <reference path="../../../typings/index.d.ts" />

import { Person } from './Person';

describe("Person", () => {
    describe("getLabel", () => {
        it("returns an empty string for a person without values", () => {
            // Arrange
            let person = new Person();

            // Act
            let result = person.getLabel();

            // Assert
            expect(result).toBe("");
        });
    });
});