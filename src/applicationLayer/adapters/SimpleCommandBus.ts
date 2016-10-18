"use strict";

import { CommandBus } from "../../domainLayer/ports/CommandBus";
import { HandlerRegistry } from "../handlers/HandlerRegistry";

/**
 * SimpleCommandBus
 */
export class SimpleCommandBus implements CommandBus {

    constructor(private handlerRegistry: HandlerRegistry) {}

    execute(command: any): void {
        let handler = this.handlerRegistry.getHandler(command);

        handler.handle(command);
    }
}