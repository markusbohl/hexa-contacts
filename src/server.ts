/* tslint:disable */
import {InversifyRestifyServer} from 'inversify-restify-utils';
import * as restify from 'restify';
import {container} from './frameworkLayer/config/inversify.config';

const port: number = process.env.PORT || 3000;
const server = new InversifyRestifyServer(container);
server.setConfig(app => app.use(restify.bodyParser()))
    .build()
    .listen(port, () => {
            console.log(`server has started and is listening on port ${port}`);
        }
    );
