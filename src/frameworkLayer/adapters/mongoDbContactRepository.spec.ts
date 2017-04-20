import 'jasmine';
import {MongoDbProvider} from "../providers/mongoDbProvider";
import {Collection, Db} from "mongodb";
import {instance, mock, when} from "ts-mockito";
import {ContactRepository} from "../../applicationLayer/ports/contactRepository";
import {MongoDbContactRepository} from "./mongoDbContactRepository";
import {Contact} from "../../domainLayer/entities/contact";
import {ContactValidator} from "../../domainLayer/validators/contactValidator";
import {ContactBuilder} from "../../domainLayer/builders/contactBuilder";

describe('MongoDbContactRepository', () => {
    let contact: Contact;
    let contactRepository: ContactRepository;
    let dbProvider: MongoDbProvider;
    let mockedMongoDb: Db;
    let collection: Collection;

    beforeEach(() => {
        mockedMongoDb = mock(Db);
        collection = <Collection>{
            insertOne: function(docs: Object) {}
        };
        dbProvider = () => {
           return Promise.resolve(instance(mockedMongoDb));
        };
        contactRepository = new MongoDbContactRepository(dbProvider);
        contact = new ContactBuilder(new ContactValidator())
            .id('123e4567-e89b-12d3-a456-426655440000')
            .firstName('firstname')
            .lastName('lastname')
            .email('email@example.com')
            .dateOfBirth(new Date(2000, 0, 1))
            .build();
    });

    describe('add()', () => {
        it('should insert contact at contacts-collection', (done) => {
            spyOn(collection, 'insertOne').and.returnValue(Promise.resolve());
            when(mockedMongoDb.collection('contacts')).thenReturn(collection);

            contactRepository.add(contact).then(() => {
                expect(collection.insertOne).toHaveBeenCalledWith(contact);
                done();
            }).catch(reason => {
                fail(reason);
                done();
            });
        });

        it('should reject promise if insert operations fails', (done) => {
            spyOn(collection, 'insertOne').and.returnValue(Promise.reject('fail'));
            when(mockedMongoDb.collection('contacts')).thenReturn(collection);

            contactRepository.add(contact).then(() => {
                fail();
                done();
            }).catch(reason => {
                expect(reason).toEqual('fail');
                done();
            });
        });

        it('should reject promise if dbProvider fails', (done) => {
            dbProvider = () => {
                return Promise.reject('fail');
            };
            contactRepository = new MongoDbContactRepository(dbProvider);

            contactRepository.add(contact).then(() => {
                fail();
                done();
            }).catch(reason => {
                expect(reason).toEqual('fail');
                done();
            });
        });
    });
});