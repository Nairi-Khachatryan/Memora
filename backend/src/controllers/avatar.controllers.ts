import type { Request, Response } from 'express';
import { Avatar } from '../models/avatar.model.ts';

export const createAvatar = async (req: Request, res: Response) => {
  const { values } = req.body;

  try {
    const avatar = new Avatar(values);
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

export const getAvatar = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const avatars = await Avatar.find({ ownerId: id });

    if (!avatars || avatars.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No blocks found for this owner',
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      data: avatars,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching Avatars',
      });
    }
  }
};
