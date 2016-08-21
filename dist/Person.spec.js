"use strict";
var Person_1 = require('./Person');
describe("Person", function () {
    describe("getLabel", function () {
        it("returns an empty string for a person without values", function () {
            var person = new Person_1.Person();
            var result = person.getLabel();
            expect(result).toBe("");
        });
    });
});
