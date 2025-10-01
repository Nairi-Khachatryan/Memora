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

export const getMe = async (req: Request, res: Response) => {
  const USER_ID = req.params.id;

  try {
    const findUser = await User.findById(USER_ID);

    if (!findUser) {
      return res.status(404).json({
        success: false,
        message: `Cannot find User with id ${USER_ID}`,
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
