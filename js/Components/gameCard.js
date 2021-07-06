import React from "react";
const GameCard = ({ gamesData }) => {
  return (
    <div>
      <div>{gamesData._id}</div>
      <div>{gamesData.name}</div>
      <img src={gamesData.image} alt="logo" />
    </div>
  );
};

export default GameCard;
