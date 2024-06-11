import PropTypes from 'prop-types';
import ContactsRow from './ContactsRow';

const ContactsTable = (props) => {
  const { contactos /*, setContactos*/ } = props;

  return (
    <table className='table mt-4'>
      <thead>
        <tr>
          <th>#</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {contactos.map((contact, index) => {
          return (
            <ContactsRow key={contact.codigo} contact={contact} index={index} />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactsTable;

ContactsTable.propTypes = {
  contactos: PropTypes.array.isRequired,
  setContactos: PropTypes.func.isRequired,
};
