import express, { json, Router } from 'express'
import friendsRouter from './routes/friends.router.js';
import messagesRouter from './routes/messages.router.js';

// Express API reference: https://expressjs.com/en/api.html


const app = express()

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now()
    next()
    console.log(`${req.method} - ${req.baseUrl}${req.url} ${Date.now() - start} ms`)
})

app.use(json())


app.use('/friends', friendsRouter)

app.use('/messages', messagesRouter)



app.listen( PORT, () => {
    console.log(`SERVER LISTENING IN PORT ${PORT}...`)
})