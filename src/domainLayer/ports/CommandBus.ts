"use strict";

/**
 * A CommandBus typically finds and uses a Handler for the given command.
 * The Handler is responsible for running the logic to fulfill the command.
 */
export interface CommandBus<T> {
    execute(command: T): void;
}