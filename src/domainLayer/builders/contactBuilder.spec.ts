import {ContactBuilder} from "./contactBuilder";
import {Contact} from "../entities/contact";
import {ContactValidator} from "../validators/contactValidator";
import {anything, instance, mock, verify, when} from "ts-mockito";
import {ValidationResult} from "fluent-ts-validator";
import {IllegalInstanceError} from "../errors/illegalInstanceError";

describe('ContactBuilder', () => {
    let contactBuilder: ContactBuilder;
    let mockedContactValidator: ContactValidator;
    const birthday = new Date(2000, 10, 23);

    beforeEach(() => {
        mockedContactValidator = mock(ContactValidator);
        contactBuilder = new ContactBuilder(instance(mockedContactValidator))
            .id('123e4567-e89b-12d3-a456-426655440000')
            .firstName('firstname')
            .lastName('lastname')
            .email('email@example.com')
            .dateOfBirth(birthday);
    });

    describe('build() - successful validation -', () => {
        beforeEach(() => {
            const mockedValidationResult = mock(ValidationResult);
            when(mockedValidationResult.isValid()).thenReturn(true);
            when(mockedContactValidator.validate(anything())).thenReturn(instance(mockedValidationResult));
        });

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

        it('should validate created contact prior to returning', () => {
            let contact = contactBuilder.build();

            verify(mockedContactValidator.validate(contact)).called();
        });
    });

    describe('build() - unsuccessful validation -', () => {
        it('should throw exception if contact is in invalid state', () => {
            const mockedValidationResult = mock(ValidationResult);
            when(mockedValidationResult.isValid()).thenReturn(false);
            when(mockedContactValidator.validate(anything())).thenReturn(instance(mockedValidationResult));

            try {
                contactBuilder.build();
                fail();
            } catch (e) {
                expect(e instanceof IllegalInstanceError).toBe(true);
            }
        });
    });
});