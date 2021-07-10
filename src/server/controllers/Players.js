import {world} from "../state/ecs.js"
import * as COMPS from "../state/Component.js"

// list of players
export let ConnectedPlayers = []

// list of player sockets
export let playerSockets = []

export const PlayerConnect = function (ws) {
    const player1 = world.createPrefab('Being');
    player1.add(COMPS.Position, { x: 10, y: 5 })
    // console.log({ player1 })
    ConnectedPlayers[player1.id] = player1
    playerSockets[player1.id] = ws
    return player1.id
}

export const GetPlayer = function (playerID){
    return ConnectedPlayers[playerID]
    //TODO: validation
}

export const GetSocket = function (playerID){
    return playerSockets[playerID]
    //TODO: validation
}