import React from 'react';
import { StreamApp, SinglePost,StatusUpdateForm, FlatFeed, LikeButton } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

class App extends React.Component {
    render() {
        const activityId = 'aba1d300-dc4a-11e8-8080-80010edf5810';
        return (
            <StreamApp
                apiKey="c26vp2v6qzqv"
                appId="59675"
                token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.pBCNP9Or38bTsM0tGsW0ZFY0wKaOEePdGvYbUrDPmoM"
            >
                <StatusUpdateForm />
                <FlatFeed />
            </StreamApp>
            // <StreamApp
            //     apiKey="c26vp2v6qzqv"
            //     appId="59675"
            //     token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.pBCNP9Or38bTsM0tGsW0ZFY0wKaOEePdGvYbUrDPmoM"
            // >
            //     <SinglePost
            //         activityId={activityId}
            //         feedGroup="timeline"
            //         Activity={(props) => (
            //             <React.Fragment>
            //                 <Activity
            //                     {...props}
            //                     Footer={
            //                         <div style={{ padding: '0 16px 16px' }}>
            //                             <CommentField
            //                                 activity={props.activity}
            //                                 onAddReaction={props.onAddReaction}
            //                             />
            //                             <CommentList activityId={props.activity.id} />
            //                         </div>
            //                     }
            //                 />
            //             </React.Fragment>
            //         )}
            //     />
            // </StreamApp>
        );
    }
}

export default App;

// import React, { Component } from 'react';

// import {
//     StreamApp,
//     StatusUpdateForm,
//     FlatFeed,
//     NotificationDropdown,
//     Activity,
//     LikeButton,
//     StreamContext,
// } from 'react-activity-feed';
// import 'react-activity-feed/dist/index.es.css';

// export default class App extends Component {
//     render() {
//         return (
//             <div style={{ maxWidth: '600px', margin: '0 auto' }}>
//                 <StreamApp
//                     apiKey="3fjzn67nznwt"
//                     appId="41814"
//                     token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZXhhbXBsZS11c2VyIn0.XEKjtzD2AIQMLXH6kfJlL8P_JV4CBYvcMsmQCFjyY2U"
//                 >
                    
//                     <div
//                         style={{
//                             background: '#fff', //#1A1A14
//                             height: 60,
//                             borderRadius: 4,
//                             margin: '10px 0',
//                             padding: '0 20px',
//                             boxShadow: '0px 0px 4px rgba(0,0,0,0.15)',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',
//                             flexDirection: 'row',
//                         }}
//                     >
//                         <h3>Review</h3>
//                         <NotificationDropdown arrow right />
//                     </div>
//                     <StatusUpdateForm
//                         submitHandler={(e) => {
//                             alert(e);
//                         }}
//                     />
//                     <FlatFeed
//                         feedGroup="user"
//                         notify
//                         Activity={(props) => (
//                             <Activity
//                                 {...props}
//                                 Footer={
//                                     <div style={{ padding: '8px 16px 0px' }}>
//                                         <LikeButton {...props} />
//                                         <React.Fragment>
//                                             <button onClick={() => props.onRemoveActivity(props.activity.id)}>
//                                                 Delete
//                                             </button>
//                                         </React.Fragment>
//                                     </div>
//                                 }
//                             />
//                         )}
//                     />
//                 </StreamApp>
//             </div>
//         );
//     }
// }
