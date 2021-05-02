import { Game, WEBGL, Scale } from "phaser";

import { Loader, Menu, Game as GameScene } from "./scenes";

const config = {
  type: WEBGL,
  parent: "gamewrapper",
  width: 320,
  height: 240,
  scale: {
    zoom: Scale.MAX_ZOOM,
  },
  render: {
    pixelArt: true,
  },
  title: "template",
  physics: {
    default: "arcade",
    arcade: {
      fps: 60,
      // debug:true
    },
  },
  seed: ["test"],
  scene: [Loader, Menu, GameScene],
};

// lets the game resize when the window resizes
window.addEventListener(
  "resize",
  function (event) {
    game.scale.setMaxZoom();
  },
  false
);

export const game = new Game(config);
