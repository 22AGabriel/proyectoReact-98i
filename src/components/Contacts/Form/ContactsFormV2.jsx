import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { Contacto } from '../Contacto';

const ContactsFormV2 = (props) => {
  const { contactos, setContactos } = props;

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = (datos) => {
    // Si llegamos acá, ya está todo validado y el e.preventDefault() realizado

    // Todo el resto de la lógica de contactos
    // 1. Crear contacto
    const nuevoContacto = new Contacto(
      datos.nombre,
      datos.numero,
      datos.email,
      datos.imagen
    );

    // 4. Guardar en lista (que luego actualiza localStorage)
    const nuevaLista = [...contactos, nuevoContacto];
    setContactos(nuevaLista);

    // 5. Mostrar mensaje de éxito
    alert('Contacto guardado');

    // 6. Resetear el form
    reset();
  };

  return (
    <form
      className='bg-white p-3 rounded text-dark'
      onSubmit={onSubmitRHF(handleSubmit)}
    >
      <fieldset className='mb-2'>
        <label className='form-label' htmlFor='input-nombre'>
          Nombre
        </label>
        <input
          required
          className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
          id='input-nombre'
          maxLength={40}
          minLength={3}
          placeholder='Juan Perez'
          type='text'
          {...register('nombre', {
            required: 'El campo nombre es requerido',
            maxLength: {
              value: 40,
              message: 'El nombre no puede tener más de 40 caracteres',
            },
            minLength: {
              value: 3,
              message: 'El nombre debe tener más de 3 caracteres',
            },
            pattern: {
              value: /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/,
              message: 'El nombre debe tener unicamente siglas y espacios',
            },
          })}
        />
        <div className='invalid-feedback'>
          <span className='badge text-bg-danger'>{errors.nombre?.message}</span>
        </div>
      </fieldset>
      <fieldset className='mb-2'>
        <label className='form-label' htmlFor='input-numero'>
          Numero
        </label>
        <input
          required
          className={`form-control ${errors.numero ? 'is-invalid' : ''}`}
          id='input-numero'
          maxLength={10}
          minLength={8}
          placeholder='381 123 4567'
          type='text'
          {...register('numero', {
            required: 'El campo número es requerido',
            maxLength: {
              value: 10,
              message: 'El número no puede tener más de 10 caracteres',
            },
            minLength: {
              value: 8,
              message: 'El número debe tener más de 8 caracteres',
            },
            pattern: {
              value: /^\d{8,10}$/,
              message:
                'El campo número debe indicar un número telefónico válido',
            },
          })}
        />
        <div className='invalid-feedback'>
          <span className='badge text-bg-danger'>{errors.numero?.message}</span>
        </div>
      </fieldset>
      <fieldset className='mb-2'>
        <label className='form-label' htmlFor='input-email'>
          Email
        </label>
        <input
          required
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          id='input-email'
          maxLength={50}
          minLength={3}
          placeholder='jperez@gmail.com'
          type='email'
          {...register('email', {
            required: 'El campo email es requerido',
            maxLength: {
              value: 50,
              message: 'El email no puede tener más de 50 caracteres',
            },
            minLength: {
              value: 3,
              message: 'El email debe tener más de 3 caracteres',
            },
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Ingrese un email válido',
            },
          })}
        />
        <div className='invalid-feedback'>
          <span className='badge text-bg-danger'>{errors.email?.message}</span>
        </div>
      </fieldset>
      <fieldset className='mb-2'>
        <label className='form-label' htmlFor='input-imagen'>
          Imagen
        </label>
        <input
          required
          className={`form-control ${errors.imagen ? 'is-invalid' : ''}`}
          id='input-imagen'
          minLength={3}
          placeholder='https://google.com'
          type='url'
          {...register('imagen', {
            required: 'El campo imagen es requerido',
            minLength: {
              value: 3,
              message: 'El campo imagen debe tener más de 3 caracteres',
            },
            pattern: {
              value:
                /^\b(?:https?|ftp):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]$/,
              message: 'Ingrese una URL válida en el campo imagen',
            },
          })}
        />
        <div className='invalid-feedback'>
          <span className='badge text-bg-danger'>{errors.imagen?.message}</span>
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

export default ContactsFormV2;

ContactsFormV2.propTypes = {
  contactos: PropTypes.array.isRequired,
  setContactos: PropTypes.func.isRequired,
};
