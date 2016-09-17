"use strict";

import { Handler } from './Handler';

export class HandlerRegistry {

    private registry = new Array();

    private findHandlerFor<T>(cmdType: { new (): T; }): Handler<T> {
        let handler: Handler<T> = null;

        this.registry.forEach(element => {
            if (element.cmdType.prototype == cmdType.prototype) {
                handler = element.handler;
            }
        });

        return handler;
    }

    register<T>(handler: Handler<T>, cmdType: { new (): T; }): void {
        if (this.findHandlerFor(cmdType)) {
            throw new Error("Handler for command already registered.");
        }

        this.registry.push({ cmdType: cmdType, handler: handler });
    }

    getHandler<T>(cmdType: { new (): T; }): Handler<T> {
        let handler: Handler<T> = this.findHandlerFor(cmdType);

        if (handler) {
            return handler;
        } else {
            throw new Error("No handler registered for given command.");
        }
    }
}