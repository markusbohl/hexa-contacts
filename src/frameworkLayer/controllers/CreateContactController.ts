import * as HttpStatus from 'http-status-codes';
import {injectable} from 'inversify';
import {Controller, interfaces, Post} from 'inversify-restify-utils';
import * as restify from 'restify';
import {CreateContactUseCase} from '../../applicationLayer/createContact/CreateContactUseCase';
import {Contact} from '../../domainLayer/entities/Contact';
import {IllegalStateError} from '../../domainLayer/errors/IllegalStateError';
import {NewContactData} from '../restModels/NewContactData';
import {NewContactDataValidator} from '../validators/NewContactDataValidator';

@injectable()
@Controller('api/v1')
export class CreateContactController implements interfaces.Controller {

    constructor(private inputValidator: NewContactDataValidator, private useCase: CreateContactUseCase<NewContactData>) {
    }

    @Post('/contact')
    create(req: restify.Request, res: restify.Response) {
        const result = this.inputValidator.validate(req.body);

        if (result.isInvalid()) {
            res.send(HttpStatus.BAD_REQUEST, {
                code: 'InvalidContent',
                message: result.getFailures().map(f => f.message).join(', ')
            });
        } else {
            const newContactData = <NewContactData>req.body;
            this.useCase.createContact(newContactData)
                .then((contact: Contact) => {
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
