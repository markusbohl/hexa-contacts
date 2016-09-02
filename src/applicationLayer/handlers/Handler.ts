"use strict";

export interface Handler<T> {
    handle(command: T): void;
}