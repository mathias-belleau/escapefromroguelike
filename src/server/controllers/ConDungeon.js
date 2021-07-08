// import * as ROT from "rot-js"
// import * as DUN from "../state/Dungeon"
const ROT = require("rot-js")
const DUN = require("../state/Dungeon")

DUN.map = new ROT.Map.Uniform(DUN.dimensions.w, DUN.dimensions.h, {roomWidth: [4,7],roomHeight:[4,7], roomDugPercentage:0.8});
DUN.map.create()
