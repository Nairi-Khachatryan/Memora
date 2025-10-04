import express from 'express';
import {
  createBlock,
  getBlock,
  updateBlock,
  deleteBlock,
} from '../controllers/block.controllers.ts';

export const blockRouter = express.Router();

blockRouter.post('/createBlock', createBlock);
blockRouter.get('/getBlock/:id', getBlock);
blockRouter.post('/updateBlock/:id', updateBlock);
blockRouter.delete('/deleteBlock/:id', deleteBlock);
