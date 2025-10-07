import type { valuesProp } from '../pages/editProfile/types';

export const cleanValues = (values: valuesProp) => {
  return Object.fromEntries(
    Object.entries(values).filter((_, v) => v !== undefined)
  );
};
