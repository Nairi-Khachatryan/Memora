export type AvatarType = {
  name: string;
  surname: string;
  ownerId: string;
  phone?: string;
  role?: string;
  email?: string;
  idx: number;
  gender?: string;
};

export interface AvatarFormProps {
  loading: boolean;
  onSubmit: (values: AvatarType) => void;
}
