import { _decorator, Component, director, loader, Node, ProgressBar } from 'cc';
import Constants from '../Util/Constants';
import Services from '../Services/Services';
import AudioService from '../Services/AudioService';
import { DataService } from '../Services/DataService';
import SocketService from '../Services/SocketService';
const { ccclass, property } = _decorator;

@ccclass('EntryController')
export class EntryController extends Component {

    @property(Node)
    entryNode: Node = null;

    @property(ProgressBar)
    progressBar: ProgressBar = null;

    protected onLoad(): void {
        /*********ADD SERVICE ******/
        Services.getInstance().addService(new AudioService());
        Services.getInstance().addService(new SocketService());
        Services.getInstance().addService(new DataService());


    }

    start() {
         /*********LOADING ASSET ******/ 
        this.preloadSceneAndLoadAssets();
    }

    preloadSceneAndLoadAssets() {
        this.progressBar.totalLength = 1;
        let preloadedSceneCount = 0;
        director.preloadScene(Constants.SCENE.MAINSCENE, (completedCount, totalCount) => {
            this.progressBar.progress = completedCount / totalCount;
        }, (error) => {
            if (error) {
                console.error("Failed to preload scene:", error);
                return;
            }
            preloadedSceneCount++;
            if (preloadedSceneCount === 1) {
                this.loadAssetsOfPreloadedScene(Constants.SCENE.MAINSCENE);
            }
        });
    }

    loadAssetsOfPreloadedScene(sceneName: string) {
        this.progressBar.totalLength = 1;
        let loadedAssetsCount = 0;
        loader.loadResDir(sceneName, (err, assets) => {
            if (err) {
                console.error("Failed to load assets of the preloaded scene:", err);
                return;
            }
            loadedAssetsCount++;
            this.progressBar.progress = loadedAssetsCount;

            if (loadedAssetsCount === 1) {
                console.log("All assets of the preloaded scene loaded successfully!");
            }
        });
    }

}


