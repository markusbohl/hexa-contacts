import {Db} from 'mongodb';

export type MongoDbProvider = () => Promise<Db>;
