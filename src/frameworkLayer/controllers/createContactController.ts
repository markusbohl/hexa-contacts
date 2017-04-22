import * as restify from "restify";
import * as HttpStatus from "http-status-codes";
import {injectable} from "inversify";
import {Controller, interfaces, Post} from "inversify-restify-utils";
import {CreateContactUseCase} from "../../applicationLayer/createContact/createContactUseCase";
import {IllegalStateError} from "../../domainLayer/errors/illegalStateError";
import {NewContactDataValidator} from "../validators/newContactDataValidator";
import {NewContactData} from "../restModels/newContactData";


@injectable()
@Controller('api/v1')
export class CreateContactController implements interfaces.Controller {

    constructor(private inputValidator: NewContactDataValidator, private useCase: CreateContactUseCase<NewContactData>) {
    }

    @Post('/contact')
    public create(req: restify.Request, res: restify.Response) {
        const result = this.inputValidator.validate(req.body);

        if (result.isInvalid()) {
            res.send(HttpStatus.BAD_REQUEST, {
                code: "InvalidContent",
                message: result.getFailures().map(f => f.message).join(', ')
            });
        } else {
            const newContactData = req.body as NewContactData;
            this.useCase.createContact(newContactData)
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
}