import { useQuery } from '@tanstack/react-query';

import { getUsersFn } from '../api/users';

import UsersList from '../components/Users/UsersList';
import LoadingUsers from '../components/Users/LoadingUsers';
import ErrorUsers from '../components/Users/ErrorUsers';

const UsersView = () => {
  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsersFn,
  });

  return (
    <div>
      <h1>Este es mi listado de usuarios</h1>
      {isLoading && <LoadingUsers />}
      {isError && <ErrorUsers />}
      {isSuccess && <UsersList users={users} />}
    </div>
  );
};
export default UsersView;
