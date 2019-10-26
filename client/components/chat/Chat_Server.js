// import { CometChat } from '@cometchat-pro/chat';
// import dynamic from 'next/dynamic';
// import React, { Component } from 'react';
// import config from './config';
// const Agent = dynamic(() => import('./ManagerChat')) ;

// CometChat.init(config.appID)

// class Test_State extends Component {
//     render() {
//         return (
//             <div>
//                 <Agent/>
//             </div>
//         );
//     }
// }

// export default Test_State;
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('./ManagerChat'), {
    ssr: false
});

export default () => <DynamicComponentWithNoSSR />;