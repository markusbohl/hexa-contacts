"use strict";

export interface IContact {

    id(): number;
    firstName(): string;
    lastName(): string;
    dateOfBirth(): Date;

}