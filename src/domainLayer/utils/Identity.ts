"use strict";

export class Identity {
    private _id: Number;

    constructor(id: Number) {
        this._id = id;
    }

    get id(): Number {
        return this._id;
    }
}