import { useRef } from 'react';
import PropTypes from 'prop-types';

import {
  validateEmail,
  validateName,
  validateNumber,
  validateUrl,
} from '../../../utilities/validators';

import { Contacto } from '../Contacto';

const ContactsFormV1 = (props) => {
  const { contactos, setContactos } = props;

  const $inputNombre = useRef();
  const $inputNumero = useRef();
  const $inputEmail = useRef();
  const $inputImagen = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Validacion de campos
    if (
      !validateName($inputNombre.current) ||
      !validateNumber($inputNumero.current) ||
      !validateEmail($inputEmail.current) ||
      !validateUrl($inputImagen.current)
    ) {
      return;
    }

    // 2. Obtención de valores
    const nombre = $inputNombre.current.value;
    const numero = $inputNumero.current.value;
    const email = $inputEmail.current.value;
    const imagen = $inputImagen.current.value;

    // 3. Crear contacto
    const nuevoContacto = new Contacto(nombre, numero, email, imagen);

    // 4. Guardar en lista (que luego actualiza localStorage)
    const nuevaLista = [...contactos, nuevoContacto];
    setContactos(nuevaLista);

    // 5. Mostrar mensaje de éxito
    alert('Contacto guardado');

    // 6. Reiniciar formulario
    // e.target.reset(); -> Lo mismo
    $inputNombre.current.value = '';
    $inputNumero.current.value = '';
    $inputEmail.current.value = '';
    $inputImagen.current.value = '';

    // 7. Resetear clases
    $inputNombre.current.classList.remove('is-valid');
    $inputNumero.current.classList.remove('is-valid');
    $inputEmail.current.classList.remove('is-valid');
    $inputImagen.current.classList.remove('is-valid');
  };

  return (
    <form className='bg-white p-3 rounded text-dark' onSubmit={handleSubmit}>
      <fieldset className='mb-2'>
        <label htmlFor='input-nombre' className='form-label'>
          Nombre
        </label>
        <input
          required
          placeholder='Juan Perez'
          type='text'
          id='input-nombre'
          className='form-control'
          ref={$inputNombre}
          maxLength={40}
          minLength={3}
        />
        <div className='invalid-feedback'>
          <span className='badge text-bg-danger'>Ingrese un nombre valido</span>
        </div>
      </fieldset>
      <fieldset className='mb-2'>
        <label htmlFor='input-numero' className='form-label'>
          Numero
        </label>
        <input
          required
          placeholder='381 123 4567'
          type='text'
          id='input-numero'
          className='form-control'
          ref={$inputNumero}
          minLength={8}
          maxLength={10}
        />
        <div className='invalid-feedback'>
          <span className='badge text-bg-danger'>Ingrese un número valido</span>
        </div>
      </fieldset>
      <fieldset className='mb-2'>
        <label htmlFor='input-email' className='form-label'>
          Email
        </label>
        <input
          required
          placeholder='jperez@gmail.com'
          type='email'
          id='input-email'
          className='form-control'
          ref={$inputEmail}
          minLength={3}
          maxLength={50}
        />
        <div className='invalid-feedback'>
          <span className='badge text-bg-danger'>Ingrese un email valido</span>
        </div>
      </fieldset>
      <fieldset className='mb-2'>
        <label htmlFor='input-imagen' className='form-label'>
          Imagen
        </label>
        <input
          required
          placeholder='https://google.com'
          type='imagen'
          id='input-imagen'
          className='form-control'
          ref={$inputImagen}
          minLength={3}
        />
        <div className='invalid-feedback'>
          <span className='badge text-bg-danger'>Ingrese un imagen valido</span>
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

export default ContactsFormV1;

ContactsFormV1.propTypes = {
  contactos: PropTypes.array.isRequired,
  setContactos: PropTypes.func.isRequired,
};
