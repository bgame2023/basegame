export default class Services {
    private static instance: Services;
    private services: Map<string, any> = new Map();

    private constructor() {}

    public static getInstance(): Services {
        if (!Services.instance) {
            Services.instance = new Services();
        }
        return Services.instance;
    }

    public addService<T>(serviceInstance: T): void {
        const serviceName = serviceInstance.constructor.name;
        this.services.set(serviceName, serviceInstance);
    }

    public getService<T>(serviceType: new (...args: any[]) => T): T | null {
        const serviceName = serviceType.name;
        if (this.services.has(serviceName)) {
            return this.services.get(serviceName) as T;
        }
        return null;
    }
}
