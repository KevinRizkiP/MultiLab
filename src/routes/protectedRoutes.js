import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isAuthorized = useSelector((state) => state.authSlice);
  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;