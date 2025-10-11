import type { valuesProp } from '../pages/editProfile/EditProfile.types';

export const cleanValues = (values: valuesProp) => {
  return Object.fromEntries(
    Object.entries(values).filter((_, v) => v !== undefined)
  );
};
