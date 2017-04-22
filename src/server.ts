import * as restify from "restify";
import {InversifyRestifyServer} from "inversify-restify-utils";
import {container} from "./frameworkLayer/config/inversify.config";

const port = process.env.PORT | 3000;
const server = new InversifyRestifyServer(container);
server.setConfig(app => app.use(restify.bodyParser()))
    .build()
    .listen(port, () => console.log(`server has started and is listening on port ${port}`));