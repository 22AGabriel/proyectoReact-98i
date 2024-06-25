import { useQuery } from '@tanstack/react-query';

import { getUsers } from '../api/users';

import UsersList from '../components/Users/UsersList';
import LoadingUsers from '../components/Users/LoadingUsers';

const UsersView = () => {
  const {
    data: users,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return (
    <div>
      <h1 className='mb-2'>Este es mi listado de usuarios</h1>
      {isLoading && <LoadingUsers />}
      {isError && <p className='alert alert-danger'>Ocurrió un error</p>}
      {isSuccess && <UsersList users={users} />}
    </div>
  );
};
export default UsersView;
