import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = () => {
  const auth = useAuth();

  // If not logged in, redirect to login
  if (!auth?.user) return <Navigate to="/login" replace />;

  // Otherwise render child routes
  return <Outlet />;
};

export default ProtectedRoute;
