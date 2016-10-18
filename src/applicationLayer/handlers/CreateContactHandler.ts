"use strict";

import { Handler } from "./Handler";
import { ContactRepository } from "../../domainLayer/ports/ContactRepository";
import { CreateContactCommand } from "../../domainLayer/useCases/CreateContactCommand";
import { ContactBuilder } from "../../domainLayer/entities/ContactBuilder";
import { Contact } from "../../domainLayer/entities/Contact";

export class CreateContactHandler implements Handler<CreateContactCommand> {

    constructor(private contactBuilder: ContactBuilder, private contactRepository: ContactRepository) {}

    handle(command: CreateContactCommand): void {
        let contact:Contact = this.contactBuilder
            .firstName(command.firstName)
            .lastName(command.lastName)
            .dateOfBirth(command.dateOfBirth)
            .build();

        this.contactRepository.persist(contact);
    }
}