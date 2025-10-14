export type AvatarType = {
  name: string;
  surname: string;
  ownerId: string;
  phone?: string;
  role?: string;
  email?: string;
  idx: number;
  gender?: string;
  attribute?: Array<{ topic: string; value: string }>;
};
