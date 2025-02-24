// utils/EventBus.js
let EventBus = null;

class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    on(eventName, fn) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        this.events.get(eventName).push(fn);
    }

    off(eventName, fn) {
        if (!this.events.has(eventName)) {
            return;
        }
        const handlers = this.events.get(eventName);
        const index = handlers.indexOf(fn);
        if (index !== -1) {
            handlers.splice(index, 1);
        }
    }

    emit(eventName, data) {
        if (!this.events.has(eventName)) {
            return;
        }
        this.events.get(eventName).forEach(fn => fn(data));
    }
}

// Create the singleton instance only on the client side
if (typeof window !== 'undefined' && !EventBus) {
    EventBus = new EventEmitter();
}

export const getEventBus = () => {
    if (typeof window === 'undefined') {
        return {
            on: () => {},
            off: () => {},
            emit: () => {}
        };
    }
    return EventBus;
};

export default getEventBus();