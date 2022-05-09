import React from "react";
import string from "../constants/es";
import "./styles.css";

const UserStatus = ({ userName, styles }) => {
  return (
    <div className="user-status" style={styles}>
      <div className="user-img">
        <img
          className="img-tam"
          src="https://p4.wallpaperbetter.com/wallpaper/846/722/406/zac-efron-actor-view-brunette-wallpaper-preview.jpg"
          alt="new"
        />
      </div>
      <div className="label">
        <p className="label-margin">{string.bienvenida}</p>
        <h4>{userName}</h4>
      </div>
    </div>
  );
};

export default UserStatus;
