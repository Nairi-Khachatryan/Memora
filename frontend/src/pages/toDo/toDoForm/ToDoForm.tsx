import React from 'react';
import s from './ToDoForm.module.scss';
import { Input, Button } from 'antd';
import type { ToDoFormProps } from './types';

export const ToDoForm: React.FC<ToDoFormProps> = ({
  inputValue,
  handleAddToDo,
  setInputValue,
}) => {
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
    </div>
  );
};
