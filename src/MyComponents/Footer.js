import React from "react";

export const Footer = () => {
  return (
    <footer
      className="bg-dark text-light py-4 mt-5"
      style={{
        marginTop: "40px",
        borderTop: "3px solid #007bff",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0.5px",
        }}
      >
        <p style={{ fontSize: "1.1rem", marginBottom: "5px" }}>
          © 2026 Notes Manager
        </p>
        <p style={{ fontSize: "0.95rem", color: "#aaa" }}>
          Made with ❤️ 
        </p>
      </div>
    </footer>
  );
};
