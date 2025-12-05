import React from "react";
import { useNavigate } from "react-router-dom";

export default function Avatar3D() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/wardrobe");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Avatar</h1>
      <div style={styles.avatarContainer}>
        3D Avatar Placeholder<br />(360º View Coming Soon)
      </div>
      <button style={styles.button} onClick={handleContinue}>
        Continue to Wardrobe
      </button>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ffffff",
    fontFamily: "'Helvetica Neue', sans-serif",
    textAlign: "center",
    padding: "2rem",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  avatarContainer: {
    margin: "2rem auto",
    width: "300px",
    height: "300px",
    backgroundColor: "#f0f0f0",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    color: "#555",
  },
  button: {
    marginTop: "2rem",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    backgroundColor: "#111",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
