import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compro from "../pages/Compro";
import Dashboard from "../pages/Dashboard";
import Logins from "../pages/Logins";
import Register from "../pages/Register";
import ProtectedRoute from "./protectedRoutes";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Compro />} />
          <Route path="/login" element={<Logins />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
