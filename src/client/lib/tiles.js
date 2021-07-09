export var tileSet = document.createElement("img");
tileSet.src = "rltiles-2d.png";

//var config = require('../tiles/rltiles-2d.json');
import config from '../tiles/rltiles-2d.json';
console.log(config.name)

//split 1d index into 2d
const divmod = (x, y) => [Math.floor(x / y), x % y];

//index % 30, int(index / 29)
export let tilemap = {}

for(var i = 0; i < config.tiles.length; i++){
    let tileindex = divmod(i,30);


    tilemap[config.tiles[i]] = [ tileindex[1]*32,tileindex[0]*32 ]
}
console.log(tilemap)
console.log(tilemap["geryon"])