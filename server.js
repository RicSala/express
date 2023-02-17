import express, { json } from 'express'
import { getMessages, postMessage } from './controllers/messages.controller.js';
import { postFriend, getFriend, getFriends } from './controllers/friends.controller.js';

// Express API reference: https://expressjs.com/en/api.html


const app = express()

const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`)
    const start = Date.now()
    next()
    console.log(`Execution time: ${Date.now() - start} ms`)
})

app.use(json())

app.get("/", (req, res) => {
    res.send('helloooo!')
})

app.get( "/friends", getFriends )
app.get( "/friends/:id", getFriend )
app.post( "/friends", postFriend )


app.get( "/messages", getMessages )
app.post( "/messages", postMessage )


app.listen( PORT, () => {
    console.log(`SERVER LISTENING IN PORT ${PORT}...`)
})