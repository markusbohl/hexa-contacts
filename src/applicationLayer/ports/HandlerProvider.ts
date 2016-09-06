"use strict";

import { Handler } from '../handlers/Handler';

export interface HandlerProvider {

    getHandler<T>(command: T): Handler<T>;
}