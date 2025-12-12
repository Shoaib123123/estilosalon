import React, { useState } from "react";

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

    // ✅ Safely get old bookings from localStorage
    let oldBookings = JSON.parse(localStorage.getItem("bookingData"));
    if (!Array.isArray(oldBookings)) {
      oldBookings = oldBookings ? [oldBookings] : [];
    }

    // ✅ Add new booking on top
    const updatedBookings = [formData, ...oldBookings];

    // ✅ Save updated bookings to localStorage
    localStorage.setItem("bookingData", JSON.stringify(updatedBookings));

    alert("Appointment Booked Successfully!");

    // ✅ Clear form after submission
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

  return (
    <div className="container mt-5 pt-5 mb-5 pb-5">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-4">Book Appointment</h3>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label>Name *</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          {/* Contact */}
          <div className="mb-3">
            <label>Contact *</label>
            <input
              type="tel"
              className="form-control"
              name="contact"
              required
              onChange={handleChange}
              value={formData.contact}
            />
          </div>

          {/* Location */}
          <div className="mb-3">
            <label>Location *</label>
            <input
              type="text"
              className="form-control"
              name="location"
              required
              onChange={handleChange}
              value={formData.location}
            />
          </div>

          {/* Gender */}
          <div className="mb-3">
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
          </div>

          {/* Service Type */}
          <div className="mb-3">
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
          </div>

          {/* Date */}
          <div className="mb-3">
            <label>Preferred Date *</label>
            <input
              type="date"
              className="form-control"
              name="date"
              required
              onChange={handleChange}
              value={formData.date}
            />
          </div>

          {/* Time */}
          <div className="mb-3">
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
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-dark w-100">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
