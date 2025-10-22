export interface ToDoType {
  id: string;
  text: string;
  isComplete: boolean;
}

export interface ToDoListItemProps {
  toDo: ToDoType;
  setToDos: React.Dispatch<React.SetStateAction<ToDoType[]>>;
}
