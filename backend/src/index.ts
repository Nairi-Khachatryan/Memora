import { avatarRouter } from './routes/avatar.routes.ts';
import { blockRouter } from './routes/block.routes.ts';
import { authRouter } from './routes/auth.routes.ts';
import { userRouter } from './routes/user.routes.ts';
import { connectDb } from './config/db.ts';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5052;

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/user', blockRouter);
app.use('/user', userRouter);
app.use('/avatar', avatarRouter);

app.listen(PORT, () => {
  console.log(`Server listening at Port ${PORT}`);
  connectDb();
});
