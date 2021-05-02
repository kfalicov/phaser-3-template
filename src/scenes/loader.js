import { Scene } from "phaser";
// import syntax for images. webpack will preserve the folder structure in the build folder.
// import spriteimg from "../../assets/spritesheet.png";

class Loader extends Scene {
  constructor() {
    super("Loader");
  }
  preload() {
    // load images
    // this.load.spritesheet("name", spriteimg, { frameWidth: 16, frameHeight: 16 });
  }
  create() {
    // animations and various instantiations can be created here

    // start the 'menu' scene after everything has loaded
    this.scene.manager.scenes[1].scene.start();
  }
}

export default Loader;
