import {inject, injectable} from 'inversify';
import {Contact} from '../../domainLayer/entities/Contact';
import {ContactRepository} from '../ports/ContactRepository';

@injectable()
export class GetAllContactsUseCase {

    constructor(@inject('ContactRepository') private contactRepository: ContactRepository) {
    }

    getAllContacts(): Promise<Contact[]> {
        return this.contactRepository.getAll();
    }
}
