import React, { useState, useEffect } from "react";

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  // Load bookings from localStorage
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookingData")) || [];
    setBookings(Array.isArray(savedBookings) ? savedBookings : [savedBookings]);
  }, []);

  // Delete single booking
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      const updatedBookings = bookings.filter((_, i) => i !== index);
      setBookings(updatedBookings);
      localStorage.setItem("bookingData", JSON.stringify(updatedBookings));
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Admin Dashboard</h3>

      {bookings.length > 0 ? (
        bookings.map((booking, index) => (
          <div key={index} className="card p-4 shadow mb-3 position-relative">
            <p><b>Name:</b> {booking.name}</p>
            <p><b>Contact:</b> {booking.contact}</p>
            <p><b>Location:</b> {booking.location}</p>
            <p><b>Gender:</b> {booking.gender}</p>
            <p><b>Service:</b> {booking.service}</p>
            <p><b>Date:</b> {booking.date}</p>
            <p><b>Time:</b> {booking.time} {booking.ampm}</p>

            {/* Delete Button */}
            <button
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-danger">No Appointments Found ❌</p>
      )}

      <button
        className="btn btn-danger mt-4"
        onClick={() => {
          localStorage.removeItem("isAdminAuth");
          window.location.href = "/Superuser";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
