import {inject, injectable} from 'inversify';
import {ContactRepository} from '../../applicationLayer/ports/ContactRepository';
import {Contact} from '../../domainLayer/entities/Contact';
import {MongoDbProvider} from '../providers/MongoDbProvider';

@injectable()
export class MongoDbContactRepository implements ContactRepository {

    constructor(@inject('MongoDb') private dbProvider: MongoDbProvider) {
    }

    add(contact: Contact): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.dbProvider()
                .then(db => {
                    db.collection('contacts').insertOne(contact)
                        .then(() => {
                            resolve();
                        })
                        .catch(reason => {
                            reject(reason);
                        });
                })
                .catch(reason => {
                    reject(reason);
                });
        });
    }

    getContact(id: string): Promise<Contact> {
        return undefined;
    }

    getAll(): Promise<Contact[]> {
        return undefined;
    }
}
