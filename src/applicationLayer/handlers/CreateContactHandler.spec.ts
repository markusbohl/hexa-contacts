/// <reference path="../../../typings/globals/jasmine/index.d.ts" />

"use strict";

import { Handler } from './Handler';
import { CreateContactHandler } from './CreateContactHandler';
import { ContactRepository } from '../../domainLayer/ports/ContactRepository';
import { CreateContactCommand } from '../../domainLayer/useCases/CreateContactCommand';
import { ContactBuilder } from '../../domainLayer/entities/ContactBuilder';

describe("CreateContactHandler", () => {
    describe("handle()", () => {
        let handler: Handler<CreateContactCommand> = null;
        let contactBuilder: ContactBuilder = null;
        let contactRepository: ContactRepository = null;
        let command: CreateContactCommand = null;

        beforeEach(() => {
            contactBuilder = new ContactBuilder();
            contactRepository = jasmine.createSpyObj("ContactRepository", ["persist"]);
            handler = new CreateContactHandler(contactBuilder, contactRepository);
        });

        it("will persist new contact with repository", () => {
            // Arrange
            command = new CreateContactCommand()
            command.firstName = "Bosco Albert";
            command.lastName = "Baracus";
            command.dateOfBirth = new Date(1952, 4, 21);

            // Act
            handler.handle(command);

            // Assert
            expect(contactRepository.persist).toHaveBeenCalledWith(jasmine.objectContaining({
                firstName: command.firstName,
                lastName: command.lastName,
                dateOfBirth: command.dateOfBirth
            }));
        });
    });
});