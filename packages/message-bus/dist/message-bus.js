"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageBus = void 0;
const types_1 = require("./types");
class MessageBus {
    subscribers;
    static nextId = 0;
    constructor() {
        this.subscribers = new types_1.Subscriber();
    }
    async dispatch(message) {
        const messageSuscribers = this.getSuscribers(message.getName());
        if (messageSuscribers === undefined) {
            throw new Error('Not suscriber found');
        }
        if (messageSuscribers.length === 1)
            return messageSuscribers[0].callable.handle(message);
        for (let i = 0; i <= messageSuscribers.length; i++) {
            await messageSuscribers[i].callable.handle(message);
        }
    }
    register(event, callback) {
        const id = this.getNextId();
        let suscriber = this.getSuscribers(event);
        if (!suscriber)
            this.subscribers.set(event, [{ id, callable: callback }]);
        else {
            suscriber.push({ id, callable: callback });
        }
        return {
            unregister: () => {
                const callables = this.getSuscribers(event).filter((callable) => callable.id !== id);
                this.subscribers.delete(event);
                if (callables.length > 0)
                    this.subscribers.set(event, callables);
            },
        };
    }
    getSuscribers(event) {
        return this.subscribers.get(event);
    }
    getNextId() {
        return MessageBus.nextId++;
    }
}
exports.MessageBus = MessageBus;
