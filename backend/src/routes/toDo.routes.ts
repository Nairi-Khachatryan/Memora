import {
  getToDo,
  createToDo,
  updateToDo,
  deleteToDo,
} from '../controllers/toDo.controllers.js';
import express from 'express';

export const toDoRouter = express.Router();

toDoRouter.get('getToDo/:id', getToDo);
toDoRouter.delete('deleteToDo/:id', deleteToDo);
toDoRouter.post('updateToDo/:id', updateToDo);
toDoRouter.post('createToDo', createToDo);
