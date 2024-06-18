import { useEffect, useState } from 'react';
import ContactsFormV1 from '../components/Contacts/Form/ContactsFormV1';
import ContactsTable from '../components/Contacts/Table/ContactsTable';
import ContactsFormV2 from '../components/Contacts/Form/ContactsFormV2';
import ContactsFormV3 from '../components/Contacts/Form/ContactsFormV3';

const contactosLS = JSON.parse(localStorage.getItem('contactos')) || [];

const ContactsView = () => {
  const [contactos, setContactos] = useState(contactosLS);

  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(contactos));
  }, [contactos]);

  return (
    <>
      <h1>Cargar contacto</h1>
      <hr />
      <ContactsFormV1 contactos={contactos} setContactos={setContactos} />
      {/* <ContactsFormV2 contactos={contactos} setContactos={setContactos} /> */}
      {/* <ContactsFormV3 contactos={contactos} setContactos={setContactos} /> */}
      <ContactsTable contactos={contactos} setContactos={setContactos} />
    </>
  );
};
export default ContactsView;
