import {inject, injectable} from 'inversify';
import {ContactRepository} from '../../applicationLayer/ports/ContactRepository';
import {Contact} from '../../domainLayer/entities/Contact';
import {MongoDbProvider} from '../providers/MongoDbProvider';

@injectable()
export class MongoDbContactRepository implements ContactRepository {

    constructor(@inject('MongoDb') private dbProvider: MongoDbProvider,
                @inject('ContactCollection') private collectionName: string) {
    }

    add(contact: Contact): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.dbProvider()
                .then(db => {
                    db.collection(this.collectionName).insertOne(contact)
                        .then(() => resolve())
                        .catch(reason => reject(reason));
                })
                .catch(reason => reject(reason));
        });
    }

    update(contact: Contact): Promise<void> {
        return undefined;
    }

    deleteContact(id: string): Promise<void> {
        return undefined;
    }

    getContact(id: string): Promise<Contact> {
        return undefined;
    }

    getAll(): Promise<Contact[]> {
        return new Promise<Contact[]>((resolve, reject) => {
            this.dbProvider()
                .then(db => {
                    db.collection(this.collectionName)
                        .find<Contact>().toArray()
                        .then(contacts => resolve(contacts))
                        .catch(reason => reject(reason));
                })
                .catch(reason => {
                    reject(reason);
                });
        });
    }
}
