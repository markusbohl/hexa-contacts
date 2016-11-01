/// <reference path="../typings/modules/mongodb/index.d.ts" />

"use strict";

import * as restify from "restify";
import {CreateContactOperation} from "./frameworkLayer/persistence/CreateContactOperation";
import {MongoContactRepository} from "./frameworkLayer/persistence/MongoContactRepository";
import {ContactBuilder} from "./domainLayer/entities/ContactBuilder";

const DB = require("../config/mLab/hexa-contacts-mongodb.json");
const CREDENTIALS = require("../config/mLab/hexa-contacts-credentials.json");
// Connection URL
const url = `mongodb://${CREDENTIALS.user}:${CREDENTIALS.password}@${DB.host}:${DB.port}/${DB.path}`;

const server = restify.createServer({
    name: "hexa-contacts",
    version: "0.0.1"
});

server.use(restify.bodyParser({
    mapParams: true
}));

server.post("/create", function create(req, res, next) {
    console.log(req.body);
    let createContactOperation = new CreateContactOperation(url);
    let contactRepository = new MongoContactRepository(createContactOperation);
    let contact = new ContactBuilder().firstName(req.body.firstname).lastName(req.body.lastname).dateOfBirth(req.body.dateofbirth).build();
    contactRepository.persist(contact);
    res.send(200);
    return next();
});

server.listen(8080, () => {
    console.log(`${server.name} listening at ${server.url}`);
});