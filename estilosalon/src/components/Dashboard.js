import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookingData")) || [];
    setBookings(Array.isArray(savedBookings) ? savedBookings : [savedBookings]);
  }, []);

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      const updatedBookings = bookings.filter((_, i) => i !== index);
      setBookings(updatedBookings);
      localStorage.setItem("bookingData", JSON.stringify(updatedBookings));
    }
  };

  // 🔥 container animation
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // 🔥 card animation
  const card = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: 100 }
  };

  return (
    <div className="container mt-5">

      {/* Title */}
      <motion.h3
        className="text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Admin Dashboard
      </motion.h3>

      {bookings.length > 0 ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {bookings.map((booking, index) => (
              <motion.div
                key={index}
                className="card p-4 shadow mb-3 position-relative"
                variants={card}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
                layout
              >
                <p><b>Name:</b> {booking.name}</p>
                <p><b>Contact:</b> {booking.contact}</p>
                <p><b>Location:</b> {booking.location}</p>
                <p><b>Gender:</b> {booking.gender}</p>
                <p><b>Service:</b> {booking.service}</p>
                <p><b>Date:</b> {booking.date}</p>
                <p><b>Time:</b> {booking.time} {booking.ampm}</p>

                {/* Delete Button */}
                <motion.button
                  className="btn btn-danger position-absolute top-0 end-0 m-2"
                  onClick={() => handleDelete(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Delete
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.p
          className="text-center text-danger"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No Appointments Found ❌
        </motion.p>
      )}

      {/* Logout Button */}
      <motion.button
        className="btn btn-danger mt-4"
        onClick={() => {
          localStorage.removeItem("isAdminAuth");
          window.location.href = "/Superuser";
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Logout
      </motion.button>

    </div>
  );
}

export default Dashboard;