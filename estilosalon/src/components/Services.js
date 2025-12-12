import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    {
      title: "Hair Styling",
      text: "Professional haircut and modern styling for men.",
      img: hair,
    },
    {
      title: "Beard Grooming",
      text: "Expert beard trimming and shaping service.",
      img: beard,
    },
    {
      title: "Hair Coloring",
      text: "Premium hair coloring using quality products.",
      img: color,
    },
    {
      title: "Facial Treatment",
      text: "Rejuvenating facial for clean and glowing skin.",
      img: facial,
    },
    {
      title: "Head Massage",
      text: "Relaxing massage for stress relief and hair growth.",
      img: massage,
    },
    {
      title: "Hair Spa",
      text: "Deep conditioning for smooth and healthy hair.",
      img: spa
    },
    {
      title: "Kids Haircut",
      text: "Safe and stylish haircut for kids.",
      img: kids,
    },
    {
      title: "Bridal Grooming",
      text: "Complete grooming package for special occasions.",
      img: bridal,
    },
    {
      title: "Premium Package",
      text: "All-in-one premium salon service package.",
      img: premium
    }
  ];

  return (
    
    
    <Row className= " services-bg g-4 mb-5">
      
      <div className=" text-center fw-bold mt-5 pt-5"><h2> Our Services</h2></div>
      {cardData.map((card, index) => (
        
        <Col key={index} md={4}>
          <Card className="service-card h-100 shadow-sm pb-5">
            <Card.Img variant="top" className="p-2" src={card.img} />
            <Card.Body className="text-center">
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Button variant="dark" className="service-btn" href="/BookAppointment">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardsGrid;
