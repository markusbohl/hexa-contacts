import {ContactBuilder} from '../../domainLayer/builders/ContactBuilder';
import {Contact} from '../../domainLayer/entities/Contact';

export abstract class ContactAdapter<T> {

    constructor(protected contactBuilder: ContactBuilder) {
    }

    abstract createContactFrom(input: T): Contact;
}
