import * as util from "util";

export const IllegalInstanceError = function(message?: string) {
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
};
util.inherits(IllegalInstanceError, Error);