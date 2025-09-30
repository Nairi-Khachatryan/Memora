import type { Request, Response } from 'express';
import { Block } from '../models/block.model.ts';

export const createBlock = async (req: Request, res: Response) => {
  const { lable, text, ownerId } = req.body;

  try {
    const block = new Block({ lable, text, ownerId });
    await block.save();

    res.status(201).json({
      success: true,
      message: 'Block created successfully',
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: 'Block Doesnt not Created',
      });
      console.log(error.message);
    }
  }
};
