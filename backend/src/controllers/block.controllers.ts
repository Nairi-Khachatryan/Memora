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

export const getBlock = async (req: Request, res: Response) => {
  try {
    const blocks = await Block.find({ ownerId: req.params.id });

    if (!blocks || blocks.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No blocks found for this owner',
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      data: blocks,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching blocks',
      });
    }
  }
};
