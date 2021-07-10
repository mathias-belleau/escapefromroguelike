import * as ROT from "rot-js"
import * as DUN from "../state/Dungeon.js"
// const ROT = require("rot-js")
// const DUN = require("../state/Dungeon")

//create starting map
let townMapRot = new ROT.Map.Arena(15, 10);
let townMap = []
for(let x = 0; x < 15; x++){
    townMap[x] = new Array(10)
}
townMapRot.create(function(x,y, wall){
    townMap[x][y] = wall ? "dngn_rock_wall_08" : "corridor";
})

DUN.map["town"] = [townMap]

let floor1 = new ROT.Map.Uniform(DUN.dimensions.w, DUN.dimensions.h, {roomWidth: [4,7],roomHeight:[4,7], roomDugPercentage:0.8});
floor1.create()
let floor2 = new ROT.Map.Uniform(DUN.dimensions.w, DUN.dimensions.h, {roomWidth: [4,7],roomHeight:[4,7], roomDugPercentage:0.8});
floor2.create()

DUN.map["dungeon1"] = [floor1, floor2]

const FetchPlayerLocalMap = function (player){
    //get player current map level
    console.log({player})
    
    let currentFloor = DUN.map[player.location.location][0]
    // render current grid for now just do 15,10 around player
    let visibleMap = []
    for(let x = 0; x < 15; x++){
        visibleMap[x] = new Array(10).fill(-1)
    }
    
    //make sure dont go out of bounds
    let width = currentFloor[0].length
    let height = currentFloor[0][0].length
    console.log(currentFloor[0][0])
    for(var x = player.position.x - 7; x < player.position.x + 7; x++){
        for(var y = player.position.y - 5; y < player.position.y + 5; y++){
            if(x < 0 || x >= width || y < 0 || y >= height){
                //we are out of bounds
                continue;
            }
            visibleMap[x][y] = currentFloor[x][y]
        }
    }
    return visibleMap
    //TODO: fov
}

export { 
    FetchPlayerLocalMap,
}