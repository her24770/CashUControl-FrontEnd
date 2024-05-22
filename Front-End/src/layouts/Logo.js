import React from "react";
import { Link } from "react-router-dom";
// Importa la nueva imagen JPEG
import logoDark from "../assets/images/insignias/logocash.jpeg";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoDark} alt="Logo" style={{ width: "180px", height: "auto" }} />
    </Link>
  );
};

export default Logo;