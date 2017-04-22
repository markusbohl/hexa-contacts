import "reflect-metadata";
import {ContactRepository} from "../ports/contactRepository";
import {Contact} from "../../domainLayer/entities/contact";
import {inject, injectable} from "inversify";
import {ContactAdapter} from "../ports/contactAdapter";

@injectable()
export class CreateContactUseCase<T> {

    constructor(@inject('ContactAdapter') private adapter: ContactAdapter<T>, @inject('ContactRepository') private contactRepository: ContactRepository) {
    }

    createContact(input: T): Promise<Contact> {
        return new Promise((resolve, reject) => {
            try {
                const contact = this.adapter.createContactFrom(input);

                this.contactRepository.add(contact)
                    .then(() => resolve(contact), (reason => reject(reason)));
            } catch (e) {
                reject(e);
            }
        });
    }
}