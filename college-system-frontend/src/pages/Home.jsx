import Spline from "@splinetool/react-spline";

function Home() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D Background */}
      <Spline
        scene="https://prod.spline.design/HwqkW6yJ3GgkEo1T/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      {/* Centered Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "2.5rem", marginBottom: "20px" }}>
          Welcome to Our Platform
        </h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/login" style={buttonStyle}>
            Login
          </a>
          <a href="/signup" style={buttonStyle}>
            Sign Up
          </a>
        </div>
      </div>
    </main>
  );
}

// Button Styles
const buttonStyle = {
  padding: "12px 24px",
  backgroundColor: "#ff6b6b",
  color: "#fff",
  fontSize: "1.2rem",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  transition: "0.3s",
};

export default Home;
