// import dynamic from 'next/dynamic';
// import React, { Component } from 'react';
// const ChatWiget = dynamic(() => import('../components/chat/ChatWiget')) ;
// const Agent = dynamic(() => import('../components/chat/ManagerChat')) ;

// class Test_State extends Component {
//     render() {
//         return (
//             <div>
//                 <ChatWiget/>
//                 <Agent/>
//             </div>
//         );
//     }
// }

// export default Test_State;
import React, { Component } from 'react';
import MailTemplate from '../components/mail/MailTemplate'
import {renderEmail} from 'react-html-email'
import QRCode from '../components/QRCode/GenerateQR_Image'
class Test_State extends Component {
    send = () => {
        
        const messageHtml = renderEmail(
            <MailTemplate
                name='Mai Mai'
                email='maitamduyen@gmail.com'
            />
        )
        const content = <QRCode data='maitamduyen@gmail.com'/>
        fetch('http://localhost:3000/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'maitamduyen@gmail.com',
                messageHtml: messageHtml,
                content: content
            })
        })
            .then(response => response.json())
            .then(item => {
                alert('Đã gửi mã QR về mail bạn thành công!')
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <button onClick={this.send}>Send</button>
            </div>
        );
    }
}

export default Test_State;