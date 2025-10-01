import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      required: false,
      type: String,
    },
    surname: {
      required: false,
      type: String,
    },
    phone: {
      required: false,
      type: String,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    passwordHash: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
