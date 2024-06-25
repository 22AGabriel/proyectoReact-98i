import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const UserCard = (props) => {
  const { user } = props;

  const handleDelete = async () => {
    const action = await Swal.fire({
      title: 'Atención',
      icon: 'warning',
      html: `¿Estás seguro que deseas eliminar al usuario <b>${user.name}</b>?`,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
    });

    if (action.isConfirmed) {
      console.log(`Eliminar usuario de id ${user.id}`);
    }
  };

  return (
    <article className='col-12 col-md-4'>
      <div className='card p-2 h-100 justify-content-between'>
        <div>
          <h2 className='fw-bold'>{user.name}</h2>
          <p className='text-sm'>{user.email}</p>
        </div>
        <div className='text-end'>
          <button className='btn btn-danger' onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
};
export default UserCard;

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
