/*
npm install typescript @types/node socket.io-client @types/socket.io-client
*/
import * as io from 'socket.io-client';
import ConfigGame from '../Util/ConfigGame';


const { ccclass, property } = _decorator;

@ccclass('SocketService')
export default class GameSocket {
    private static instance: GameSocket;

    private socket: SocketIOClient.Socket;

    private constructor() {
        // Thay đổi địa chỉ của server Socket.IO
        this.socket = io(ConfigGame.SOCKET.URL_DEV);
        this.setupSocketEvents();
    }

    public static getInstance(): GameSocket {
        if (!GameSocket.instance) {
          GameSocket.instance = new GameSocket();
        }
        return GameSocket.instance;
      }

  private setupSocketEvents(): void {
    // Thêm các sự kiện và xử lý sự kiện tại đây
  }
  public getSocket(): SocketIOClient.Socket {
    return this.socket;
  }

}


