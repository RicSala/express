import friends from '../models/friends.model.js'


function postFriend(req, res) {
    // res.send(friends)
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        })
    } 
    const newFriend = {
        id: friends.length,
        name: req.body.name,
    }
    friends.push(newFriend)
    res.json(newFriend)
    
}

function getFriend (req, res) {
    
    if (friends[req.params.id]) {
        res.json(friends[req.params.id])
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        })
    }
}

function getFriends (req, res) {
    // res.send(friends)
    res.json(friends)
}

export { postFriend, getFriend, getFriends }