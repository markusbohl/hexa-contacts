"use strict";

import { CommandBus } from '../../domainLayer/ports/CommandBus';
import { HandlerProvider } from '../ports/HandlerProvider';

/**
 * SimpleCommandBus
 */
export class SimpleCommandBus implements CommandBus {

    constructor(private handlerProvider:HandlerProvider) {}

    execute(command: any): void {
        let handler = this.handlerProvider.getHandler(command);
        
        handler.handle(command);
    }
}