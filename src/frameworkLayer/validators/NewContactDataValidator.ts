/* tslint:disable */
import {AbstractValidator} from 'fluent-ts-validator';
import {injectable} from 'inversify';

@injectable()
export class NewContactDataValidator extends AbstractValidator<any> {
    constructor() {
        super();

        this.validateIfAny(data => data.firstName)
            .isString()
            .whenNotNull()
            .withFailureMessage('firstName must be of type string');

        this.validateIfAny(data => data.lastName)
            .isString()
            .whenNotNull()
            .withFailureMessage('lastName must be of type string');

        this.validateIfAny(data => data.email)
            .isString()
            .isEmail()
            .whenNotNull()
            .when(data => data.email !== '')
            .withFailureMessage('email must be a valid email-address');

        this.validateIfAny(data => data.dateOfBirth)
            .isString()
            .matches(/\d{4}-\d{2}-\d{2}/)
            .whenNotNull()
            .when(data => data.dateOfBirth !== '')
            .withFailureMessage('dateOfBirth-format must be YYYY-MM-DD');
    }
}
