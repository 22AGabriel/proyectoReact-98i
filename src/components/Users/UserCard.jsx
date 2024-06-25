import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import { deleteUserFn } from '../../api/users';

const UserCard = (props) => {
  const { user } = props;

  const queryClient = useQueryClient();

  const { mutate: deleteUser } = useMutation({
    onSuccess: () => {
      toast.dismiss();
      toast.success('Usuario eliminado');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: () => {
      toast.dismiss();
      toast.error('Ocurrió un error eliminando el usuario');
    },
    mutationFn: deleteUserFn,
  });

  const handleDelete = async () => {
    const action = await Swal.fire({
      title: 'Atención',
      icon: 'warning',
      text: `¿Estás seguro que deseas eliminar a ${user.name}?`,
      confirmButtonText: 'Si, eliminar',
      confirmButtonColor: '#ff5555',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
    });

    if (action.isConfirmed) {
      toast.loading();
      deleteUser(user.id);
    }
  };

  return (
    <article className='col-12 col-md-4'>
      <div className='card p-2 h-100 flex flex-col justify-content-between'>
        <div>
          <h2 className='fw-bold'>{user.name}</h2>
          <p className='text-sm'>{user.email}</p>
        </div>
        <div className='text-end'>
          <button className='btn btn-danger mt-2' onClick={handleDelete}>
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
