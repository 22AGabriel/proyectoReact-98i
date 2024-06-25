import { useMutation, useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

import { deleteUserFn } from '../../api/users';

const UserCard = (props) => {
  const { user } = props;

  const queryClient = useQueryClient();

  const { mutate: deleteUser } = useMutation({
    mutationFn: deleteUserFn,
    onError: () => {
      toast.dismiss();
      toast.error('Ocurrió un error al eliminar el usuario');
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success('Usuario eliminado');

      // Recargamos los usuarios
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });

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
      toast.loading(`Eliminando a ${user.name}`);
      deleteUser(user.id);
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
