import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("isAdminAuth");

  return isAuth ? children : <Navigate to="/Superuser" />;
}

export default ProtectedRoute;
