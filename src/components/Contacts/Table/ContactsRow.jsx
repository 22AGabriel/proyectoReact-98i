import PropTypes from 'prop-types';

const ContactsRow = (props) => {
  const { contact, index, deleteContact } = props;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img
          alt={contact.nombre}
          className='imagen-contacto'
          src={contact.imagen}
        />
      </td>
      <td>{contact.nombre}</td>
      <td>{contact.numero}</td>
      <td>{contact.email}</td>
      <td>
        <button className='btn btn-warning me-2' type='button'>
          Editar
        </button>
        <button
          className='btn btn-danger'
          type='button'
          onClick={() => deleteContact(contact.codigo, contact.nombre)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ContactsRow;

ContactsRow.propTypes = {
  contact: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
