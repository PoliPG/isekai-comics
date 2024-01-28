import 'reflect-metadata';
import { Container, injectable, inject } from 'inversify';
declare class IocContainer extends Container {
    private static instance;
    private constructor();
    static getInstance(): IocContainer;
}
export { injectable, inject, IocContainer };
//# sourceMappingURL=index.d.ts.map