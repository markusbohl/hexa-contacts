/// <reference path="../../../typings/globals/jasmine/index.d.ts" />

"use strict";

import {MongoContactRepository} from "./MongoContactRepository";
import {CreateContactOperation} from "./CreateContactOperation";
import {Contact} from "../../domainLayer/entities/Contact";
import {ContactBuilder} from "../../domainLayer/entities/ContactBuilder";

describe("MongoContactRepository", () => {

    let repository: MongoContactRepository;
    let createContactOperation: CreateContactOperation;

    beforeEach(() => {
        createContactOperation = new CreateContactOperation("mongoDbUrl");
        repository = new MongoContactRepository(createContactOperation);
    });

    describe("persist()", () => {

        it("will invoke the create contact operation for an unpersisted contact", () => {
            // Arrange
            spyOn(createContactOperation, "create");
            let contact: Contact = new ContactBuilder().id(null).build();

            // Act
            repository.persist(contact);

            // Assert
            expect(createContactOperation.create).toHaveBeenCalledWith(contact);
        });
    });
});