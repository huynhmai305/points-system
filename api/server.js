const express = require ('express');
//sd process.env 
require ('dotenv').config;
const helmet = require ('helmet');
const bodyParser = require('body-parser');
const cors = require ('cors');
const morgan = require('morgan');
//connect
// const knex = require("knex");
const indexRouter = require('./routes/index')

//app
const app = express();
const whitelist = ['http://localhost:3001']
const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use('/',indexRouter) 

// App Server Connection
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`)
})
