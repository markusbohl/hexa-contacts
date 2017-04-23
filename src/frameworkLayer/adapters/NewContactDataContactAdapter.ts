import {injectable} from 'inversify';
import {ContactAdapter} from '../../applicationLayer/ports/ContactAdapter';
import {ContactBuilder} from '../../domainLayer/builders/ContactBuilder';
import {Contact} from '../../domainLayer/entities/Contact';
import {NewContactData} from '../restModels/NewContactData';

@injectable()
export class NewContactDataContactAdapter extends ContactAdapter<NewContactData> {

    constructor(contactBuilder: ContactBuilder) {
        super(contactBuilder);
    }

    createContactFrom(input: NewContactData): Contact {
        return this.contactBuilder
            .firstName(input.firstName)
            .lastName(input.lastName)
            .email(input.email)
            .dateOfBirth(this.dateBy(input.dateOfBirth))
            .build();
    }

    private dateBy(isoFormat: string): Date {
        if (isoFormat) {
            return new Date(isoFormat);
        } else {
            return void 0;
        }
    }
}
