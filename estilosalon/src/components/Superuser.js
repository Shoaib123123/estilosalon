import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Superuser.css";

function Superuser() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ YOUR PASSWORD
    if (password === "admin123") {
      localStorage.setItem("isAdminAuth", "true");
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="superuser-bg">
      <div className="superuser-card shadow">
        <h3 className="text-center mb-4">Enter Superuser Password</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-dark w-100">
            Submit
          </button>
        </form>

        {error && (
          <p className="text-danger text-center mt-3 fw-bold">
            Wrong Password ❌
          </p>
        )}
      </div>
    </div>
  );
}

export default Superuser;
