"use strict";

import { Identity } from "./Identity";

describe("Identity", () => {
    it("sets id via constructor", () => {
        let identity = new Identity("id");

        expect(identity.id).toBe("id");
    });

    it("allows null to be set as id", () => {
        let identity = new Identity(null);

        expect(identity.id).toBeNull();
    });
});