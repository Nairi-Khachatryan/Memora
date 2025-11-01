import { avatarRouter } from './routes/avatar.routes.js';
import { blockRouter } from './routes/block.routes.js';
import { authRouter } from './routes/auth.routes.js';
import { userRouter } from './routes/user.routes.js';
import { toDoRouter } from './routes/toDo.routes.js';
import { connectDb } from './config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5052;

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/toDo', toDoRouter);
app.use('/block', blockRouter);
app.use('/avatar', avatarRouter);

app.listen(PORT, () => {
  console.log(`Server listening at Port ${PORT}`);
  connectDb();
});
