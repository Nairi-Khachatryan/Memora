type reqParams = {
  email: string;
  password: string;
};

type createUserResponce = {
  success: boolean;
  message: string;
  data?: {
    email: string;
    id: string;
  };
};

export const createUser = async ({ email, password }: reqParams) => {
  const res = await fetch('http://localhost:5051/auth/signUp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  return (await res.json()) as createUserResponce;
};
export const signInUser = async ({ email, password }: reqParams) => {
  const res = await fetch('http://localhost:5051/auth/signIn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  return (await res.json()) as createUserResponce;
};
