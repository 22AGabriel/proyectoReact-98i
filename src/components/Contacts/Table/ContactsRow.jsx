import PropTypes from 'prop-types';

const ContactsRow = (props) => {
  const { contact, index } = props;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img src={contact.imagen} alt={contact.nombre} />
      </td>
      <td>{contact.nombre}</td>
      <td>{contact.numero}</td>
      <td>{contact.email}</td>
      <td>Acciones</td>
    </tr>
  );
};

export default ContactsRow;

ContactsRow.propTypes = {
  contact: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
