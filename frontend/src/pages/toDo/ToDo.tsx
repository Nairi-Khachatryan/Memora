import { ToDoForm } from '../../components/toDoForm/ToDoForm';
import s from './ToDo.module.scss';
import React from 'react';

export const ToDo: React.FC = () => {
  return (
    <div className={s.container}>
      <ToDoForm />
    </div>
  );
};
