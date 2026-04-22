import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const whatsappNumber = "+916282935948";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <motion.footer
      className="footer bg-dark text-white mt-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container text-center py-3 d-flex flex-column align-items-center gap-2">

        {/* Text */}
        <motion.p
          className="mb-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          © 2025 Estilo Salon. All rights reserved.
        </motion.p>

        {/* WhatsApp Button */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success d-flex align-items-center gap-2"

          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: [1, 1.05, 1], // 🔥 subtle pulse
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaWhatsapp size={20} />
          Connect on WhatsApp
        </motion.a>

      </div>
    </motion.footer>
  );
}

export default Footer;