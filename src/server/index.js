
// var serialize = require('serialize-javascript');
import serialize from 'serialize-javascript';

import {world} from "./state/ecs.js"

// const DUN = require("./state/Dungeon")
import * as DUN from './state/Dungeon.js';
// const CONDUN = require("./controllers/ConDungeon")
// const { _world } = require("./state/ecs")
import * as CONDUN from "./controllers/ConDungeon.js"

// const express = require('express');
// const http = require('http');
import * as express from "express";
import * as http from "http"
const port = 4444;
const server = http.createServer(express)
// const websocket = require('ws.cjs');
import _ from "ws"
const wss = new _.Server({server})

function deserialize(serializedJavascript){
    return JSON.parse(serializedJavascript)
  }

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        let dedata = deserialize(data)
        console.log(dedata);
        wss.clients.forEach(function each(client) {
            if(client != ws && client.readyState == websocket.OPEN) {
                client.send(data);
                
            }
        })
    })
    ws.on('command', function incoming(data){
        console.log("command: " + data)
    })
})

server.listen(port, function() {
    console.log(`server is listening on port: ${port}`)
})


const warrior1 = world.createPrefab('Being');
console.log({warrior1})

// console.log(DUN.map["town"])
// console.log(serialize(DUN.map["town"]))


