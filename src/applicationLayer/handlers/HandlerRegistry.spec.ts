/// <reference path="../../../typings/globals/jasmine/index.d.ts" />

"use strict";

import { HandlerRegistry } from './HandlerRegistry';
import { Handler } from './Handler';
import { CreateContactCommand } from '../../domainLayer/useCases/CreateContactCommand';

describe("HandlerRegistry", () => {

    let registry: HandlerRegistry;
    let handler: Handler<CreateContactCommand> = {
        handle(command: CreateContactCommand): void {
            // do nothing
        }
    }

    beforeEach(() => {
        registry = new HandlerRegistry();
    });

    describe("register()", () => {
        it("register handler for given command", () => {
            // Arrange
            registry.register(handler, CreateContactCommand);

            // Act
            let result = registry.getHandler(CreateContactCommand);

            // Assert
            expect(result).toBe(handler);
        });

        it("throw exception if there is already a handler registered for the given command-type", () => {
            // Arrange
            registry.register(handler, CreateContactCommand);

            // Act
            try {
                registry.register(handler, CreateContactCommand);
                fail("Redundant handler-registration not allowed");
            } catch (error) {
                // Assert
                expect(error.message).toBe("Handler for command already registered.");
            }
        });
    });

    describe("getHandler()", () => {
        it("throws exception if no handler is registered for the given command", () => {
            // Act
            try {
                registry.getHandler(CreateContactCommand);
            } catch (error) {
                // Assert
                expect(error.message).toBe("No handler registered for given command.");
            }
        });
    });
});