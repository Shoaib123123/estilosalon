import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Superuser.css";

function Superuser() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === "admin123") {
      localStorage.setItem("isAdminAuth", "true");
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="superuser-bg d-flex justify-content-center align-items-center min-vh-100">

      <motion.div
        className="superuser-card shadow p-4"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        {/* Title */}
        <motion.h3
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Enter Superuser Password
        </motion.h3>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <motion.input
            type="password"
            className="form-control mb-3"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required

            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          />

          <motion.button
            type="submit"
            className="btn btn-dark w-100"

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>

        {/* Error Message */}
        {error && (
          <motion.p
            className="text-danger text-center mt-3 fw-bold"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: [0, -10, 10, -10, 10, 0] // 🔥 shake effect
            }}
            transition={{ duration: 0.4 }}
          >
            Wrong Password ❌
          </motion.p>
        )}

      </motion.div>
    </div>
  );
}

export default Superuser;