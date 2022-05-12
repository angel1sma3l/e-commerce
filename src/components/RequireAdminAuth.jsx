import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequireAdminAuth = ({ children }) => {
  const { user } = useAuth();

  const location = useLocation();

  if (!user?.isAdmin) return <Navigate to="/account" replace />;

  return children;
};

export default RequireAdminAuth;
