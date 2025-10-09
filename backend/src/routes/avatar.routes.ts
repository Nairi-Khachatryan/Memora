import express from 'express';
import {
  createAvatar,
  getAvatar,
  deleteAvatar,
  updateAvatar,
} from '../controllers/avatar.controllers.ts';

export const avatarRouter = express.Router();

avatarRouter.post('/createAvatar', createAvatar);
avatarRouter.get('/getAvatar/:id', getAvatar);
avatarRouter.delete('/deleteAvatar/:id', deleteAvatar);
avatarRouter.post('/updateAvatar/:id', updateAvatar);
