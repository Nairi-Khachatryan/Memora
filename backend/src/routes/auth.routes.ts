import express from 'express';

export const authRouter = express.Router();
import { signUp, signIn } from '../controllers/auth.controllers.ts';

authRouter.post('/signUp', signUp);
authRouter.post('/signIn', signIn);
