import "jasmine";
import {ContactBuilder} from "./contactBuilder";
import {ContactValidator} from "../validators/contactValidator";
import {IllegalStateError} from "../errors/illegalStateError";

describe('ContactBuilder', () => {
    let contactBuilder: ContactBuilder;
    const birthday = new Date(2000, 10, 23);

    beforeEach(() => {
        contactBuilder = new ContactBuilder(new ContactValidator())
            .id('123e4567-e89b-12d3-a456-426655440000')
            .firstName('firstname')
            .lastName('lastname')
            .email('email@example.com')
            .dateOfBirth(birthday);
    });

    describe('build() - successful validation -', () => {
        it('should return contact with previously set id', () => {
            let contact = contactBuilder.build();

            expect(contact.id).toEqual('123e4567-e89b-12d3-a456-426655440000');
        });

        it('should return contact with generated uuid if no id was set', () => {
            let contact = contactBuilder.id(void 0).build();

            expect(contact.id).toBeDefined();
            expect(contact.id.length).toEqual(36);
        });

        it('should return contact with previously set firstname', () => {
            let contact = contactBuilder.build();

            expect(contact.firstName).toEqual('firstname');
        });

        it('should return contact with previously set lastname', () => {
            let contact = contactBuilder.build();

            expect(contact.lastName).toEqual('lastname');
        });

        it('should return contact with previously set email', () => {
            let contact = contactBuilder.build();

            expect(contact.email).toEqual('email@example.com');
        });

        it('should return contact with previously set date of birth', () => {
            let contact = contactBuilder.build();

            expect(contact.dateOfBirth).toEqual(birthday);
        });
    });

    describe('build() - unsuccessful validation -', () => {
        it('should throw exception if contact is in invalid state', () => {
            contactBuilder.dateOfBirth(new Date(2100, 0, 1)).email('not_an_email');

            try {
                contactBuilder.build();
                fail();
            } catch (e) {
                expect(e instanceof IllegalStateError).toBe(true);
            }
        });

        it('should throw exception with appropriate error message', () => {
            contactBuilder.dateOfBirth(new Date(2100, 0, 1)).email('not_an_email');

            try {
                contactBuilder.build();
                fail();
            } catch (e) {
                expect(e.message).toContain('dateOfBirth is invalid');
                expect(e.message).toContain('email is invalid');
            }
        });
    });
});