import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon
import "./Footer.css";

function Footer() {
  const whatsappNumber = "+916282935948";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <footer className="footer bg-dark text-white mt-auto">
      <div className="container text-center py-3 d-flex flex-column align-items-center gap-2">
        <p className="mb-1">© 2025 Estilo Salon. All rights reserved.</p>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success d-flex align-items-center gap-2"
        >
          <FaWhatsapp size={20} />
          Connect on WhatsApp
        </a>
      </div>
    </footer>
  );
}

export default Footer;
