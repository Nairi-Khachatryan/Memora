import {
  getToDoes,
  createToDo,
  updateToDo,
  deleteToDo,
} from '../controllers/toDo.controllers.js';
import express from 'express';

export const toDoRouter = express.Router();

toDoRouter.get('/getToDo/:id', getToDoes);
toDoRouter.post('/createToDo', createToDo);
toDoRouter.post('/updateToDo/:id', updateToDo);
toDoRouter.delete('/deleteToDo/:id', deleteToDo);
