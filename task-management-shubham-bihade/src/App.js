import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          backgroundImage: "url('../public/plain.jpg')",
        }}
      >
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>

          <ToastContainer
            position="bottom-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
          />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
