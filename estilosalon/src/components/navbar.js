import logo from "./images/logo.jpeg";
import { Button } from "react-bootstrap";
import "./ButtonStyles.css";



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/Body">
          <img
            src={logo}
            alt="Estilo Salon Logo"
            height="40"
            className="me-2"
          />
          <span className="fw-bold text-white">Estilo Salon</span>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/Body">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/Services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/Pricing">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/Contact">Contact</a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link active" href="/About">About</a>
            </li>
            <li className="nav-item ">
              <Button className="btn btn-gold shadow" href="/BookAppointment">
                Book Appointment
              </Button>
            </li>
            <li className="nav-item  ms-2 ">
              <Button className="btn btn-danger shadow" href="/Superuser">
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
