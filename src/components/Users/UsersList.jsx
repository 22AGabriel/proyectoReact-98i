import PropTypes from 'prop-types';
import UserCard from './UserCard';

const UsersList = (props) => {
  const { users } = props;

  return (
    <section className='row g-2'>
      {users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </section>
  );
};

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};
