import { deleteToDo } from '../../../api/toDo/deleteToDo';
import { useToast } from '../../../hooks/useToast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { ToDoListItemProps } from './types';
import s from './ToDoList.module.scss';
import { useState } from 'react';
import { Button } from 'antd';
import type React from 'react';

export const ToDoListItem: React.FC<ToDoListItemProps> = ({ toDo }) => {
  const [editMode, setEditMode] = useState(false);
  const [editInputValue, setEditInputValue] = useState(toDo.text);
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  // ✅ delete mutation
  const { mutate: removeToDo } = useMutation({
    mutationFn: deleteToDo,
    onSuccess: (res) => {
      if (!res.success) {
        showToast({ type: 'error', message: res.message });
        return;
      }

      showToast({ type: 'success', message: res.message });
      // 🔥 Обновляем список
      queryClient.invalidateQueries({ queryKey: ['toDoes'] });
    },
  });

  const handleDeleteToDo = (id: string) => {
    removeToDo(id);
  };

  const handleEditToDo = (id: string) => {
    const oldValue = toDo.text;
    const currentValue = editInputValue;

    if (oldValue === currentValue) {
      return showToast({ type: 'error', message: 'Nothing to update' });
    }
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
          <Button onClick={() => handleEditToDo(toDo._id)} type="primary">
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
              readOnly
            />
            <h1 className={`${s.text} ${toDo.isComplete ? s.completed : ''}`}>
              {toDo.text}
            </h1>
          </div>
          <div>
            <Button
              onClick={() => handleDeleteToDo(toDo._id)}
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
