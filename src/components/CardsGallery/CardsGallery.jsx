import Card from '../Card/Card';
import "./CardsGallery.css"

const CardsGallery = () => {
  return (
    <section className='cards-gallery'>
      <Card
        imgUrl='https://img.buzzfeed.com/buzzfeed-static/static/2017-06/26/17/campaign_images/buzzfeed-prod-fastlane-03/que-personaje-de-super-mario-bros-eres-2-18601-1498512351-3_dblbig.jpg?resize=1200:*'
        titulo='Este es un título'
        descripcion='Esta es una descripcion'
      />
      <Card
        imgUrl='https://fotos.perfil.com/2022/09/13/trim/987/555/super-mario-bros-cumplio-37-anos-desde-su-lanzamiento-1418984.jpg'
        titulo='Mario 2'
        descripcion='Esta es una descripcion'
      />
      <Card
        imgUrl='https://i.blogs.es/2377dd/super-mario-bros-por-que-el-personaje-mas-famoso-de-nintendo-se-llama-mario-2/1366_2000.jpeg'
        titulo='Mario 3'
        descripcion='Esta es una descripcion'
      />
    </section>
  );
};
export default CardsGallery;
