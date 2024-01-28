"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IocContainer = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
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
__exportStar(require("inversify"), exports);
