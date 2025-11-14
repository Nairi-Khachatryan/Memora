import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createToDo } from '../../api/toDo/createToDo';
import { useAppSelector } from '../../app/hooks';
import { getToDo } from '../../api/toDo/getToDo';
import { useToast } from '../../hooks/useToast';
import { ToDoForm } from './toDoForm/ToDoForm';
import { ToDoList } from './toDoList/ToDoList';
import React, { useState } from 'react';
import s from './ToDo.module.scss';

export const ToDo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const USER_ID = useAppSelector((state) => state.user.user.id);
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  interface ToDoType {
    ownerId: string;
    text: string;
    isComplete: boolean;
    _id: string;
  }

  const { data: toDos = [], isLoading } = useQuery<ToDoType[]>({
    queryKey: ['toDoes', USER_ID],
    queryFn: () => getToDo(USER_ID),
    enabled: !!USER_ID,
  });

  const { mutate: addToDo } = useMutation({
    mutationFn: createToDo,
    onSuccess: (res) => {
      if (!res.success) {
        showToast({ type: 'error', message: res.message });
        return;
      }

      showToast({ type: 'success', message: res.message });
      setInputValue('');
      queryClient.invalidateQueries({ queryKey: ['toDoes', USER_ID] });
    },
  });

  const handleAddToDo = () => {
    if (!inputValue.trim()) return;
    addToDo({ text: inputValue, isComplete: false, ownerId: USER_ID });
  };

  return (
    <div className={s.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ToDoForm
            handleAddToDo={handleAddToDo}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <ToDoList toDos={toDos} />
        </>
      )}
    </div>
  );
};
