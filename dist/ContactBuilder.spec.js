"use strict";
var ContactBuilder_1 = require("./ContactBuilder");
describe("ContactBuilder", function () {
    describe("build", function () {
        it("returns a contact with id set", function () {
            var builder = new ContactBuilder_1.ContactBuilder();
            var contact = builder.id(1).build();
            expect(contact.id()).toBe(1);
        });
    });
});
