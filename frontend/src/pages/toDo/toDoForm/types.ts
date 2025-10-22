export interface ToDoFormProps {
  inputValue: string;
  handleAddToDo: () => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
