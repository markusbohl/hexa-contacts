import "reflect-metadata";
import {Container, decorate, injectable} from "inversify";
import {ContactBuilder} from "../../domainLayer/builders/contactBuilder";
import {ContactValidator} from "../../domainLayer/validators/contactValidator";
import {ContactRepository} from "../../applicationLayer/ports/contactRepository";
import {MongoDbContactRepository} from "../adapters/mongoDbContactRepository";
import {Db, MongoClient} from "mongodb";
import {MongoDbProvider} from "../providers/mongoDbProvider";
import {CreateContactUseCase} from "../../applicationLayer/createContact/createContactUseCase";
import {interfaces, TYPE} from "inversify-restify-utils";
import {CreateContactController} from "../controllers/createContactController";
import {AbstractValidator} from "fluent-ts-validator";

decorate(injectable(), AbstractValidator);

export const container = new Container();

container.bind<interfaces.Controller>(TYPE.Controller).to(CreateContactController);
container.bind<ContactBuilder>(ContactBuilder).to(ContactBuilder);
container.bind<ContactValidator>(ContactValidator).to(ContactValidator);
container.bind<CreateContactUseCase>(CreateContactUseCase).to(CreateContactUseCase);
container.bind<ContactRepository>('ContactRepository').to(MongoDbContactRepository);
container.bind<MongoDbProvider>('MongoDb').toProvider<Db>((context) => {
    return () => {
        const url = `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOSTNAME}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`;
        console.log(url);
        return MongoClient.connect(url);
    }
});