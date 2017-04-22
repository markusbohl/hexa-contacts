import * as restify from "restify";
import {injectable} from "inversify";
import {Controller, interfaces, Post} from "inversify-restify-utils";
import {CreateContactUseCase} from "../../applicationLayer/createContact/createContactUseCase";
import {IllegalStateError} from "../../domainLayer/errors/illegalStateError";
import * as HttpStatus from "http-status-codes";


@injectable()
@Controller('api/v1')
export class CreateContactController implements interfaces.Controller {

    constructor(private useCase: CreateContactUseCase) {
    }

    @Post('/contact')
    public create(req: restify.Request, res: restify.Response) {
        this.useCase.createContact(req.body)
            .then(contact => {
                res.send(HttpStatus.CREATED, contact);
            })
            .catch(reason => {
                if (reason instanceof IllegalStateError) {
                    res.send(HttpStatus.BAD_REQUEST, reason.message);
                } else {
                    res.send(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            });
    }
}