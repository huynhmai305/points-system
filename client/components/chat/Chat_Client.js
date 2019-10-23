import { CometChat } from '@cometchat-pro/chat';
import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import config from '../components/chat/config';
const ChatWiget = dynamic(() => import('../components/chat/ChatWiget')) ;

CometChat.init(config.appID)

class Test_State extends Component {
    render() {
        return (
            <div>
                <ChatWiget/>
            </div>
        );
    }
}

export default Test_State;