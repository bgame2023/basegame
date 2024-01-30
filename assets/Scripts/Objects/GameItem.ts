import { SpriteFrame } from "cc";

// Game.ts
class GameItem {
    private _id: number;
    private name: string;
    private image: SpriteFrame;
    private isMiniGame: boolean;
    
    constructor(id: number, name: string, image: SpriteFrame, isMiniGame: boolean) {
        this._id = id;
        this.name = name;
        this.image = image;
        this.isMiniGame = isMiniGame;
      }

  }
  