"use strict";

import { Contact } from "../entities/Contact";

export interface ContactRepository {

    persist(contact: Contact): void;
}