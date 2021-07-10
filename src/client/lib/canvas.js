import * as ROT from "rot-js";
const canvas = document.querySelector("#game");
import * as TILES from "./tiles.js";

console.log(TILES.tilemap["geryon"])
const displayOptions = {
    // Configure the display
    bg: "black", // background
    fg: "Grey", // foreground
    width: 50,
    height: 20, // canvas height and width
    fontSize: 18, // canvas fontsize
    forceSquareRatio: true, // make the canvas squared ratio
    layout: "tile",
    tileWidth: 32,
    tileHeight: 32,
    tileSet: TILES.tileSet,
    tileMap: TILES.tilemap,
  };

export const display = new ROT.Display(displayOptions);
canvas.appendChild(display.getContainer());