"use strict";
class CreateContactHandler {
    constructor(contactBuilder, contactRepository) {
        this.contactBuilder = contactBuilder;
        this.contactRepository = contactRepository;
    }
    handle(command) {
        let contact = this.contactBuilder
            .firstName(command.firstName)
            .lastName(command.lastName)
            .dateOfBirth(command.dateOfBirth)
            .build();
        this.contactRepository.persist(contact);
    }
}
exports.CreateContactHandler = CreateContactHandler;

//# sourceMappingURL=CreateContactHandler.js.map
