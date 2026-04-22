import { useState } from "react";
import { motion } from "framer-motion";
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    console.log("📩 Contact Form Submitted:", formData);

    setTimeout(() => {
      setLoading(false);
      setSuccess("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  // 🔥 Container animation
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // 🔥 Field animation
  const field = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="Contact-bg container-fluid min-vh-100 d-flex align-items-center bg-light">
      <div className="row w-100 justify-content-center">
        <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">

          <motion.div
            className="card shadow border-0 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >

            {/* Title */}
            <motion.h3
              className="text-center fw-bold text-grey mb-1"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              📞 Contact Us
            </motion.h3>

            <motion.p
              className="text-center text-muted mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              We’d love to hear from you
            </motion.p>

            {/* Success Message */}
            {success && (
              <motion.div
                className="alert alert-success text-center py-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {success}
              </motion.div>
            )}

            <motion.form
              onSubmit={handleSubmit}
              variants={container}
              initial="hidden"
              animate="visible"
            >

              {/* Name */}
              <motion.div variants={field} className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Your Name</label>
              </motion.div>

              {/* Phone */}
              <motion.div variants={field} className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Phone Number"
                  name="phone"
                  maxLength="10"
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                  }
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone">Mobile Number</label>
              </motion.div>

              {/* Email */}
              <motion.div variants={field} className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email Address</label>
              </motion.div>

              {/* Message */}
              <motion.div variants={field} className="form-floating mb-4">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  id="message"
                  style={{ height: "110px" }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="message">Message</label>
              </motion.div>

              {/* Button */}
              <motion.button
                type="submit"
                className="btn btn-dark w-100 fw-bold"
                disabled={loading}
                variants={field}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

            </motion.form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Contact;