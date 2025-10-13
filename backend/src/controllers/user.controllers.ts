import { Avatar } from '../models/avatar.model.ts';
import type { Request, Response } from 'express';
import { Block } from '../models/block.model.ts';
import { User } from '../models/user.model.ts';
import mongoose from 'mongoose';

export const updateUserInfo = async (req: Request, res: Response) => {
  const id = req.params.id;
  const values = req.body.values;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid ID format' });
  }

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

export const getMe = async (req: Request, res: Response) => {
  const USER_ID = req.params.id;

  try {
    const findUser = await User.findById(USER_ID);

    if (!findUser) {
      return res.status(404).json({
        success: false,
        message: `Cannot find user with ID ${USER_ID}.`,
      });
    }

    res.json({
      success: true,
      message: 'User found!',
      data: {
        id: findUser._id,
        name: findUser.name,
        surname: findUser.surname,
        email: findUser.email,
        phone: findUser.phone,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  const userID = req.params.id;

  try {
    const foundUser = await User.findOneAndDelete({ _id: userID });

    if (!foundUser) {
      return res.status(404).json({ success: false, message: 'Bad request' });
    }

    const userBlock = await Block.deleteMany({
      ownerId: foundUser?._id,
    });

    if (!userBlock) {
      return res
        .send(404)
        .json({ success: false, message: 'User block not found' });
    }

    const userAvatar = await Avatar.deleteMany({
      ownerId: foundUser?._id,
    });

    if (!userAvatar) {
      return res
        .send(404)
        .json({ success: false, message: 'User avatar not found' });
    }

    return res
      .status(200)
      .json({ success: true, message: 'User deleted ssuccessfuly!' });
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
