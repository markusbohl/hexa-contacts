import 'jasmine';
import {CreateContactUseCase} from "./createContactUseCase";
import {ContactRepository} from "../ports/contactRepository";
import {Contact} from "../../domainLayer/entities/contact";
import {anything, instance, mock, verify, when} from "ts-mockito";
import {NewContactData} from "../../frameworkLayer/restModels/newContactData";
import {ContactBuilder} from "../../domainLayer/builders/contactBuilder";
import {IllegalStateError} from "../../domainLayer/errors/illegalStateError";
import {ContactAdapter} from "../ports/contactAdapter";

describe('CreateContactUseCase', () => {
    let mockedRepository: ContactRepository;
    let mockedContactAdapter: ContactAdapter<NewContactData>;
    let useCase: CreateContactUseCase<NewContactData>;

    beforeEach(() => {
        mockedRepository = mock(TestContactRepository);
        mockedContactAdapter = mock(TestContactAdapter);
        useCase = new CreateContactUseCase(instance(mockedContactAdapter), instance(mockedRepository));
    });

    describe('createContact()', () => {
        it('should reject the returned promise if contact-builder throws an error', async (done) => {
            const contactData = new NewContactData();
            const error = new IllegalStateError();
            when(mockedContactAdapter.createContactFrom(contactData)).throwsError(error);

            try {
                await useCase.createContact(contactData);
            } catch (err) {
                expect(err).toBe(error);
                done();
            }
        });

        it('should not invoke the contact repository if contact-builder throws an error', (done) => {
            const contactData = new NewContactData();
            const error = new IllegalStateError();
            when(mockedContactAdapter.createContactFrom(contactData)).throwsError(error);

            const promise: Promise<Contact> = useCase.createContact(contactData);

            promise.catch(() => {
                verify(mockedRepository.add(anything())).never();
                done();
            });
        });

        it('should invoke ContactRepository with newly created contact', (done) => {
            const contactData = new NewContactData();
            const contact = new Contact('1');
            when(mockedContactAdapter.createContactFrom(contactData)).thenReturn(contact);
            when(mockedRepository.add(contact)).thenReturn(Promise.resolve());

            useCase.createContact(contactData).then(c => {
                expect(c).toEqual(contact);
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

class TestContactAdapter extends ContactAdapter<NewContactData> {

    createContactFrom(input: NewContactData): Contact {
        throw new Error('Method not implemented.');
    }
}