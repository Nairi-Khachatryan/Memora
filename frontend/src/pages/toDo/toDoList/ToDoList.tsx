import { ToDoListItem } from '../toDoListItem/ToDoListItem';
import type { ToDoFormProps } from './types';
import s from './ToDoList.module.scss';

export const ToDoList: React.FC<ToDoFormProps> = ({ toDos, setToDos }) => {
  return (
    <div>
      {toDos.length ? (
        toDos.map((toDo) => (
          <ToDoListItem key={toDo.id} toDo={toDo} setToDos={setToDos} />
        ))
      ) : (
        <p className={s.noTasks}>No tasks yet</p>
      )}
    </div>
  );
};
