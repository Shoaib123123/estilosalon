import './Pricing.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from 'react';
import { motion } from "framer-motion";
import Fade from 'react-bootstrap/Fade';

function Pricing() {

  const [openCard, setOpenCard] = useState(null);

  // 🔥 container animation
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // 🔥 card animation
  const card = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Container className="my-5 pt-5 pb-5 mb-6">

      {/* Heading */}
      <motion.h1
        className="text-center fw-bold mb-3"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Services Pricing
      </motion.h1>

      <motion.p
        className="text-center text-muted mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Choose the best grooming service for you
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Row className="g-4">

          {/* CARD TEMPLATE */}
          {[ 
            { id:1, title:"Hair Cut", price:"₹150", desc:"Professional men's hair cutting & styling", detail:"Hair cutting with professional styling and finishing."},
            { id:2, title:"Beard Trim", price:"₹100", desc:"Perfect shaping & trimming for your beard", detail:"Expert beard shaping with clean finish."},
            { id:3, title:"Facial", price:"₹400", desc:"Deep skin cleaning & glow facial treatment", detail:"Premium facial with deep cleansing, massage & skin glow therapy."},
            { id:4, title:"Hair Spa", price:"₹600", desc:"Complete hair nourishment & relaxation", detail:"Deep conditioning hair spa with steam & scalp therapy."},
            { id:5, title:"Head Massage", price:"₹250", desc:"Relaxing oil massage for stress relief", detail:"Stress-relieving oil massage for headache & relaxation."},
            { id:6, title:"Full Body Massage", price:"₹999", desc:"Luxury full body deep relaxation therapy", detail:"Full body oil massage for pain relief & muscle relaxation."}
          ].map((item) => (

            <Col md={4} key={item.id}>
              <motion.div
                variants={card}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="pricing-card shadow h-100 text-center">
                  <Card.Body>
                    <h4 className="fw-bold">{item.title}</h4>
                    <h3 className="text-success my-2">{item.price}</h3>
                    <p>{item.desc}</p>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="dark"
                        className="book-btn"
                        onClick={() => setOpenCard(openCard === item.id ? null : item.id)}
                        aria-expanded={openCard === item.id}
                      >
                        Get Details
                      </Button>
                    </motion.div>

                    <Fade in={openCard === item.id}>
                      <div className="mt-2">
                        {item.detail}
                      </div>
                    </Fade>

                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

          ))}

        </Row>
      </motion.div>
    </Container>
  );
}

export default Pricing;