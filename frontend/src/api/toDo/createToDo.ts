import { API_TO_DO } from '../../routes/paths';

interface reqParams {
  isComplete: boolean;
  ownerId: string | null;
  text: string;
}

interface createToDoResponce {
  message: string;
  success: boolean;
}
export const createToDo = async ({ text, ownerId, isComplete }: reqParams) => {
  const res = await fetch(`${API_TO_DO}/createToDo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, ownerId, isComplete }),
  });

  return (await res.json()) as createToDoResponce;
};
