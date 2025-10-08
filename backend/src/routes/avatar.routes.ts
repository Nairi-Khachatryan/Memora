import express from 'express';
import { createAvatar, getAvatar } from '../controllers/avatar.controllers.ts';

export const avatarRouter = express.Router();

avatarRouter.post('/createAvatar', createAvatar);
avatarRouter.get('/getAvatar/:id', getAvatar);
