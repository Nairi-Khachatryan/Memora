import { useAppSelector } from '../app/hooks';

export const useAuth = () => {
  return useAppSelector((state) => state.user.email);
};
