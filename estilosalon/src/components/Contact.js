import { useState } from "react";
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

    // ✅ Console Output
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

  return (
    <div className="Contact-bg container-fluid min-vh-100 d-flex align-items-center bg-light">
      <div className="row w-100 justify-content-center">
        <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow border-0 p-4">

            <h3 className="text-center fw-bold text-grey mb-1">
              📞 Contact Us
            </h3>
            <p className="text-center text-muted mb-4">
              We’d love to hear from you
            </p>

            {success && (
              <div className="alert alert-success text-center py-2">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="form-floating mb-3">
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
              </div>

              {/* Phone */}
              <div className="form-floating mb-3">
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
              </div>

              {/* Email */}
              <div className="form-floating mb-3">
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
              </div>

              {/* Message */}
              <div className="form-floating mb-4">
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
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-dark w-100 fw-bold"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
