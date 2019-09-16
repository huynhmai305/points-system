const http = require('http');
const path = require('path')
const express = require('express');
// const http = require('http').Server(app)
//sd process.env 
require('dotenv').config();
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

//app
const app = express();
//session
app.use(cookieParser('mypassword'));
app.use(session({
    secret: "mypassword",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 60000 }
}));

const whitelist = ['http://localhost:3001']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));//support endcode body 
app.use(morgan('combined'))
app.use('/', indexRouter)
app.use('/users', userRouter)

// App Server Connection
app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT || 3000}`)
})
