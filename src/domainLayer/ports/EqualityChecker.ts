"use strict";

export interface EqualityChecker {

    isEqual(value: any, other: any): boolean;
}