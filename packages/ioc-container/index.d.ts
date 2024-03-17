import 'reflect-metadata';
import { Container } from 'inversify';
declare class IocContainer extends Container {
    private static instance;
    constructor();
    static getInstance(): IocContainer;
}
export * from 'inversify';
export { IocContainer };
//# sourceMappingURL=index.d.ts.map