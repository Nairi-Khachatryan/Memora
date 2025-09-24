import express from 'express';
import { connectDb } from './config/db.ts';
import dotenv from 'dotenv';
import { authRouter } from './routes/auth.routes.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5052;

app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server listening at Port ${PORT}`);
  connectDb();
});
