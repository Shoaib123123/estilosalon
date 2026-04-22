import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import './Services.css';

import hair from "./images/hair.png";
import beard from "./images/beard.png";
import color from "./images/color.png";
import facial from "./images/facial.png";
import massage from "./images/massage.png";
import spa from "./images/spa.png";
import kids from "./images/kids.png";
import bridal from "./images/bridal.png";
import premium from "./images/premium.png";

function CardsGrid() {

  const cardData = [
    { title: "Hair Styling", text: "Professional haircut and modern styling for men.", img: hair },
    { title: "Beard Grooming", text: "Expert beard trimming and shaping service.", img: beard },
    { title: "Hair Coloring", text: "Premium hair coloring using quality products.", img: color },
    { title: "Facial Treatment", text: "Rejuvenating facial for clean and glowing skin.", img: facial },
    { title: "Head Massage", text: "Relaxing massage for stress relief and hair growth.", img: massage },
    { title: "Hair Spa", text: "Deep conditioning for smooth and healthy hair.", img: spa },
    { title: "Kids Haircut", text: "Safe and stylish haircut for kids.", img: kids },
    { title: "Bridal Grooming", text: "Complete grooming package for special occasions.", img: bridal },
    { title: "Premium Package", text: "All-in-one premium salon service package.", img: premium }
  ];

  // 🔥 Container animation (stagger effect)
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // 🔥 Each card animation
  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Row className="services-bg g-4 mb-5">

        <div className="text-center fw-bold mt-5 pt-5">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
        </div>

        {cardData.map((card, index) => (
          <Col key={index} md={4}>

            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card className="service-card h-100 shadow-sm pb-5">
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                >
                  <Card.Img variant="top" className="p-2" src={card.img} />
                </motion.div>

                <Card.Body className="text-center">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="dark" className="service-btn" href="/BookAppointment">
                      Book Now
                    </Button>
                  </motion.div>

                </Card.Body>
              </Card>
            </motion.div>

          </Col>
        ))}

      </Row>
    </motion.div>
  );
}

export default CardsGrid;