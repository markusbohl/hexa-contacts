import "reflect-metadata";
import {Container} from 'inversify';
import {ContactBuilder} from "../../domainLayer/builders/contactBuilder";
import {ContactValidator} from "../../domainLayer/validators/contactValidator";
import {ContactRepository} from "../../applicationLayer/ports/contactRepository";
import {MongoDbContactRepository} from "../adapters/mongoDbContactRepository";
import {Db, MongoClient} from "mongodb";
import {MongoDbProvider} from "../providers/mongoDbProvider";

export const container = new Container();

container.bind<ContactBuilder>(ContactBuilder).to(ContactBuilder);
container.bind<ContactValidator>(ContactValidator).to(ContactValidator);
container.bind<ContactRepository>('ContactRepository').to(MongoDbContactRepository);
container.bind<MongoDbProvider>('MongoDb').toProvider<Db>((context) => {
    return () => {
        return MongoClient.connect(`mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOSTNAME}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`);
    }
});