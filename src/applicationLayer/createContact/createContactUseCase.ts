import {ContactRepository} from "../ports/contactRepository";
import {CreateContactData} from "./createContactData";
import {Contact} from "../../domainLayer/entities/contact";
import {ContactBuilder} from "../../domainLayer/builders/contactBuilder";
import {inject, injectable} from "inversify";

@injectable()
export class CreateContactUseCase {

    constructor(private contactBuilder: ContactBuilder, @inject('ContactRepository') private contactRepository: ContactRepository) {
    }

    createContact(contactData: CreateContactData): Promise<Contact> {
        return new Promise((resolve, reject) => {
            try {
                const contact = this.createContactFrom(contactData);
                console.log(contact);
                this.contactRepository.add(contact).then(() => resolve(contact), (reason => reject(reason)));
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    }

    private createContactFrom(contactData: CreateContactData): Contact {
        return this.contactBuilder
            .firstName(contactData.firstName)
            .lastName(contactData.lastName)
            .email(contactData.email)
            .dateOfBirth(contactData.dateOfBirth)
            .build();
    }
}