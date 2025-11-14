export interface ToDoType {
  text: string;
  _id: string;
  isComplete: boolean;
  ownerId: string | null;
}

export interface ToDoFormProps {
  toDos: ToDoType[];
  // setToDos: React.Dispatch<React.SetStateAction<ToDoType[]>>;
}
