import 'jasmine';
import {anything, instance, mock, verify, when} from 'ts-mockito';
import {Contact} from '../../domainLayer/entities/Contact';
import {IllegalStateError} from '../../domainLayer/errors/IllegalStateError';
import {NewContactData} from '../../frameworkLayer/restModels/NewContactData';
import {ContactAdapter} from '../ports/ContactAdapter';
import {ContactRepository} from '../ports/ContactRepository';
import {CreateContactUseCase} from './CreateContactUseCase';

describe('CreateContactUseCase', () => {
    let mockedRepository: ContactRepository;
    let mockedContactAdapter: ContactAdapter<NewContactData>;
    let useCase: CreateContactUseCase<NewContactData>;

    beforeEach(() => {
        mockedRepository = mock(TestContactRepository);
        mockedContactAdapter = mock(TestContactAdapter);
        useCase = new CreateContactUseCase(instance(mockedContactAdapter), instance(mockedRepository));
    });

    describe('useCases()', () => {
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

    getContact(id: string): Promise<Contact> {
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
