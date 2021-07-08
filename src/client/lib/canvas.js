import * as ROT from "rot-js";
const canvas = document.querySelector("#game");


const displayOptions = {
    // Configure the display
    bg: "black", // background
    fg: "Grey", // foreground
    fontFamily: "Fira Mono", // font (use a monospace for esthetics)
    width: 50,
    height: 20, // canvas height and width
    fontSize: 18, // canvas fontsize
    forceSquareRatio: true // make the canvas squared ratio
  };

export const display = new ROT.Display(displayOptions);
canvas.appendChild(display.getContainer());