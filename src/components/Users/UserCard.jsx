import PropTypes from 'prop-types';

const UserCard = (props) => {
  const { user } = props;

  return (
    <article className='card col-12 col-md-4 p-2'>
      <h2 className='fw-bold'>{user.name}</h2>
      <p className='text-sm'>{user.email}</p>
    </article>
  );
};
export default UserCard;

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
