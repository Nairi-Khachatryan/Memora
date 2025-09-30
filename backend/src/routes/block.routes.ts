import express from 'express';
import { createBlock, getBlock } from '../controllers/block.controllers.ts';

export const blockRouter = express.Router();

blockRouter.post('/createBlock', createBlock);
blockRouter.get('/getBlock/:id', getBlock)
