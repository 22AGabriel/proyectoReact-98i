import PropTypes from 'prop-types';
import { useState } from 'react';

const ContactsFormV3 = (props) => {
  const { contactos, setContactos } = props;

  console.log('Me rendericé');

  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contactos, setContactos);
  };

  return (
    <form className='bg-white p-3 rounded text-dark' onSubmit={handleSubmit}>
      <fieldset className='mb-2'>
        <label className='form-label' htmlFor='input-nombre'>
          Nombre
        </label>
        <input
          required
          className='form-control'
          id='input-nombre'
          maxLength={40}
          minLength={3}
          placeholder='Juan Perez'
          type='text'
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <div className='invalid-feedback'>
          <span className='badge text-bg-danger'>Ingrese un nombre valido</span>
        </div>
      </fieldset>
      <fieldset className='mb-2'>
        <label className='form-label' htmlFor='input-numero'>
          Numero
        </label>
        <input
          required
          className='form-control'
          id='input-numero'
          maxLength={10}
          minLength={8}
          placeholder='381 123 4567'
          type='text'
          value={numero}
          onChange={(e) => {
            setNumero(e.target.value);
          }}
        />
        <div className='invalid-feedback'>
          <span className='badge text-bg-danger'>Ingrese un número valido</span>
        </div>
      </fieldset>
      <fieldset className='mb-2'>
        <label className='form-label' htmlFor='input-email'>
          Email
        </label>
        <input
          required
          className='form-control'
          id='input-email'
          maxLength={50}
          minLength={3}
          placeholder='jperez@gmail.com'
          type='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className='invalid-feedback'>
          <span className='badge text-bg-danger'>Ingrese un email valido</span>
        </div>
      </fieldset>
      <fieldset className='mb-2'>
        <label className='form-label' htmlFor='input-imagen'>
          Imagen
        </label>
        <input
          required
          className='form-control'
          id='input-imagen'
          minLength={3}
          placeholder='https://google.com'
          type='url'
          value={imagen}
          onChange={(e) => {
            setImagen(e.target.value);
          }}
        />
        <div className='invalid-feedback'>
          <span className='badge text-bg-danger'>
            Ingrese una imagen valida
          </span>
        </div>
      </fieldset>
      <div className='text-end mt-3'>
        <button className='btn btn-danger' type='submit'>
          Guardar
        </button>
      </div>
    </form>
  );
};
export default ContactsFormV3;

ContactsFormV3.propTypes = {
  contactos: PropTypes.array.isRequired,
  setContactos: PropTypes.func.isRequired,
};
