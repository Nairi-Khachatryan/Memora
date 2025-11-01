import mongoose from 'mongoose';

const toDoSchema = new mongoose.Schema({
  ownerId: {
    requaired: true,
    type: String,
  },
  text: {
    requaired: true,
    type: String,
  },
  isComplete: {
    requaired: true,
    type: Boolean,
  },
});

export const ToDo = mongoose.model('ToDo', toDoSchema);
