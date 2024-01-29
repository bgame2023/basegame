import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DataService')
export class DataService extends Component {
    private static instance: DataService = null;
    private data: any = {};

    private constructor() {
        super();
    }

    public static getInstance(): DataService {
        if (this.instance === null) {
            this.instance = new DataService();
        }
        return this.instance;
    }

    public SetData(key: string, value: any) {
        this.data[key] = value;
    }

    public GetData(key: string, defaultValue: any = null): any {
        if (key in this.data) {
            return this.data[key];
        }
        this.SetData(key, defaultValue);
        return defaultValue;
    }
}


