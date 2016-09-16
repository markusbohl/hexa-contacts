"use strict";

import { ImmutableGenericList } from '../utils/ImmutableGenericList';
import { EqualityChecker } from '../ports/EqualityChecker';

describe("GenericList", () => {
    let equalityChecker: EqualityChecker = {
        isEqual(value, other): boolean { return true }
    }

    describe("length", () => {
        let immutableList: ImmutableGenericList<string> = new ImmutableGenericList<string>(equalityChecker);

        it("returns 0 if list is empty", () => {
            expect(immutableList.length).toBe(0);
        });

        it("returns 1 if list is empty", () => {
            immutableList.add("one more thing");

            expect(immutableList.length).toBe(1);
        });
    });

    describe("isEmpty()", () => {
        let immutableList: ImmutableGenericList<string> = new ImmutableGenericList<string>(equalityChecker);

        it("returns true if list is empty", () => {
            expect(immutableList.isEmpty()).toBeTruthy();
        });

        it("returns false if list is not empty", () => {
            immutableList.add("one more thing");

            expect(immutableList.isEmpty()).toBeFalsy;
        });
    });

    describe("remove()", () => {
        let immutableList: ImmutableGenericList<string> = new ImmutableGenericList<string>(equalityChecker);

        it("remove nothing if given value is not present in list", () => {
            // Arrange
            spyOn(equalityChecker, "isEqual").and.returnValue(false);
            immutableList.add("the value");

            // Act
            immutableList.remove("not the value");

            // Assert
            expect(immutableList.length).toBe(1);
        });

        it("remove given value from list", () => {
            // Arrange
            spyOn(equalityChecker, "isEqual").and.returnValue(true);
            immutableList.add("the value");

            // Act
            immutableList.remove("the value");

            // Assert
            expect(immutableList.length).toBe(0);
        });
    });

    describe("values()", () => {
        let immutableList: ImmutableGenericList<string> = new ImmutableGenericList<string>(equalityChecker);

        it("returns an empty array if list is empty", () => {
            expect(immutableList.values().length).toBe(0);
        });

        it("returns the values of the list", () => {
            immutableList.add("the value");

            expect(immutableList.values()).toContain("the value");
        });

        it("keeps the list immutable while returning the values", () => {
            immutableList.add("another value");

            let values = immutableList.values();
            values.pop();

            expect(values).not.toContain("another value");
            expect(immutableList.values()).toContain("another value");
        });
    });
});