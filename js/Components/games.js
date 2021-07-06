import React from "react";
import gamesData from "../data";
import GameCard from "./gameCard";

const Games = () => {
  const gameCard = gamesData.map((gamesData) => <GameCard key={gamesData._id} gamesData={gamesData} />);

  return <div>{gameCard}</div>;
};

export default Games;
