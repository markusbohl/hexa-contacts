import {AbstractValidator} from "fluent-ts-validator";
import {injectable} from "inversify";

@injectable()
export class NewContactDataValidator extends AbstractValidator<any> {

    constructor() {
        super();

        this.validateIfAny(data => data.firstName)
            .isString()
            .when(data => data.firstName != null)
            .withFailureMessage('firstName must be of type string');

        this.validateIfAny(data => data.lastName)
            .isString()
            .when(data => data.lastName != null)
            .withFailureMessage('lastName must be of type string');

        this.validateIfAny(data => data.email)
            .isString()
            .isEmail()
            .when(data => data.email != null && data.email !== '')
            .withFailureMessage('email must be a valid email-address');

        this.validateIfAny(data => data.dateOfBirth)
            .isString()
            .matches(/\d{4}-\d{2}-\d{2}/)
            .when(data => data.dateOfBirth != null && data.dateOfBirth !== '')
            .withFailureMessage(`dateOfBirth-format must be 'YYYY-MM-DD'`);
    }
}