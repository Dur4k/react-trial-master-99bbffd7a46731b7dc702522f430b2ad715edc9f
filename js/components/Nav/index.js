import React from "react";
import flagImg from "../flag.png";
import telephoneImg from "../telephone.png";
const Nav = ({ phoneNumber }) => {
  return (
    <div className="nav">
      <div>
        <img src={telephoneImg} alt="telephone" />
        <div>{phoneNumber}</div>
      </div>
      <div>
        <img src={flagImg} alt="flag" />
        <div>Try another Castle</div>
      </div>
    </div>
  );
};

export default Nav;
