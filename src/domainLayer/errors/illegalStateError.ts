import * as util from "util";

export const IllegalStateError = function(message?: string) {
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
};
util.inherits(IllegalStateError, Error);