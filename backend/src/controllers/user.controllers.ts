import type { Request, Response } from 'express';
import { User } from '../models/user.model.ts';

export const updateUserInfo = async (req: Request, res: Response) => {
  const id = req.params.id;
  const values = req.body.values;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: values },
      { new: true }
    );

    if (!updatedUser) {
      res.json({
        success: false,
      });
    }

    res.json({
      success: true,
      data: updatedUser,
    });
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
};

export const getMe = async () => {};
