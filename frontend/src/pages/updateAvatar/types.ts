export interface UpdateAvatarInterface {
  name: string;
  surname: string;
  phone: string;
  role: string;
  email: string;
  attribute?: Array<{ topic: string; value: string }>;
}
