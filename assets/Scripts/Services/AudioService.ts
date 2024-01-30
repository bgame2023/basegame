import { _decorator, AudioSource, AudioClip } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('AudioService')
export default class AudioService {
  @property({ type: AudioSource })
  backgroundMusic: AudioSource = null;

  @property({ type: AudioClip })
  clickSound: AudioClip = null;

  constructor() {}

  public playBackgroundMusic(): void {
    if (this.backgroundMusic && this.backgroundMusic.clip) {
      this.backgroundMusic.play();
    }
  }

  public stopBackgroundMusic(): void {
    if (this.backgroundMusic && this.backgroundMusic.clip) {
      this.backgroundMusic.stop();
    }
  }

  public playClickSound(): void {
    if (this.clickSound) {
      const audioSource = this.backgroundMusic.getComponent(AudioSource);
      if (audioSource) {
        audioSource.playOneShot(this.clickSound);
      }
    }
  }
}
