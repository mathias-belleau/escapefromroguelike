import * as ROT from "rot-js"
import * as DUN from "../state/Dungeon.js"
// const ROT = require("rot-js")
// const DUN = require("../state/Dungeon")

//create starting map
let townMapRot = new ROT.Map.Arena(15, 10);
let townMap = []
for(let x = 0; x < 10; x++){
    townMap[x] = new Array(15)
}
townMapRot.create(function(x,y, wall){
    townMap[y][x] = wall ? "dngn_rock_wall_08" : "corridor";
})

DUN.map["town"] = [townMap]

let floor1 = new ROT.Map.Uniform(DUN.dimensions.w, DUN.dimensions.h, {roomWidth: [4,7],roomHeight:[4,7], roomDugPercentage:0.8});
floor1.create()
let floor2 = new ROT.Map.Uniform(DUN.dimensions.w, DUN.dimensions.h, {roomWidth: [4,7],roomHeight:[4,7], roomDugPercentage:0.8});
floor2.create()

DUN.map["dungeon1"] = [floor1, floor2]