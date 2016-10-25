/// <reference path="../typings/modules/mongodb/index.d.ts" />

"use strict";

import {CreateContactOperation} from "./frameworkLayer/persistence/CreateContactOperation";
import {MongoContactRepository} from "./frameworkLayer/persistence/MongoContactRepository";
import {ContactBuilder} from "./domainLayer/entities/ContactBuilder";

const DB = require("../config/mLab/hexa-contacts-mongodb.json");
const CREDENTIALS = require("../config/mLab/hexa-contacts-credentials.json");

// Connection URL
const url = `mongodb://${CREDENTIALS.user}:${CREDENTIALS.password}@${DB.host}:${DB.port}/${DB.path}`;

let createContactOperation = new CreateContactOperation(url);
let contactRepository = new MongoContactRepository(createContactOperation);

let contact = new ContactBuilder().id("abc").firstName("Oh").lastName("Yeah").build();

contactRepository.persist(contact);