/*
npm install typescript @types/node socket.io-client @types/socket.io-client

*/
import { _decorator } from 'cc';
import * as io from 'socket.io-client';
import ConfigGame from '../Util/ConfigGame';

const { ccclass, property } = _decorator;

@ccclass('SocketService')
export default class GameSocket {
    private socket: io.Socket = null;

    constructor() {
        // Thay đổi địa chỉ của server Socket.IO
        this.socket = io.connect(ConfigGame.SOCKET.URL_DEV);
        this.setupSocketEvents();
    }

    public getSocket(): io.Socket {
        return this.socket;
    }

    private setupSocketEvents(): void {
        this.socket.on('connect', () => {
            console.log('Connected to Socket.IO server');
        });

        this.socket.on('disconnect', () => {
            console.log('Disconnected from Socket.IO server');
        });
    }
}
