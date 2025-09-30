import mongoose from 'mongoose';

const blockSchema = new mongoose.Schema({
  ownerId: {
    requaired: true,
    type: String,
  },
  lable: {
    type: String,
    requaired: true,
  },
  text: {
    required: true,
    type: String,
  },
});

export const Block = mongoose.model('Block', blockSchema);
