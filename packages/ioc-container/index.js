"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IocContainer = exports.inject = exports.injectable = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
Object.defineProperty(exports, "injectable", { enumerable: true, get: function () { return inversify_1.injectable; } });
Object.defineProperty(exports, "inject", { enumerable: true, get: function () { return inversify_1.inject; } });
class IocContainer extends inversify_1.Container {
    static instance = null;
    constructor() {
        super();
    }
    static getInstance() {
        if (IocContainer.instance === null) {
            IocContainer.instance = new IocContainer();
        }
        return IocContainer.instance;
    }
}
exports.IocContainer = IocContainer;
