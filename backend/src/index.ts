import { authRouter } from './routes/auth.routes.ts';
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

app.listen(PORT, () => {
  console.log(`Server listening at Port ${PORT}`);
  connectDb();
});
