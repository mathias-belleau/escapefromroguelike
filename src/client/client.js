import {display} from "./lib/canvas.js"
import * as ROT from "rot-js";
import * as SERIALIZE from "serialize-javascript"

(function() {
    const sendBtn = document.querySelector('#send');
    const messages = document.querySelector('#messages');
    const messageBox = document.querySelector('#messageBox');

    let ws;
    function ShowMessage(message) {
        messages.textContent += `\n\n${message}`;
        messages.scrollTop = messages.scrollHeight;
        messageBox.value = '';
    }

    function init() {
        if(ws){
            ws.error = ws.onopen = ws.onclose = null;
            ws.close();
        }

        ws = new WebSocket('ws://localhost:4444');
        ws.onopen = () => {
            console.log("connection opened")
            let testing = {test:"bipbop"}
            ws.send(SERIALIZE(testing))
        }
        ws.onmessage = ({data}) => ShowMessage(data);
        ws.onclose = function(){
            ws = null;
        }
    }

    sendBtn.onclick = function() {
        if(!ws){
            ShowMessage("No ws")
            return;
        }

        ws.send(messageBox.value);
        ShowMessage(messageBox.value);
    }

    init();
})();

display.draw(5,  4, "@");