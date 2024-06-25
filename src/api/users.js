const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getUsersFn = async () => {
  const res = await fetch(`${BACKEND_URL}/users`);
  const data = await res.json();

  return data;
};
