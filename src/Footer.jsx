import React from "react";

function Footer() {
  return (
    <footer
      className="text-white text-center py-4"
      style={{
        background: "linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)",
        backdropFilter: "blur(8px)",
        fontSize: "1rem",
        direction: "rtl",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <span style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
        © {new Date().getFullYear()} <strong>Oussama Taib</strong>
      </span>
    </footer>
  );
}

export default Footer;
