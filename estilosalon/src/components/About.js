import React from 'react'
import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (

        <Container className="my-5 mt-5 pt-5" id="about">
            <div><h1 className='text-center'>About Us</h1></div>
            <Row>

                {/* LEFT SIDE - MAP */}
                <Col md={6}>

                    <div style={{ width: "100%", height: "350px" }}>
                        <iframe
                            title="Salon Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1667767620715!2d73.00995141064213!3d19.01237128210484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c39937a7b03d%3A0xd87e380a7574145e!2sEstilo!5e0!3m2!1sen!2sin!4v1764144317559!5m2!1sen!2sin"

                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </Col>

                {/* RIGHT SIDE - TEXT CONTENT */}
                <Col md={6} className="d-flex flex-column justify-content-center">
                    <h2>Visit Our Salon</h2>
                    <p>
                        Estilo Salon offers premium grooming services with modern styling,
                        expert professionals, and a relaxing luxury environment.
                    </p>

                    <p>
                        📍 Location: Shop No.3 , Ramtirth Apartment Plot No.1 Sector 44A seawoods Nerul Navi Mumbai <br />
                        📞 Phone: +918976581032 <br />
                        ⏰ Timing: 10 AM – 9 PM
                    </p>
                </Col>

            </Row>
        </Container>
    )
}
