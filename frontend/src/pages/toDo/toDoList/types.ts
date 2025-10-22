export interface ToDoType {
  text: string;
  id: string;
  isComplete: boolean;
}

export interface ToDoFormProps {
  toDos: ToDoType[];
  setToDos: React.Dispatch<React.SetStateAction<ToDoType[]>>;
}
