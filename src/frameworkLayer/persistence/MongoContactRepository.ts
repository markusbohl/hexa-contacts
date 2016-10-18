"use strict";

import {ContactRepository} from "../../domainLayer/ports/ContactRepository";
import {Contact} from "../../domainLayer/entities/Contact";
import {CreateContactOperation} from "./CreateContactOperation";

export class MongoContactRepository implements ContactRepository {

    constructor(private createOperation: CreateContactOperation) {}

    persist(contact: Contact): void {
        this.createOperation.create(contact);
    }
}