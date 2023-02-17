function postMessage (req, res) {
    res.send("Updating messages")
}

function getMessages (req, res) {
    res.send('<ul><li>Hello Sir Isaac!</li></ul>')
}

export { postMessage, getMessages }