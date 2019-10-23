const express = require('express');
const router = express.Router();
const axios = require('axios');

// chat cometchat
const appID = process.env.APP_ID_COMETCHAT;
const apiKey = process.env.API_KEY_COMETCHAT;
const agentUID = process.env.AGENT_UID_COMETCHAT;
const url = process.env.URL_COMETCHAT;

const headers = {
    'Content-Type': 'application/json',
    appid: appID,
    apikey: apiKey,
};

router.get('/api/create', (req, res) => {
    const data = {
        uid: new Date().getTime(),
        name: 'customer',
    };
    axios.post(`${url}/users`, JSON.stringify(data), {
        headers,
    })
        .then(response => {
            // user is created, fetch auth token
            requestAuthToken(response.data.data.uid)
                .then(token => {
                    console.log('Success:' + JSON.stringify(token));
                    // token is returned to client
                    res.json(token);
                })
                .catch(error => console.error('Error:', error));
        })
        .catch(error => console.error('Error:', error));
});

router.get('/api/auth', (req, res) => {
    const uid = req.query.uid;
    // if you have your own login method, call it here.
    // then call CometChat for auth token
    requestAuthToken(uid)
        .then(token => {
            console.log('Success:' + JSON.stringify(token));
            res.json(token);
        })
        .catch(error => console.error('Error:', error));
});

const requestAuthToken = uid => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/users/${uid}/auth_tokens`, null, {
            headers,
        })
            .then(response => {
                console.log('New Auth Token:', response.data);
                resolve(response.data.data);
            })
            .catch(error => reject(error));
    });
};

router.get('/api/users', (req, res) => {
    axios.get(`${url}/users`, {
        headers,
    })
    .then(response => {
        const { data } = response.data;
        console.log('Data user:',data);
        const filterAgentData = data.filter(data => {
            // filter agent out from the list of users
            return data.uid !== agentUID;
        });
        res.json(filterAgentData);
    })
    .catch(error => console.error('Error:', error));
});

module.exports = router;