"use strict";
const mongodb_1 = require("mongodb");
const assert = require("assert");
class CreateContactOperation {
    constructor(mongoDbUrl) {
        this.mongoDbUrl = mongoDbUrl;
    }
    insert(contact, db, callback) {
        let collection = db.collection("contacts");
        collection.insertOne(contact, function (err, result) {
            assert.equal(null, err);
            console.log(`insert contact result: ${result}`);
            callback(result);
        });
    }
    create(contact) {
        mongodb_1.MongoClient.connect(this.mongoDbUrl, function (err, db) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            this.insert(contact, db, function () {
                db.close();
            });
        });
    }
}
exports.CreateContactOperation = CreateContactOperation;

//# sourceMappingURL=CreateContactOperation.js.map
