import { Router } from 'express'

import { postFriend, getFriend, getFriends } from '../controllers/friends.controller.js';


const friendsRouter = new Router()

friendsRouter.use((req, res, next) => {
    console.log('ip address:', req.ip)
    next()
})

friendsRouter.get( "/", getFriends )
friendsRouter.get( "/:id", getFriend )
friendsRouter.post("/", postFriend)

export default friendsRouter;