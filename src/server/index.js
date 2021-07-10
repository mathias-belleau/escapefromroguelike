
import serialize from 'serialize-javascript';

import {world} from "./state/ecs.js"

import * as DUN from './state/Dungeon.js';

import * as CONDUN from "./controllers/ConDungeon.js"
import * as COMPS from "./state/Component.js"
import * as PlayerCont from "./controllers/Players.js"
import * as SOCKTALK from "./controllers/socketTalker.js"

import * as express from "express";
import * as http from "http"
const port = 4444;
const server = http.createServer(express)
// const websocket = require('ws.cjs');
import _ from "ws"
const wss = new _.Server({server})

function deserialize(serializedJavascript){
    console.log(serializedJavascript)
    return JSON.parse(serializedJavascript)
  }



wss.on('connection', function connection(ws) {
    let newPlayerID = PlayerCont.PlayerConnect(ws);
    SOCKTALK.SendMap(newPlayerID)
    ws.on('message', function incoming(data) {
        let dedata = deserialize(data)
        console.log(dedata);
        
        if(ws.readyState == _.OPEN){
            ws.send(data)
        }
    })
})

server.listen(port, function() {
    console.log(`server is listening on port: ${port}`)
})





