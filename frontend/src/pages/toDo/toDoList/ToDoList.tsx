import { ToDoListItem } from '../toDoListItem/ToDoListItem';
import type { ToDoFormProps } from './types';
import s from './ToDoList.module.scss';

export const ToDoList: React.FC<ToDoFormProps> = ({ toDos }) => {
  return (
    <div>
      {toDos.length ? (
        toDos.map((toDo) => <ToDoListItem key={toDo._id} toDo={toDo} />)
      ) : (
        <p className={s.noTasks}>No tasks yet</p>
      )}
    </div>
  );
};
