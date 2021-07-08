
var serialize = require('serialize-javascript');

const DUN = require("./state/Dungeon")
const CONDUN = require("./controllers/ConDungeon")

const express = require('express');
const http = require('http');
const port = 4444;
const server = http.createServer(express)
const websocket = require('ws');
const wss = new websocket.Server({server})

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

console.log(DUN.map._map[0][1])
console.log(serialize(DUN.map._map))


