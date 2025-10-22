import { ToDoForm } from './toDoForm/ToDoForm';
import { ToDoList } from './toDoList/ToDoList';
import type { ToDoType } from './types';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './ToDo.module.scss';

export const ToDo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState<ToDoType[]>([]);

  function handleAddToDo() {
    if (!inputValue.trim()) return;
    setToDos([...toDos, { id: uuidv4(), isComplete: false, text: inputValue }]);
    setInputValue('');
  }

  return (
    <div className={s.container}>
      <ToDoForm
        handleAddToDo={handleAddToDo}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
};
