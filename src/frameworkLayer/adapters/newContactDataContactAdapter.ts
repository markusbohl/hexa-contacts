import {ContactAdapter} from "../../applicationLayer/ports/contactAdapter";
import {NewContactData} from "../restModels/newContactData";
import {Contact} from "../../domainLayer/entities/contact";
import {injectable} from "inversify";
import {ContactBuilder} from "../../domainLayer/builders/contactBuilder";

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