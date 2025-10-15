import type { Request, Response } from 'express';
import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const candidate = await User.findOne({ email });

  if (candidate) {
    return res.status(409).json({
      success: false,
      message: `Account with this email (${email}) already exists`,
    });
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      passwordHash,
      name: 'name',
      surname: 'surname',
      phone: 'phone',
    });
    await user.save();

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        email: user.email,
        id: user._id,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const candidate = await User.findOne({ email });

    if (!candidate) {
      return res.status(401).json({
        success: false,
        message: `Wrong Email: ${email} or Password: ${password}`,
      });
    }

    const isMatch = await bcrypt.compare(password, candidate.passwordHash);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: `Wrong Email${email} or Password${password}`,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      data: {
        id: candidate._id,
        email: candidate.email,
      },
    });
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
export const changePassword = async (req: Request, res: Response) => {
  const USER_ID = req.params.id;
  const OLD_PASSWORD = req.body.oldPassword;
  const NEW_PASSWORD = req.body.newPassword;

  try {
    const USER = await User.findById(USER_ID);

    if (!USER) {
      return res
        .status(404)
        .json({ success: false, message: 'Invalid User Id' });
    }

    const IS_MATCH = await bcrypt.compare(OLD_PASSWORD, USER.passwordHash);

    if (!IS_MATCH) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid Password' });
    }

    const NEW_PASSWORD_HASH = await bcrypt.hash(NEW_PASSWORD, 10);
    USER.passwordHash = NEW_PASSWORD_HASH;
    await USER.save();

    return res
      .status(200)
      .json({ success: true, message: 'Password changed successfully' });
  } catch (error) {
    if (error instanceof Error) console.log(error.message);

    return res
      .status(500)
      .json({
        success: false,
        message: 'Server error while changing password',
      });
  }
};
