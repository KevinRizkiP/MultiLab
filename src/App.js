import { Routes, Route } from "react-router-dom";
import Compro from "./pages/Compro";
import Dashboard from "./pages/Dashboard";
import Logins from "./pages/Logins";
import Register from "./pages/Register";
import ProtectedRoute from "./routes/protectedRoutes";

function App() {
  return (
    <div className="">
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
    </div>
  );
}

export default App;
