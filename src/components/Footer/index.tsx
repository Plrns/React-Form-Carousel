import React from "react";
import { Link } from "react-router-dom";

import Thunder from "../../assets/thunder.png";

import "./styles.css";

const Footer: React.FC = () => {
  return (
    <div className="container-footer background">
      <div className="left-side">
        <img src={Thunder} alt="Logo Thunder" className="logo-footer" />
      </div>
      <div className="right-side">
        <h2 className="txt">Mapa do Site</h2>

        <ul className="list-footer">
          <Link to="/" className="link bold">
            <li>Home</li>
          </Link>
          <Link to="/auth" className="link">
            <li>Login</li>
          </Link>
        </ul>

        <p className="txt space">
          Made by
          <a href="https://github.com/Plrns" className="link bold">
            Pedro Lucas
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
