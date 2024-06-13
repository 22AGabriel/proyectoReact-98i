import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import ContactsRow from './ContactsRow';

import './ContactsTable.css';

const ContactsTable = (props) => {
  const { contactos, setContactos } = props;

  const deleteContact = (idContact, nombreContact) => {
    Swal.fire({
      title: 'Atención',
      html: `<p>Estás por eliminar el contacto de <b>${nombreContact}</b>. Esta acción es irreversible</p>`,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Si, eliminar',
      confirmButtonColor: 'red',
      cancelButtonText: 'No',
    }).then((res) => {
      if (res.isConfirmed) {
        // Actualizamos lista de contactos, eliminando este
        const nuevaLista = contactos.filter((c) => c.codigo !== idContact);
        setContactos(nuevaLista);

        // Mostramos mensaje de exito
        Swal.fire({
          title: 'Contacto eliminado exitosamente',
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

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
            <ContactsRow
              contact={contact}
              deleteContact={deleteContact}
              index={index}
              key={contact.codigo}
            />
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
