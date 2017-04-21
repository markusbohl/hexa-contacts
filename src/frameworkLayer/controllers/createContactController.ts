import * as restify from "restify";
import {injectable} from "inversify";
import {Controller, interfaces, Post} from "inversify-restify-utils";
import {CreateContactUseCase} from "../../applicationLayer/createContact/createContactUseCase";

@injectable()
@Controller('api/v1')
export class CreateContactController implements interfaces.Controller {

    constructor(private useCase: CreateContactUseCase) {
    }

    @Post('/contact')
    public create(req: restify.Request, res: restify.Response): void {
        console.log(req.body);
        this.useCase.createContact(req.body).then((contact) => res.send(201, contact)).catch(reason => res.send(500));
    }
}