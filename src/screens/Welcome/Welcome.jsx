import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../constants/colors";
import string from "../../constants/es";
import { USER } from "../../constants/storage";
import { setInStorage } from "../../helpers/storage";
import routes from "../../routes/navigation";
import "./style.css";

const Welcome = () => {
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setInStorage(USER, usuario);
    navigate(routes.home);
  };

  const handleInput = (event) => {
    setUsuario(event.target.value);
    console.log(event);
  };

  return (
    <div className="welcome-container">
      <div className="login-card">
        <h1 className="btn" style={{ color: colors.text }}>
          {string.appName}
        </h1>
        <div className="login-container">
          <h4 className="btn" style={{ color: colors.text }}>
            {string.usuario}
          </h4>
          <input
            placeholder={string.usuario}
            className="input"
            onChange={handleInput}
          />
          <button className="btn btn-primary" onClick={handleClick}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
