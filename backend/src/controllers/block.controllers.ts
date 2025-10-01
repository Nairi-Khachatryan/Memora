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

export const updateBlock = async (req: Request, res: Response) => {
  const id = req.params.id;
  const text = req.body.updatedValue;

  console.log('ID:', id);
  console.log('Text:', text);

  try {
    const updatedBlock = await Block.findByIdAndUpdate(
      id,
      { $set: { text } },
      { new: true }
    );

    if (!updatedBlock) {
      return res
        .status(404)
        .json({ success: false, message: 'Block not found' });
    }

    res.status(200).json({ success: true, data: updatedBlock });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error updating block', error });
  }
};
