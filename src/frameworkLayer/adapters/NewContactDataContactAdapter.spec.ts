import {ContactBuilder} from '../../domainLayer/builders/ContactBuilder';
import {ContactValidator} from '../../domainLayer/validators/ContactValidator';
import {NewContactData} from '../restModels/NewContactData';
import {NewContactDataContactAdapter} from './NewContactDataContactAdapter';

describe('NewContactDataContactAdapter', () => {
    let adapter: NewContactDataContactAdapter;
    let contactBuilder: ContactBuilder;
    let contactData: NewContactData;

    beforeEach(() => {
        contactData = new NewContactData();
        contactData.firstName = 'Pete';
        contactData.lastName = 'Peterson';
        contactData.email = 'pete@peterson.com';
        contactData.dateOfBirth = '2000-12-31';

        contactBuilder = new ContactBuilder(new ContactValidator());
        adapter = new NewContactDataContactAdapter(contactBuilder);
    });

    describe('createContactFrom()', () => {
        it('should set firstName to contactBuilder', () => {

            const result = adapter.createContactFrom(contactData);

            expect(result.firstName).toBe('Pete');
        });

        it('should set lastName to contactBuilder', () => {

            const result = adapter.createContactFrom(contactData);

            expect(result.lastName).toBe('Peterson');
        });

        it('should set email to contactBuilder', () => {

            const result = adapter.createContactFrom(contactData);

            expect(result.email).toBe('pete@peterson.com');
        });

        it('should transform dateOfBirth to a Date-object and set it to contactBuilder', () => {
            const result = adapter.createContactFrom(contactData);

            expect(result.dateOfBirth.getFullYear()).toBe(2000);
            expect(result.dateOfBirth.getMonth()).toBe(11);
            expect(result.dateOfBirth.getDate()).toBe(31);
        });
    });
});
