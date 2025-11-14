import { API_TO_DO } from '../../routes/paths';

export const deleteToDo = async (toDoId: string) => {
  const res = await fetch(`${API_TO_DO}/deleteToDo/${toDoId}`, {
    method: 'DELETE',
  });

  return await res.json();
};
