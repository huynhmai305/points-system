// import { CometChat } from '@cometchat-pro/chat';
// import dynamic from 'next/dynamic';
// import React, { Component } from 'react';
// import config from './config';
// const ChatWiget = dynamic(() => import('./ChatWiget')) ;

// CometChat.init(config.appID)

// class Test_State extends Component {
//     render() {
//         return (
//             <div>
//                 <ChatWiget/>
//             </div>
//         );
//     }
// }

// export default Test_State;
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('./ChatWiget'), {
    ssr: false
});

export default () => <DynamicComponentWithNoSSR />;