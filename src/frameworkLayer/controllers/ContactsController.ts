import * as HttpStatus from 'http-status-codes';
import {injectable} from 'inversify';
import {Controller, Get, interfaces, Post} from 'inversify-restify-utils';
import * as restify from 'restify';
import {CreateContactUseCase} from '../../applicationLayer/useCases/CreateContactUseCase';
import {GetAllContactsUseCase} from '../../applicationLayer/useCases/GetAllContactsUseCase';
import {Contact} from '../../domainLayer/entities/Contact';
import {IllegalStateError} from '../../domainLayer/errors/IllegalStateError';
import {NewContactData} from '../restModels/NewContactData';
import {NewContactDataValidator} from '../validators/NewContactDataValidator';

@injectable()
@Controller('api/v1')
export class ContactsController implements interfaces.Controller {

    constructor(private inputValidator: NewContactDataValidator,
                private createContactUseCase: CreateContactUseCase<NewContactData>,
                private allContactsUseCase: GetAllContactsUseCase) {
    }

    @Get('/contacts')
    getAllContacts(req: restify.Request, res: restify.Response) {
        this.allContactsUseCase.getAllContacts()
            .then(contacts => res.send(HttpStatus.OK, contacts))
            .catch(() => res.send(HttpStatus.INTERNAL_SERVER_ERROR));
    }

    @Post('/contacts')
    create(req: restify.Request, res: restify.Response) {
        const result = this.inputValidator.validate(req.body);

        if (result.isInvalid()) {
            res.send(HttpStatus.BAD_REQUEST, {
                code: 'InvalidContent',
                message: result.getFailures().map(f => f.message).join(', ')
            });
        } else {
            const newContactData = <NewContactData>req.body;
            this.createContactUseCase.createContact(newContactData)
                .then(contact => res.send(HttpStatus.CREATED, contact))
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
