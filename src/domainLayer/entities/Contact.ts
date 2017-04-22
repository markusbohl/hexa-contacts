import {Identifiable} from './Identifiable';

export class Contact extends Identifiable {

    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;

    constructor(id: string) {
        super(id);
    }
}
