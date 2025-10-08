import type { Request, Response } from 'express';
import { Avatar } from '../models/avatar.model.ts';

export const createAvatar = async (req: Request, res: Response) => {
  const { values } = req.body;

  console.log(values, 'values');

  try {
    const avatar = new Avatar( values );
    await avatar.save();

    res.status(201).json({
      success: true,
      message: 'Avatar created successfully',
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
      console.log(error.message);
    }
  }
};
