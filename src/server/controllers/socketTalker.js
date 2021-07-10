import _ from "ws"
import serialize from 'serialize-javascript';

import * as CONDUN from "./ConDungeon.js"
import * as PLAYERS from "./Players.js"
//future import for entities

//used for sending the needed info to players

//send map data based on player x,y

//send entities around player based on x,y?

//send player info hp, inv

export const SendMap = function(playerID){
    let player = PLAYERS.GetPlayer(playerID)
    let playerSocket = PLAYERS.GetSocket(playerID)
    let visibleMap = CONDUN.FetchPlayerLocalMap(player)
    let data = {"map":visibleMap}
    data = serialize(data)
    playerSocket.send(data)
}