import mongoose from 'mongoose';

const avatarSchema = new mongoose.Schema({
  ownerId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
});

export const Avatar = mongoose.model('Avatar', avatarSchema);
