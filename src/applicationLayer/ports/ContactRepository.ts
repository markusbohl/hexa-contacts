import {Contact} from '../../domainLayer/entities/Contact';

export interface ContactRepository {

    add(contact: Contact): Promise<void>;

    getContact(id: string): Promise<Contact>;

    getAll(): Promise<Contact[]>;
}
