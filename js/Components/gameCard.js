import React from "react";

// import some from "/Users/durcak/Desktop/react-trial-master-99bbffd7a46731b7dc702522f430b2ad715edc9f/assets/game3.jpg";
const GameCard = ({ gamesData }) => {
  return (
    <div>
      <div>{gamesData._id}</div>
      <div>{gamesData.name}</div>
      <img src={require("/Users/durcak/Desktop/react-trial-master-99bbffd7a46731b7dc702522f430b2ad715edc9f/assets/game2.jpg")} />
    </div>
  );
};

export default GameCard;
