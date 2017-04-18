import {ContactValidator} from "../../../../src/domainLayer/validators/contactValidator";
import {Contact} from "../../../../src/domainLayer/entities/contact";

describe('ContactValidator', () => {
    let validator: ContactValidator;
    let contact: Contact;

    beforeEach(() => {
        validator = new ContactValidator();
        contact = new Contact();
    });

    describe('validate()', () => {
        it('should declare contact without id as invalid', () => {
            contact.firstName = 'firstname';

            let result = validator.validate(contact);

            expect(result.isValid()).toBe(false);
        });

        it('should declare contact without name as invalid', () => {
            let result = validator.validate(contact);

            expect(result.isValid()).toBe(false);
        });

        it('should declare contact with first name as valid', () => {
            contact.id = '123e4567-e89b-12d3-a456-426655440000';
            contact.firstName = 'firstname';

            let result = validator.validate(contact);

            expect(result.isValid()).toBe(true);
        });

        it('should declare contact with last name as valid', () => {
            contact.id = '123e4567-e89b-12d3-a456-426655440000';
            contact.lastName = 'lastname';

            let result = validator.validate(contact);

            expect(result.isValid()).toBe(true);
        });

        it('should declare contact with improper email as invalid', () => {
            contact.id = '123e4567-e89b-12d3-a456-426655440000';
            contact.lastName = 'lastname';
            contact.email = "foo@bar";

            let result = validator.validate(contact);

            expect(result.isValid()).toBe(false);
        });

        it('should declare contact with date of birth in the future as invalid', () => {
            contact.id = '123e4567-e89b-12d3-a456-426655440000';
            contact.lastName = 'lastname';
            contact.dateOfBirth = new Date(2100, 0, 1);

            let result = validator.validate(contact);

            expect(result.isValid()).toBe(false);
        });
    });
});