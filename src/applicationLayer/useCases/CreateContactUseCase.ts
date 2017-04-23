import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import {Contact} from '../../domainLayer/entities/Contact';
import {ContactAdapter} from '../ports/ContactAdapter';
import {ContactRepository} from '../ports/ContactRepository';

@injectable()
export class CreateContactUseCase<T> {

    constructor(@inject('ContactAdapter') private adapter: ContactAdapter<T>,
                @inject('ContactRepository') private contactRepository: ContactRepository) {
    }

    createContact(input: T): Promise<Contact> {
        return new Promise((resolve, reject) => {
            try {
                const contact = this.adapter.createContactFrom(input);

                this.contactRepository.add(contact)
                    .then(() => {
                        resolve(contact);
                    })
                    .catch(reason => {
                        reject(reason);
                    });
            } catch (e) {
                reject(e);
            }
        });
    }
}
