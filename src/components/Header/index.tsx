import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import Thunder from "../../assets/thunder.png";

const Header: React.FC = () => {
  return (
    <div className="container-header background">
      <div>
        <Link to="/a">
          <img src={Thunder} alt="Logo" className="logo" />
        </Link>
      </div>

      <ul>
        <Link to="/" className="link bold">
          <li>Home</li>
        </Link>
        <Link to="/auth" className="link">
          <li>Cadastro</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
