import React, { useState } from "react";
import { motion } from "framer-motion";

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    gender: "",
    service: "",
    date: "",
    time: "",
    ampm: "AM",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let oldBookings = JSON.parse(localStorage.getItem("bookingData"));
    if (!Array.isArray(oldBookings)) {
      oldBookings = oldBookings ? [oldBookings] : [];
    }

    const updatedBookings = [formData, ...oldBookings];
    localStorage.setItem("bookingData", JSON.stringify(updatedBookings));

    alert("Appointment Booked Successfully!");

    setFormData({
      name: "",
      contact: "",
      location: "",
      gender: "",
      service: "",
      date: "",
      time: "",
      ampm: "AM",
    });
  };

  // 🔥 Container animation (stagger)
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // 🔥 Field animation
  const field = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mt-5 pt-5 mb-5 pb-5">
      <motion.div
        className="card p-4 shadow"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >

        {/* Title */}
        <motion.h3
          className="text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Book Appointment
        </motion.h3>

        <motion.form
          onSubmit={handleSubmit}
          variants={container}
          initial="hidden"
          animate="visible"
        >

          {/* Name */}
          <motion.div variants={field} className="mb-3">
            <label>Name *</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </motion.div>

          {/* Contact */}
          <motion.div variants={field} className="mb-3">
            <label>Contact *</label>
            <input
              type="tel"
              className="form-control"
              name="contact"
              required
              onChange={handleChange}
              value={formData.contact}
            />
          </motion.div>

          {/* Location */}
          <motion.div variants={field} className="mb-3">
            <label>Location *</label>
            <input
              type="text"
              className="form-control"
              name="location"
              required
              onChange={handleChange}
              value={formData.location}
            />
          </motion.div>

          {/* Gender */}
          <motion.div variants={field} className="mb-3">
            <label>Gender *</label>
            <select
              className="form-select"
              name="gender"
              required
              onChange={handleChange}
              value={formData.gender}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </motion.div>

          {/* Service */}
          <motion.div variants={field} className="mb-3">
            <label>Service Type *</label>
            <select
              className="form-select"
              name="service"
              required
              onChange={handleChange}
              value={formData.service}
            >
              <option value="">Select Service</option>
              <option>Facial Treatment</option>
              <option>Head Massage</option>
              <option>Hair Spa</option>
              <option>Kids Haircut</option>
              <option>Bridal Grooming</option>
              <option>Premium Package</option>
            </select>
          </motion.div>

          {/* Date */}
          <motion.div variants={field} className="mb-3">
            <label>Preferred Date *</label>
            <input
              type="date"
              className="form-control"
              name="date"
              required
              onChange={handleChange}
              value={formData.date}
            />
          </motion.div>

          {/* Time */}
          <motion.div variants={field} className="mb-3">
            <label>Preferred Time *</label>
            <div className="d-flex gap-2">
              <input
                type="time"
                className="form-control"
                name="time"
                required
                onChange={handleChange}
                value={formData.time}
              />
              <select
                className="form-select"
                name="ampm"
                onChange={handleChange}
                value={formData.ampm}
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </motion.div>

          {/* Button */}
          <motion.button
            type="submit"
            className="btn btn-dark w-100"
            variants={field}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
          </motion.button>

        </motion.form>
      </motion.div>
    </div>
  );
}

export default BookAppointment;