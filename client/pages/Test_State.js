// import dynamic from 'next/dynamic';

// const DynamicComponentWithNoSSR = dynamic(() => import('../components/chat/ChatWiget'), {
//     ssr: false
// });

// export default () => <DynamicComponentWithNoSSR />;
import dynamic from 'next/dynamic';
import React, { Component } from 'react';
const ChatWiget = dynamic(() => import('../components/chat/ChatWiget')) ;
const Agent = dynamic(() => import('../components/chat/ManagerChat')) ;

class Test_State extends Component {
    render() {
        return (
            <div>
                <ChatWiget/>
                <Agent/>
            </div>
        );
    }
}

export default Test_State;