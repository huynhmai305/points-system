import { CometChat } from '@cometchat-pro/chat';
import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import config from '../components/chat/config';
const Agent = dynamic(() => import('../components/chat/ManagerChat')) ;

CometChat.init(config.appID)

class Test_State extends Component {
    render() {
        return (
            <div>
                <Agent/>
            </div>
        );
    }
}

export default Test_State;