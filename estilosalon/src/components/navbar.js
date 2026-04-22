import logo from "./images/logo.jpeg";
import { Button } from "react-bootstrap";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        <a className="navbar-brand d-flex  align-items-center" href="/Body">
          <img
            src={logo}
            alt="Estilo Salon Logo"
            height="40"
            className="me-2"
          />
          <span className="fw-bold brand-text">Estilo Salon</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            
            {["Home", "Services", "Pricing", "Contact", "About"].map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link fw-2 nav-box" href={`/${item === "Home" ? "Body" : item}`}>
                  {item}
                </a>
              </li>
            ))}

            <li className="nav-item ms-2">
              <Button className="btn btn-gold shadow nav-btn" href="/BookAppointment">
                Book Appointment
              </Button>
            </li>

            <li className="nav-item ms-2">
              <Button className="btn btn-danger shadow nav-btn" href="/Superuser">
                Super User
              </Button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;