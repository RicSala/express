import express, { json } from 'express'
import friendsRouter from './routes/friends.router.js';
import messagesRouter from './routes/messages.router.js';
import path from 'path';
import url from 'url';

// Express API reference: https://expressjs.com/en/api.html

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const app = express()

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now()
    next()
    console.log(`${req.method} - ${req.baseUrl}${req.url} ${Date.now() - start} ms`)
})


app.use('/site', express.static(path.join(__dirname, 'public')))

app.use(json())

app.use('/friends', friendsRouter)

app.use('/messages', messagesRouter)



app.listen( PORT, () => {
    console.log(`SERVER LISTENING IN PORT ${PORT}...`)
})