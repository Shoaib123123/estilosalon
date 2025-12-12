import React, { Profiler } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Row, Col, Button } from "react-bootstrap";
import owner from "./images/owner.jpg"; // ✅ CORRECT way to import image

function Owner() {
    const now1 = 98;
    const now2 = 95;
    const now3 = 99;
  return (
    <section className="p-5 mb-5 bg-light">
      <Container>
        <Row className="align-items-center">

          {/* ✅ Left Side - Owner Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src={owner}
              alt="Salon Owner"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "420px", objectFit: "cover" }}

            />
            <h2>~OWNER~</h2>
            <h5 className="text-muted">zafar salmani</h5>
          </Col>

          {/* ✅ Right Side - Owner Experience */}
          <Col md={6}>
            <h2 className="fw-bold mb-3">Meet Our Salon Owner</h2>
            <h5 className="text-success mb-3">15+ Years of Professional Experience</h5>

            <p className="text-muted">
              Our salon is led by a highly experienced professional who has
              mastered modern hair cutting, beard styling, and grooming
              techniques with excellence.
            </p>

            <p className="text-muted">
              With premium products and personalized service, we ensure every
              client leaves looking confident and refreshed.
            </p>
            <p className="text-muted">
                <h2>Hair cutting accuracy</h2>
                <ProgressBar now={now1} label={`${now1}%`} />;
                <h2>Client satisfaction</h2>
                <ProgressBar now={now2} label={`${now2}%`} />;
                <h2>Customer Trust</h2>
                <ProgressBar now={now3} label={`${now3}%`} />;
            </p>

            <Button variant="dark" href="/Services" className="mt-2">
               Available Services
            </Button>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Owner;
