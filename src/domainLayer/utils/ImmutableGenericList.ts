"use strict";

import { EqualityChecker } from '../ports/EqualityChecker';

export class ImmutableGenericList<T> {

    private _list: Array<T>;
    private _equalityChecker: EqualityChecker;

    constructor(equalityChecker: EqualityChecker) {
        this._list = new Array<T>();
        this._equalityChecker = equalityChecker;
    }

    get length(): number {
        return this._list.length;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    add(value: T): void {
        this._list.push(value);
    }

    remove(value: T): void {
        this._list = this._list.filter((element: T) => {
            return !this._equalityChecker.isEqual(value, element);
        });
    }

    values(): T[] {
        return this._list.slice(0);
    }
}