import s from './ToDoList.module.scss';
import type React from 'react';
import { Button } from 'antd';

interface ToDoType {
  id: string;
  text: string;
  isComplete: boolean;
}

interface Props {
  toDo: ToDoType;
  setToDoes: React.Dispatch<React.SetStateAction<ToDoType[]>>;
}

export const ToDoListItem: React.FC<Props> = ({ toDo, setToDoes }) => {
  const handleDeleteToDo = (id: string) => {
    setToDoes((prev) => prev.filter((toDo) => toDo.id !== id));
  };

  const handleComplete = (id: string) => {
    setToDoes((prev) =>
      prev.map((toDo) =>
        toDo.id === id ? { ...toDo, isComplete: !toDo.isComplete } : toDo
      )
    );
  };

  const handleEditToDo = (id: string) => {
    console.log(id);
  };

  return (
    <div className={s.item}>
      <div className={s.leftSection}>
        <input
          onClick={() => handleComplete(toDo.id)}
          onChange={() => toDo.isComplete}
          type="checkbox"
          className={s.checkbox}
          checked={toDo.isComplete}
          readOnly
        />
        <h1 className={`${s.text} ${toDo.isComplete ? s.completed : ''}`}>
          {toDo.text}
        </h1>
      </div>
      <div>
        <Button onClick={() => handleDeleteToDo(toDo.id)} type="primary" danger>
          Delete
        </Button>
        <Button onClick={() => handleEditToDo(toDo.id)} type="primary">
          Edit
        </Button>
      </div>
    </div>
  );
};
