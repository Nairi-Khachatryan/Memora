import express from 'express';
import { createAvatar } from '../controllers/avatar.controllers.ts';

export const avatarRouter = express.Router();

avatarRouter.post('/createAvatar', createAvatar);
