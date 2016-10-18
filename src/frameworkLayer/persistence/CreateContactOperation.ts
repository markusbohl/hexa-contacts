///<reference path="../../../typings/globals/node/index.d.ts"/>
///<reference path="../../../typings/modules/mongodb/index.d.ts"/>

"use strict";

import {MongoClient} from "mongodb";
import * as assert from "assert";
import {Contact} from "../../domainLayer/entities/Contact";

export class CreateContactOperation {

    constructor(private mongoDbUrl: string) {}

    private insert(contact: Contact, db: any, callback: Function): void {
        let collection = db.collection("contacts");
        collection.insertOne(contact, function (err: any, result: any) {
            assert.equal(null, err);
            console.log(`insert contact result: ${result}`);

            callback(result);
        });
    }

    create(contact: Contact) {
        MongoClient.connect(this.mongoDbUrl, function (err: any, db: any) {
            assert.equal(null, err);
            console.log("Connected successfully to server");

            this.insert(contact, db, function () {
                db.close();
            });
        });
    }
}