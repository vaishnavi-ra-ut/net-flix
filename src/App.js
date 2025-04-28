import React, { useState } from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const correctPassword = "netflix123"; // Change password if you want

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredPassword = e.target.elements.password.value;
    if (enteredPassword === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (!authenticated) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        fontFamily: "'Poppins', sans-serif",
        padding: "20px"
      }}>
        <h1 style={{ marginBottom: "20px", fontSize: "2.5rem" }}>Welcome</h1>
        <p style={{ marginBottom: "20px", fontSize: "1.2rem" }}>Enter password to access the site</p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              marginBottom: "15px",
              fontSize: "1rem",
              width: "250px",
              textAlign: "center"
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#e50914",
              color: "black",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease"
            }}
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  // 👇 Your real app loads normally after authentication
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
