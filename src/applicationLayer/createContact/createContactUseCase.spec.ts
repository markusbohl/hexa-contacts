import 'jasmine';
import {CreateContactUseCase} from "./createContactUseCase";
import {ContactRepository} from "../ports/contactRepository";
import {Contact} from "../../domainLayer/entities/contact";
import {anything, instance, mock, verify, when} from "ts-mockito";
import {CreateContactData} from "./createContactData";
import {ContactBuilder} from "../../domainLayer/builders/contactBuilder";
import {IllegalInstanceError} from "../../domainLayer/errors/illegalInstanceError";

describe('CreateContactUseCase', () => {
    let mockedContactBuilder: ContactBuilder;
    let mockedRepository: ContactRepository;
    let useCase: CreateContactUseCase;

    beforeEach(() => {
        mockedRepository = mock(TestContactRepository);
        mockedContactBuilder = mock(ContactBuilder);
        when(mockedContactBuilder.firstName(anything())).thenReturn(instance(mockedContactBuilder));
        when(mockedContactBuilder.lastName(anything())).thenReturn(instance(mockedContactBuilder));
        when(mockedContactBuilder.email(anything())).thenReturn(instance(mockedContactBuilder));
        when(mockedContactBuilder.dateOfBirth(anything())).thenReturn(instance(mockedContactBuilder));
        useCase = new CreateContactUseCase(instance(mockedContactBuilder), instance(mockedRepository));
    });

    describe('createContact()', () => {
        it('should reject the returned promise if contact-builder throws an error', async (done) => {
            const contactData = new CreateContactData();
            const error = new IllegalInstanceError();
            when(mockedContactBuilder.build()).throwsError(error);

            try {
                await useCase.createContact(contactData);
            } catch (err) {
                expect(err).toBe(error);
                done();
            }
        });

        it('should not invoke the contact repository if contact-builder throws an error', (done) => {
            const contactData = new CreateContactData();
            const error = new IllegalInstanceError();
            when(mockedContactBuilder.build()).throwsError(error);

            const promise: Promise<Contact> = useCase.createContact(contactData);

            promise.catch(() => {
                verify(mockedRepository.add(anything())).never();
                done();
            });
        });

        it('should invoke ContactRepository with newly created contact', (done) => {
            const contactData = new CreateContactData();
            const contact = new Contact();
            when(mockedContactBuilder.build()).thenReturn(contact);
            when(mockedRepository.add(contact)).thenReturn(Promise.resolve());

            useCase.createContact(contactData).then(c => {
                expect(c).toEqual(contact);
                done();
            });
        });

        it('should build contact with every property of contact data', (done) => {
            const contactData = new CreateContactData();
            contactData.firstName = 'firstName';
            contactData.lastName = 'lastName';
            contactData.email = 'foo@bar.com';
            contactData.dateOfBirth = new Date(2000, 0, 1);
            const contact = new Contact();
            when(mockedContactBuilder.build()).thenReturn(contact);
            when(mockedRepository.add(contact)).thenReturn(Promise.resolve());

            useCase.createContact(contactData).then(contact => {
                verify(mockedContactBuilder.firstName(contactData.firstName)).called();
                verify(mockedContactBuilder.lastName(contactData.lastName)).called();
                verify(mockedContactBuilder.email(contactData.email)).called();
                verify(mockedContactBuilder.dateOfBirth(contactData.dateOfBirth)).called();
                done();
            });
        });
    });
});

class TestContactRepository implements ContactRepository {
    add(contact: Contact): Promise<void> {
        return null;
    }

    get(id: string): Promise<Contact> {
        return null;
    }

    getAll(): Promise<Contact[]> {
        return null;
    }
}