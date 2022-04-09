import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { user } = useAuth();

  const location = useLocation();

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default RequireAuth;
