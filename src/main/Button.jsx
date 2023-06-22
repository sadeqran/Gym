import React from "react";
import { NavLink } from "react-router-dom";
const Button = ({ targetpath, title, name, handleClick }) => {
  return (
    <NavLink to={targetpath}>
      <button className={name} onClick={handleClick}>
        {title}
      </button>
    </NavLink>
  );
};

export default Button;
