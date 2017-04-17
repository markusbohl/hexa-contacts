import {AbstractValidator} from "fluent-ts-validator";
import {Contact} from "../entities/contact";

export class ContactValidator extends AbstractValidator<Contact> {

    constructor() {
        super();
        this.validateIfString(contact => contact.id).isUuid();
        this.validateIfString(contact => contact.firstName || contact.lastName).isNotEmpty();
        this.validateIfString(contact => contact.email)
            .isEmail()
            .unless(contact => contact.email == null);
        this.validateIfDate(contact => contact.dateOfBirth)
            .isSameOrBefore(new Date())
            .unless(contact => contact.dateOfBirth == null);
    }
}