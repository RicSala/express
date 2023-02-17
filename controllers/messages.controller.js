import path from 'path'
import url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

function postMessage(req, res) {
    res.send("Updating messages")
}

function getMessages (req, res) {
    const imagePath = path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg')
    res.render('messages', {
        title: 'messages to my friend',
        friend: 'Elon Musk'
    })
    // res.sendFile(imagePath)
}

export { postMessage, getMessages }