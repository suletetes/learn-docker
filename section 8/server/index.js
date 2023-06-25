const keys = reuire('./keys')

// express apps setup

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(bodyParser.json())

// postgres client setup

const {pool} = require('pg')
const pgClient = new pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: key.pgPassword,
    port: keys.pgPort
})

pgClient.on('error', () => console.log('Lost PG connection'))