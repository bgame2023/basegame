/*
npm install typescript @types/node socket.io-client @types/socket.io-client

*/
import { _decorator } from 'cc';
// import * as io from 'socket.io-client';
import ConfigGame from '../Util/ConfigGame';

const { ccclass, property } = _decorator;

@ccclass('SocketService')
export default class GameSocket {
    // private socket: io.Socket = null;

    constructor() {
        // this.socket = io.connect(ConfigGame.SOCKET.URL_DEV);
        // this.setupSocketEvents();
    }

    // public getSocket(): io.Socket {
    //     return this.socket;
    // }

    // private setupSocketEvents(): void {
    //     this.socket.on('connect', () => {
    //         console.log('Connected to Socket.IO server');

    //         // Gửi dữ liệu khi kết nối thành công
    //         this.sendMessageToServer('Hello Server!');
    //     });

    //     this.socket.on('disconnect', () => {
    //         console.log('Disconnected from Socket.IO server');
    //     });

    //     // Nhận dữ liệu từ server khi có sự kiện 'serverMessage'
    //     this.socket.on('serverMessage', (data) => {
    //         console.log('Received message from server:', data);
    //     });
    // }

    // // Hàm gửi dữ liệu đến server
    // public sendMessageToServer(message: string): void {
    //     this.emitToServer('clientMessage', { message });
    // }

    // // Hàm nhận dữ liệu từ server
    // public onServerMessage(callback: (data: any) => void): void {
    //     this.onEventFromServer('serverMessage', callback);
    // }

    // // Hàm gửi dữ liệu đến server với sự kiện cụ thể
    // public emitToServer(eventName: string, data: any): void {
    //     this.socket.emit(eventName, data);
    // }

    // // Hàm nhận dữ liệu từ server với sự kiện cụ thể
    // public onEventFromServer(eventName: string, callback: (data: any) => void): void {
    //     this.socket.on(eventName, callback);
    // }

    // // Hàm ngừng lắng nghe một sự kiện từ server
    // public offEventFromServer(eventName: string, callback: (data: any) => void): void {
    //     this.socket.off(eventName, callback);
    // }
}
