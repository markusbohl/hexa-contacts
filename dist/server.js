"use strict";
const CreateContactOperation_1 = require("./frameworkLayer/persistence/CreateContactOperation");
const MongoContactRepository_1 = require("./frameworkLayer/persistence/MongoContactRepository");
const ContactBuilder_1 = require("./domainLayer/entities/ContactBuilder");
const DB = require("../config/mLab/hexa-contacts-mongodb.json");
const CREDENTIALS = require("../config/mLab/hexa-contacts-credentials.json");
const url = `mongodb://${CREDENTIALS.user}:${CREDENTIALS.password}@${DB.host}:${DB.port}/${DB.path}`;
let createContactOperation = new CreateContactOperation_1.CreateContactOperation(url);
let contactRepository = new MongoContactRepository_1.MongoContactRepository(createContactOperation);
let contact = new ContactBuilder_1.ContactBuilder().id("abc").firstName("Oh").lastName("Yeah").build();
contactRepository.persist(contact);

//# sourceMappingURL=server.js.map
