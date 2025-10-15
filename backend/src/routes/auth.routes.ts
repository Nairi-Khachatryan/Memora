import express from 'express';

export const authRouter = express.Router();
import {
  signUp,
  signIn,
  changePassword,
} from '../controllers/auth.controllers.js';

authRouter.post('/signUp', signUp);
authRouter.post('/signIn', signIn);
authRouter.post('/changePassword/:id', changePassword);
