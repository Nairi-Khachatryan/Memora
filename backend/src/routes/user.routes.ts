import { getMe, updateUserInfo } from '../controllers/user.controllers.ts';
import express from 'express';

export const userRouter = express.Router();

userRouter.post('/updateUserInfo/:id', updateUserInfo);
userRouter.get('/getMe/:id', getMe);
