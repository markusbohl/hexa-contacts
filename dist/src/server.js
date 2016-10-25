"use strict";
const credentials_1 = require("../config/mLab/CREDENTIALS");
const CreateContactOperation_1 = require("./frameworkLayer/persistence/CreateContactOperation");
const MongoContactRepository_1 = require("./frameworkLayer/persistence/MongoContactRepository");
const ContactBuilder_1 = require("./domainLayer/entities/ContactBuilder");
const url = `mongodb://${credentials_1.credentials.dbuser}:${credentials_1.credentials.dbpassword}@ds035006.mlab.com:35006/hexa-contacts`;
let createContactOperation = new CreateContactOperation_1.CreateContactOperation(url);
let contactRepository = new MongoContactRepository_1.MongoContactRepository(createContactOperation);
let contact = new ContactBuilder_1.ContactBuilder().id("12345").firstName("Franz").lastName("Mümpfel").build();
contactRepository.persist(contact);

//# sourceMappingURL=server.js.map
