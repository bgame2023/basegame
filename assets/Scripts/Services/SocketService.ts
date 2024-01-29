/*
npm install typescript @types/node socket.io-client @types/socket.io-client

*/
import { _decorator } from 'cc';
import * as io from 'socket.io-client';
import ConfigGame from '../Util/ConfigGame';


const { ccclass, property } = _decorator;

@ccclass('SocketService')
export default class GameSocket {
    private static instance: GameSocket;

    private socket: io.Socket = null;

    private constructor() {
        // Thay đổi địa chỉ của server Socket.IO
        this.socket = io.connect(ConfigGame.SOCKET.URL_DEV);
        this.setupSocketEvents();
    }

    public static getInstance(): GameSocket {
        if (!GameSocket.instance) {
          GameSocket.instance = new GameSocket();
        }
        return GameSocket.instance;
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


