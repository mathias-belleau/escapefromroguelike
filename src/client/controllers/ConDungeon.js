//file for storing map data to be rendered
import * as DUN from "../state/Dungeon.js"

const ReceiveMap = function(map) {
    console.log("receiving map")
    console.log(map)
    DUN.map = map;
    console.log(DUN.map[0][0])
}

const GetMap = function() {
    return DUN.map
}

export {
    ReceiveMap,
    GetMap
}