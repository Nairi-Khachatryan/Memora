export interface ToDoType {
  _id: string;
  text: string;
  isComplete: boolean;
  ownerId: string | null;
}

export interface ToDoListItemProps {
  toDo: ToDoType;
  // setToDos: React.Dispatch<React.SetStateAction<ToDoType[]>>;
}
