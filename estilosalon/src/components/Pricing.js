import './Pricing.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from 'react';

import Fade from 'react-bootstrap/Fade';



function Pricing() {

  const [openCard, setOpenCard] = useState(null);


  return (
    <Container className="my-5 pt-5 pb-5 mb-6">
      <h1 className="text-center fw-bold mb-3">Services Pricing</h1>
      <p className="text-center text-muted mb-5">
        Choose the best grooming service for you
      </p>

      <Row className="g-4">


        <Col md={4}>
          <Card className="pricing-card shadow h-100 text-center">
            <Card.Body>
              <h4 className="fw-bold">Hair Cut</h4>
              <h3 className="text-success my-2">₹150</h3>
              <p>Professional men's hair cutting & styling</p>

              <Button
                variant="dark"
                className="book-btn"
                onClick={() => setOpenCard(openCard === 1 ? null : 1)}
                aria-expanded={openCard === 1}
              >
                Get Details
              </Button>

              <Fade in={openCard === 1}>
                <div className="mt-2">
                  Hair cutting with professional styling and finishing.
                </div>
              </Fade>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="pricing-card shadow h-100 text-center">
            <Card.Body>
              <h4 className="fw-bold">Beard Trim</h4>
              <h3 className="text-success my-2">₹100</h3>
              <p>Perfect shaping & trimming for your beard</p>

              <Button
                variant="dark"
                className="book-btn"
                onClick={() => setOpenCard(openCard === 2 ? null : 2)}
                aria-expanded={openCard === 2}
              >
                Get Details
              </Button>

              <Fade in={openCard === 2}>
                <div className="mt-2">
                  Expert beard shaping with clean finish.
                </div>
              </Fade>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="pricing-card shadow h-100 text-center">
            <Card.Body>
              <h4 className="fw-bold">Facial</h4>
              <h3 className="text-success my-2">₹400</h3>
              <p>Deep skin cleaning & glow facial treatment</p>

              <Button
                variant="dark"
                className="book-btn"
                onClick={() => setOpenCard(openCard === 3 ? null : 3)}
                aria-expanded={openCard === 3}
              >
                Get Details
              </Button>

              <Fade in={openCard === 3}>
                <div className="mt-2">
                  Premium facial with deep cleansing, massage & skin glow therapy.
                </div>
              </Fade>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="pricing-card shadow h-100 text-center">
            <Card.Body>
              <h4 className="fw-bold">Hair Spa</h4>
              <h3 className="text-success my-2">₹600</h3>
              <p>Complete hair nourishment & relaxation</p>

              <Button
                variant="dark"
                className="book-btn"
                onClick={() => setOpenCard(openCard === 4 ? null : 4)}
                aria-expanded={openCard === 4}
              >
                Get Details
              </Button>

              <Fade in={openCard === 4}>
                <div className="mt-2">
                  Deep conditioning hair spa with steam & scalp therapy.
                </div>
              </Fade>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="pricing-card shadow h-100 text-center">
            <Card.Body>
              <h4 className="fw-bold">Head Massage</h4>
              <h3 className="text-success my-2">₹250</h3>
              <p>Relaxing oil massage for stress relief</p>

              <Button
                variant="dark"
                className="book-btn"
                onClick={() => setOpenCard(openCard === 5 ? null : 5)}
                aria-expanded={openCard === 5}
              >
                Get Details
              </Button>

              <Fade in={openCard === 5}>
                <div className="mt-2">
                  Stress-relieving oil massage for headache & relaxation.
                </div>
              </Fade>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="pricing-card shadow h-100 text-center">
            <Card.Body>
              <h4 className="fw-bold">Full Body Massage</h4>
              <h3 className="text-success my-2">₹999</h3>
              <p>Luxury full body deep relaxation therapy</p>

              <Button
                variant="dark"
                className="book-btn"
                onClick={() => setOpenCard(openCard === 6 ? null : 6)}
                aria-expanded={openCard === 6}
              >
                Get Details
              </Button>

              <Fade in={openCard === 6}>
                <div className="mt-2">
                  Full body oil massage for pain relief & muscle relaxation.
                </div>
              </Fade>
            </Card.Body>
          </Card>
        </Col>




      </Row>
    </Container>
  );
}

export default Pricing;
