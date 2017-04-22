import {NewContactDataValidator} from "./newContactDataValidator";
import {NewContactData} from "../restModels/newContactData";

describe('NewContactDataValidator', () => {
    let validator: NewContactDataValidator;
    let data: any;

    beforeEach(() => {
        validator = new NewContactDataValidator();
        data = {};
    });

    describe('validate()', () => {
        it('should accept input as valid if all values are undefined', () => {
            const result = validator.validate(data);

            expect(result.isValid()).toBe(true);
        });

        it('should accept input as valid if all values are null', () => {
            data.firstName = null;
            data.lastName = null;
            data.email = null;
            data.dateOfBirth = null;

            const result = validator.validate(data);

            expect(result.isValid()).toBe(true);
        });

        it('should accept input as valid if all values are empty', () => {
            data.firstName = '';
            data.lastName = '';
            data.email = '';
            data.dateOfBirth = '';

            const result = validator.validate(data);

            expect(result.isValid()).toBe(true);
        });

        it('should accept input as valid if all values are valid strings', () => {
            data.firstName = 'Pete';
            data.lastName = 'Peterson';
            data.email = 'pete@peterson.com';
            data.dateOfBirth = '2000-12-31';

            const result = validator.validate(data);

            expect(result.isValid()).toBe(true);
        });

        it('should reject input as invalid if firstname is not a string', () => {
            data.firstName = 0;

            const result = validator.validate(data);

            expect(result.isValid()).toBe(false);
        });

        it('should reject input as invalid if lastname is not a string', () => {
            data.lastName = 0;

            const result = validator.validate(data);

            expect(result.isValid()).toBe(false);
        });

        it('should accept input as valid if email-string does represent a valid email-address', () => {
            data.email = 'valid-address@email.com';

            const result = validator.validate(data);

            expect(result.isValid()).toBe(true);
        });

        it('should reject input as invalid if email-string does not represent a valid email-address', () => {
            data.email = 'not_an_email';

            const result = validator.validate(data);

            expect(result.isValid()).toBe(false);
        });

        it('should reject input as invalid if email-type is not a string', () => {
            data.email = 0;

            const result = validator.validate(data);

            expect(result.isValid()).toBe(false);
        });

        it('should accept input as valid if dateOfBirth-string has YYYY-MM-DD pattern', () => {
            data.dateOfBirth = '2000-12-31';

            const result = validator.validate(data);

            expect(result.isValid()).toBe(true);
        });

        it('should reject input as invalid if dateOfBirth-string has no YYYY-MM-DD pattern', () => {
            data.dateOfBirth = '20001231';

            const result = validator.validate(data);

            expect(result.isValid()).toBe(false);
        });

        it('should reject input as invalid if dateOfBirth-type is not a string', () => {
            data.dateOfBirth = 0;

            const result = validator.validate(data);

            expect(result.isValid()).toBe(false);
        });
    });
});