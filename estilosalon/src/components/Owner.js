import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import owner from "./images/owner.jpg";

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
            <motion.img
              src={owner}
              alt="Salon Owner"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "420px", objectFit: "cover" }}
              
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              ~OWNER~
            </motion.h2>

            <motion.h5
              className="text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              zafar salmani
            </motion.h5>
          </Col>

          {/* ✅ Right Side - Owner Experience */}
          <Col md={6}>
            <motion.h2
              className="fw-bold mb-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Meet Our Salon Owner
            </motion.h2>

            <motion.h5
              className="text-success mb-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              15+ Years of Professional Experience
            </motion.h5>

            <motion.p
              className="text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Our salon is led by a highly experienced professional who has
              mastered modern hair cutting, beard styling, and grooming
              techniques with excellence.
            </motion.p>

            <motion.p
              className="text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              With premium products and personalized service, we ensure every
              client leaves looking confident and refreshed.
            </motion.p>

            {/* ✅ Animated Progress Bars */}
            <div>
              <h6>Hair cutting accuracy</h6>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1 }}
              >
                <ProgressBar now={now1} label={`${now1}%`} />
              </motion.div>

              <h6 className="mt-3">Client satisfaction</h6>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.2 }}
              >
                <ProgressBar now={now2} label={`${now2}%`} />
              </motion.div>

              <h6 className="mt-3">Customer Trust</h6>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.4 }}
              >
                <ProgressBar now={now3} label={`${now3}%`} />
              </motion.div>
            </div>

            {/* ✅ Animated Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="dark" href="/Services" className="mt-3">
                Available Services
              </Button>
            </motion.div>

          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Owner;