"use strict";

export interface Notifier<T> {
    notify(message: T): void;
}