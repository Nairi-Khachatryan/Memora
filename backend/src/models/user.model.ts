import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
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
