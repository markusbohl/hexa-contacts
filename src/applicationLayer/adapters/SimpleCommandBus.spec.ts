/// <reference path="../../../typings/globals/jasmine/index.d.ts" />

"use strict";

import { SimpleCommandBus } from './SimpleCommandBus';
import { HandlerRegistry } from '../handlers/HandlerRegistry';
import { Handler } from '../handlers/Handler';

describe("SimpleCommandBus", () => {

    let commandBus: SimpleCommandBus;
    let handlerRegistry: HandlerRegistry;
    let command: Object;
    let handler: Handler<Object>;

    beforeEach(() => {
        command = {};
        handler = {
            handle: function(command: Object) {}
        };
        handlerRegistry = new HandlerRegistry();
        commandBus = new SimpleCommandBus(handlerRegistry);
    });

    describe("execute()", () => {
        it("handles given command with appropriate handler", () => {
            // Arrange
            spyOn(handler, "handle");
            spyOn(handlerRegistry, "getHandler").and.returnValue(handler);

            // Act
            commandBus.execute(command);

            // Assert
            expect(handler.handle).toHaveBeenCalledWith(command);
        });

        it("throws exception if no appropriate handler is found for the given command", () => {
            // Arrange
            spyOn(handlerRegistry, "getHandler").and.throwError("No handler found for command.");

            // Act
            try {
                commandBus.execute(command);
                fail("execute() must throw an exception if no handler is found for given command.");
            } catch (error) {
                // Assert
                expect(error.message).toBe("No handler found for command.");
            }
        });
    });
});