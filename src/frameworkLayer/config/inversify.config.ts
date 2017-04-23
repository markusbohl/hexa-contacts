import {AbstractValidator} from 'fluent-ts-validator';
import {Container, decorate, injectable} from 'inversify';
import {interfaces, TYPE} from 'inversify-restify-utils';
import {Db, MongoClient} from 'mongodb';
import 'reflect-metadata';
import {ContactAdapter} from '../../applicationLayer/ports/ContactAdapter';
import {ContactRepository} from '../../applicationLayer/ports/ContactRepository';
import {CreateContactUseCase} from '../../applicationLayer/useCases/CreateContactUseCase';
import {GetAllContactsUseCase} from '../../applicationLayer/useCases/GetAllContactsUseCase';
import {ContactBuilder} from '../../domainLayer/builders/ContactBuilder';
import {ContactValidator} from '../../domainLayer/validators/ContactValidator';
import {MongoDbContactRepository} from '../adapters/MongoDbContactRepository';
import {NewContactDataContactAdapter} from '../adapters/NewContactDataContactAdapter';
import {ContactsController} from '../controllers/ContactsController';
import {MongoDbProvider} from '../providers/MongoDbProvider';
import {NewContactData} from '../restModels/NewContactData';
import {NewContactDataValidator} from '../validators/NewContactDataValidator';

decorate(injectable(), AbstractValidator);
decorate(injectable(), ContactAdapter);

// tslint:disable-next-line
export const container = new Container();

container.bind<interfaces.Controller>(TYPE.Controller).to(ContactsController);
container.bind<ContactBuilder>(ContactBuilder).to(ContactBuilder);
container.bind<ContactValidator>(ContactValidator).to(ContactValidator);
container.bind<CreateContactUseCase<NewContactData>>(CreateContactUseCase).to(CreateContactUseCase);
container.bind<GetAllContactsUseCase>(GetAllContactsUseCase).to(GetAllContactsUseCase);
container.bind<NewContactDataValidator>(NewContactDataValidator).to(NewContactDataValidator);
container.bind<NewContactDataContactAdapter>(NewContactDataContactAdapter).to(NewContactDataContactAdapter);
container.bind<ContactRepository>('ContactRepository').to(MongoDbContactRepository);
container.bind<ContactAdapter<NewContactData>>('ContactAdapter').to(NewContactDataContactAdapter);
container.bind<MongoDbProvider>('MongoDb').toProvider<Db>(() => {
    return () => {
        const url = [
            'mongodb://',
            `${process.env.MONGO_DB_USER}:`,
            `${process.env.MONGO_DB_PASSWORD}@`,
            `${process.env.MONGO_DB_HOSTNAME}:`,
            `${process.env.MONGO_DB_PORT}/`,
            `${process.env.MONGO_DB_NAME}`
        ].join('');
        return MongoClient.connect(url);
    };
});
container.bind<string>('ContactCollection').toConstantValue('contacts');
