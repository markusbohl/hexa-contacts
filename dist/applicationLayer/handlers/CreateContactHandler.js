"use strict";
var CreateContactHandler = (function () {
    function CreateContactHandler(contactBuilder, contactRepository) {
        this.contactBuilder = contactBuilder;
        this.contactRepository = contactRepository;
    }
    CreateContactHandler.prototype.handle = function (command) {
        var contact = this.contactBuilder
            .firstName(command.firstName)
            .lastName(command.lastName)
            .dateOfBirth(command.dateOfBirth)
            .build();
        this.contactRepository.persist(contact);
    };
    return CreateContactHandler;
}());
exports.CreateContactHandler = CreateContactHandler;
