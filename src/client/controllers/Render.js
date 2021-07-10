import * as ROT from "rot-js"
import {display} from "../lib/canvas.js"
import * as CONDUN from "./ConDungeon.js"


//need to build a map since the tiles display takes x,y, [imagename,imagename]
const RenderMap = function () {
    let map = CONDUN.GetMap()
    display.clear()

    for(let x = 0; x < map.length; x++){
        for(let y = 0; y < map[x].length; y++){
                //nothing to draw here continue
            if(map[x][y] != "-1"){
                display.draw(x,  y, map[x][y]);
            }
        }
    }
}

export {
    RenderMap
}