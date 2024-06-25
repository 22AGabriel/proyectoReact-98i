const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getUsers = async () => {
  const res = await fetch(`${BACKEND_URL}/users`);
  const data = await res.json();

  if (!res.ok) throw new Error();

  return data;
};
