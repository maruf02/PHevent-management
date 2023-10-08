import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg text-secondary"></span>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/signIn"></Navigate>;
};

export default PrivateRoute;
