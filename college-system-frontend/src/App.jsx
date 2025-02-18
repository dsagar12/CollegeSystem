import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Spline from "@splinetool/react-spline";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* Background Spline Design */}
      <Spline
        scene="https://prod.spline.design/RHYeH6YJoqm4v8OF/scene.splinecode"
        onLoad={() => setIsLoaded(true)} // Set state when Spline is loaded
      />

      {/* Navbar */}
      <Navbar />

      {/* Centered Buttons - Show Only When Spline is Loaded */}
      {isLoaded && (
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "21%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in",
          }}
        >
          <Link to="/login">
            <button style={buttonStyle}>Login</button>
          </Link>
          <Link to="/signup">
            <button style={{ ...buttonStyle, marginLeft: "20px" }}>Signup</button>
          </Link>
        </div>
      )}
    </div>
  );
}

// Button Styling
const buttonStyle = {
  padding: "12px 24px",
  fontSize: "18px",
  backgroundColor: "#ff7f50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "0.3s",
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
