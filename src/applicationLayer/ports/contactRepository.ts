import {Contact} from "../../domainLayer/entities/contact";

export interface ContactRepository {

    add(contact: Contact): Promise<void>;

    get(id: string): Promise<Contact>;

    getAll(): Promise<Contact[]>;
}