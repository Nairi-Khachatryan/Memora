import { useToast } from '../../../hooks/useToast';
import type { ToDoListItemProps } from './types';
import s from './ToDoList.module.scss';
import { useState } from 'react';
import type React from 'react';
import { Button } from 'antd';

export const ToDoListItem: React.FC<ToDoListItemProps> = ({
  toDo,
  setToDos,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editInputValue, setEditInputValue] = useState(toDo.text);
  const { showToast } = useToast();

  const handleDeleteToDo = (id: string) => {
    setToDos((prev) => prev.filter((toDo) => toDo.id !== id));
  };

  const handleComplete = (id: string) => {
    setToDos((prev) =>
      prev.map((toDo) =>
        toDo.id === id ? { ...toDo, isComplete: !toDo.isComplete } : toDo
      )
    );
  };

  const handleEditToDo = (id: string) => {
    const oldValue = toDo.text;
    const currentValue = editInputValue;

    if (oldValue === currentValue) {
      return showToast({ type: 'error', message: 'Nothing to update' });
    }

    console.log(oldValue, currentValue);
    console.log(id);
  };

  return (
    <div className={s.item}>
      {editMode ? (
        <>
          <input
            value={editInputValue}
            onChange={(e) => setEditInputValue(e.target.value)}
          />
          <Button danger type="primary" onClick={() => setEditMode(false)}>
            Cancel
          </Button>
          <Button onClick={() => handleEditToDo(toDo.id)} type="primary">
            Save
          </Button>
        </>
      ) : (
        <>
          <div className={s.leftSection}>
            <input
              type="checkbox"
              className={s.checkbox}
              checked={toDo.isComplete}
              onChange={() => toDo.isComplete}
              onClick={() => handleComplete(toDo.id)}
            />
            <h1 className={`${s.text} ${toDo.isComplete ? s.completed : ''}`}>
              {toDo.text}
            </h1>
          </div>
          <div>
            <Button
              onClick={() => handleDeleteToDo(toDo.id)}
              type="primary"
              danger
            >
              Delete
            </Button>
            <Button onClick={() => setEditMode(true)} type="primary">
              Edit
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
