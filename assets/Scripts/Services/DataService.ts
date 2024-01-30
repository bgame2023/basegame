import { _decorator, Component } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('DataService')
export class DataService extends Component {
    private data: any = {};

    constructor() {
        super();
    }

    public setData(key: string, value: any) {
        this.data[key] = value;
    }

    public getData(key: string, defaultValue: any = null): any {
        if (key in this.data) {
            return this.data[key];
        }
        this.setData(key, defaultValue);
        return defaultValue;
    }
}
