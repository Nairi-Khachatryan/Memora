import { ToDoList } from '../toDoList/toDoList';
import React, { useState } from 'react';
import s from './ToDoForm.module.scss';
import { Input, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';

export const ToDoForm: React.FC = () => {
  interface ToDoType {
    text: string;
    id: string;
    isComplete: boolean;
  }

  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDoes] = useState<ToDoType[]>([]);

  function handleAddToDo() {
    if (!inputValue.trim()) return;
    setToDoes([
      ...toDos,
      { id: uuidv4(), isComplete: false, text: inputValue },
    ]);
    setInputValue('');
  }

  return (
    <div className={s.container}>
      <div className={s.form}>
        <Input
          className={s.input}
          placeholder="Write here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleAddToDo}
        />
        <Button type="primary" onClick={handleAddToDo}>
          Add
        </Button>
      </div>

      {toDos.length ? (
        toDos.map((toDo) => (
          <ToDoList key={toDo.id} toDo={toDo} setToDoes={setToDoes} />
        ))
      ) : (
        <p className={s.noTasks}>No tasks yet</p>
      )}
    </div>
  );
};
