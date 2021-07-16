import React from "react";
import flagImg from "../../../assets/flag.png";
import telephoneImg from "../../../assets/telephone.png";
const Nav = ({ phoneNumber }) => {
  return (
    <div className="nav">
      <div className="nav_left">
        <img className="nav_logo" src={telephoneImg} alt="telephone" />
        <div>{phoneNumber}</div>
      </div>
      <div className="nav_right">
        <img className="nav_logo" src={flagImg} alt="flag" />
        <div>Try another Castle</div>
      </div>
    </div>
  );
};

export default Nav;
