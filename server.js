import express from 'express'

const app = express()

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Albert Einstein",
    },
    {
        id: 1,
        name: "Sir Isaas Newton",
    },
]

app.listen(PORT, () => {
    console.log(`SERVER LISTENING IN PORT ${PORT}...`)
})

app.get("/", (req, res) => {
    res.send('helloooo!')
})

app.get("/friends", (req, res) => {
    // res.send(friends)
    res.json(friends)
})

app.get("/friends/:id", (req, res) => {

    if (friends[req.params.id]) {
        res.json(friends[req.params.id])
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        })
    }

})

app.get("/messages", (req, res) => {
    res.send('<ul><li>Hello Sir Isaac!</li></ul>')
})

app.post("/messages", (req, res) => {
    console.log("Updating messages")
})
