import { useEffect, useState } from 'react';

import UsersList from '../components/Users/UsersList';
import LoadingUsers from '../components/Users/LoadingUsers';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const UsersView = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(
        `${BACKEND_URL}/users`
      );
      const data = await res.json();

      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 1000);
  }, []);

  const isLoading = users.length === 0;

  return (
    <div>
      <h1>Este es mi listado de usuarios</h1>
      {isLoading ? <LoadingUsers /> : <UsersList users={users} />}
    </div>
  );
};
export default UsersView;
