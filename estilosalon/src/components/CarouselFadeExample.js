import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';

function CarouselFadeExample() {
  return (
    <Carousel fade className='mt-5'>
      <Carousel.Item>
        <img src={img1} className="d-block w-100" alt="Slide 1" />
        <Carousel.Caption>
          <h3 className='text-start'> Best Service Provider </h3>
          <p className='text-start'>We prioritize our customers.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img2} className="d-block w-100" alt="Slide 2" />
        <Carousel.Caption>
          <h3 className='text-start'>Best Service Provider</h3>
          <p className='text-start'>Your Style, Our Priority.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img3} className="d-block w-100" alt="Slide 3" />
        <Carousel.Caption>
          <h3 className='text-start'>Best Service Provider</h3>
          <p className='text-start'>Serving You with Style & Passion.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
