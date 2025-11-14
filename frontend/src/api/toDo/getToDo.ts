import { API_TO_DO } from '../../routes/paths';

export const getToDo = async (userId: string | null) => {
  const res = await fetch(`${API_TO_DO}/getToDo/${userId}`);

  const data = await res.json();

  if (!data.success) {
    return data.data;
  }

  return data.data ?? [];
};
