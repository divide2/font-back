import React, {Component} from "react";

import Stomp from '@stomp/stompjs'
import SockJS from 'sockjs-client'
import {Button, Input} from "antd";

let stompClient = null;
class Chat extends Component {

    state = {
        connected: false,
        reply: '',
        message: ''
    };
    connect = () => {
        let sock = SockJS('/gs-guide-websocket');
        stompClient = Stomp.over(sock);
        stompClient.connect({}, (frame) => {
            console.log(frame);
            this.setState({connected: true});
            stompClient.subscribe('/topic/greetings', function (res) {
                console.log(res.body);
                this.setState({reply: JSON.parse(res.body).content})
            });
        })
    };
    disconnect = () => {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        this.setState({
            connected: false
        });
        console.log("Disconnected");
    };

    onMessageChange = (e) => {
        this.setState({message: e.target.value})
    };

    sendMessage = () => {
        stompClient.send("/app/greeting", {}, {message: this.state.message})
    };

    render() {
        return (
            <div>
                <span>{this.state.connected}</span>
                <div>{this.state.reply}</div>
                <div><Input onChange={this.onMessageChange}/><Button onClick={this.sendMessage}>发送</Button></div>
                <button onClick={this.connect}>连接</button>
                <button onClick={this.disconnect}>断开</button>
            </div>
        )
    }
}


export default Chat
