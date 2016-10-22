/// <reference path="../typings/modules/mongodb/index.d.ts" />

"use strict";

import { credentials } from "../config/mLab/credentials";
import {CreateContactOperation} from "./frameworkLayer/persistence/CreateContactOperation";
import {MongoContactRepository} from "./frameworkLayer/persistence/MongoContactRepository";
import {ContactBuilder} from "./domainLayer/entities/ContactBuilder";

// Connection URL
const url = `mongodb://${credentials.dbuser}:${credentials.dbpassword}@ds035006.mlab.com:35006/hexa-contacts`;

let createContactOperation = new CreateContactOperation(url);
let contactRepository = new MongoContactRepository(createContactOperation);

let contact = new ContactBuilder().id("12345").firstName("Franz").lastName("Mümpfel").build();

contactRepository.persist(contact);