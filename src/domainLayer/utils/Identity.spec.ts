"use strict";

import { Identity } from '../utils/Identity';

describe("Identity", () => {
    it("sets id via constructor", () => {
        let identity = new Identity(1);

        expect(identity.id).toBe(1);
    });

    it("allows null to be set as id", () => {
        let identity = new Identity(null);

        expect(identity.id).toBeNull();
    });
});