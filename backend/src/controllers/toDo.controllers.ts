import type { Request, Response } from 'express';
import { ToDo } from '../models/toDo.model.js';

export const getToDoes = async (req: Request, res: Response) => {
  try {
    const toDos = await ToDo.find({ ownerId: req.params.id });

    if (!toDos.length) {
      return res.status(404).json({
        success: false,
        message: 'No ToDoes found for this owner',
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      data: toDos,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching blocks',
      });
    }
  }
};

export const updateToDo = async () => {};

export const createToDo = async (req: Request, res: Response) => {
  const { text, ownerId, isComplete } = req.body;

  try {
    const toDo = new ToDo({ ownerId, text, isComplete });
    await toDo.save();

    res.status(201).json({
      success: true,
      message: 'To-do added successfully',
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(400).json({
        success: false,
        message: 'To-do doesnt not added',
      });
    }
  }

  res.status(201).json({
    success: true,
    message: 'successfully',
    data: req.body,
  });
};
export const deleteToDo = async (req: Request, res: Response) => {
  const toDoId = req.params.id;
  console.log(toDoId, 'toDoId on server');

  try {
    const deletedToDo = await ToDo.findByIdAndDelete(toDoId);

    if (!deletedToDo) {
      return res
        .status(404)
        .json({ success: false, message: 'ToDo not found' });
    }

    res
      .status(200)
      .json({ success: true, message: 'ToDo deleted successfuly' });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
