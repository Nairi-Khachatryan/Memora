import express from 'express';
import {
  getMe,
  deleteAccount,
  updateUserInfo,
} from '../controllers/user.controllers.ts';

export const userRouter = express.Router();

userRouter.post('/updateUserInfo/:id', updateUserInfo);
userRouter.delete('/deleteAccount/:id', deleteAccount);
userRouter.get('/getMe/:id', getMe);
