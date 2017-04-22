import {Contact} from "../../domainLayer/entities/contact";
import {ContactBuilder} from "../../domainLayer/builders/contactBuilder";

export abstract class ContactAdapter<T> {

    constructor(protected contactBuilder: ContactBuilder) {}

    abstract createContactFrom(input: T): Contact;
}