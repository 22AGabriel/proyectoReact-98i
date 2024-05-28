import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { imgUrl, titulo, descripcion } = props;

  return (
    <article className='card'>
      <img src={imgUrl} alt='Imagen de mario' />
      <div className='card-body'>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};

export default Card;
