import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import './Carousel.css'; // ✅ add this

function CarouselFadeExample() {

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariant = {
    hidden: { scale: 1.2, opacity: 0.8 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <Carousel fade className='mt-0' interval={3000}>

      {/* Slide 1 */}
      <Carousel.Item>
        <div className="carousel-wrapper">
          <motion.img
            src={img1}
            className="d-block w-100 carousel-img"
            alt="Slide 1"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          />
        </div>

        <Carousel.Caption>
          <motion.h3
            className='text-start'
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Best Service Provider
          </motion.h3>

          <motion.p
            className='text-start'
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            We prioritize our customers.
          </motion.p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div className="carousel-wrapper">
          <motion.img
            src={img2}
            className="d-block w-100 carousel-img"
            alt="Slide 2"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          />
        </div>

        <Carousel.Caption>
          <motion.h3 className='text-start' {...{ variants: textVariant, initial: "hidden", animate: "visible", transition: { delay: 0.3 } }}>
            Best Service Provider
          </motion.h3>

          <motion.p className='text-start' {...{ variants: textVariant, initial: "hidden", animate: "visible", transition: { delay: 0.6 } }}>
            Your Style, Our Priority.
          </motion.p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div className="carousel-wrapper">
          <motion.img
            src={img3}
            className="d-block w-100 carousel-img"
            alt="Slide 3"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          />
        </div>

        <Carousel.Caption>
          <motion.h3 className='text-start' {...{ variants: textVariant, initial: "hidden", animate: "visible", transition: { delay: 0.3 } }}>
            Best Service Provider
          </motion.h3>

          <motion.p className='text-start' {...{ variants: textVariant, initial: "hidden", animate: "visible", transition: { delay: 0.6 } }}>
            Serving You with Style & Passion.
          </motion.p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselFadeExample;