"use strict";
const restify = require("restify");
const CreateContactOperation_1 = require("./frameworkLayer/persistence/CreateContactOperation");
const MongoContactRepository_1 = require("./frameworkLayer/persistence/MongoContactRepository");
const ContactBuilder_1 = require("./domainLayer/entities/ContactBuilder");
const DB = require("../config/mLab/hexa-contacts-mongodb.json");
const CREDENTIALS = require("../config/mLab/hexa-contacts-credentials.json");
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
    let createContactOperation = new CreateContactOperation_1.CreateContactOperation(url);
    let contactRepository = new MongoContactRepository_1.MongoContactRepository(createContactOperation);
    let contact = new ContactBuilder_1.ContactBuilder().firstName(req.body.firstname).lastName(req.body.lastname).dateOfBirth(req.body.dateofbirth).build();
    contactRepository.persist(contact);
    res.send(200);
    return next();
});
server.listen(8080, () => {
    console.log(`${server.name} listening at ${server.url}`);
});

//# sourceMappingURL=server.js.map
