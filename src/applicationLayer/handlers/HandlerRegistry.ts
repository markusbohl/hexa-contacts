"use strict";

import { Handler } from './Handler';

export class HandlerRegistry {

    private registry = new Array();

    register<T>(handler: Handler<T>, cmdType: { new (): T; }): void {
        if (this.getHandler(cmdType)) {
            throw new Error(`Handler for command already registered.`);
        }
        this.registry.push({ cmdType: cmdType, handler: handler });
    }

    getHandler<T>(cmdType: { new (): T; }): Handler<T> {
        let handler: Handler<T> = null;

        this.registry.forEach(element => {
            if (element.cmdType.prototype == cmdType.prototype) {
                handler = element.handler;
            }
        });

        return handler;
    }
}