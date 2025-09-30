import express from 'express';
import { createBlock } from '../controllers/block.controllers.ts';

export const blockRouter = express.Router();

blockRouter.post('/createBlock', createBlock);
