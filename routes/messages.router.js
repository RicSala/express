import { Router } from 'express'

import { getMessages, postMessage } from '../controllers/messages.controller.js';


const messagesRouter = new Router();

messagesRouter.get( "/", getMessages )
messagesRouter.post("/", postMessage)

export default messagesRouter