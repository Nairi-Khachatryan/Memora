export interface UpdateAvatarInterface {
  name: string;
  role: string;
  email: string;
  phone: string;
  surname: string;
  attribute?: Array<{ topic: string; value: string }>;
}
