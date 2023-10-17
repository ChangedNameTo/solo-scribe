import React from "react";
import { GameEngineContext } from "../Contexts/GameEngineContext";

export default function AddGames() {
  const [gameEngine, gamesDispatch] = React.useContext(GameEngineContext);

  const addNewGame = () => {
    gamesDispatch({
      type: "add_game",
    });
  }

  return (
    <button className="bg-gray-500" data-testid="add-game-button"
    onClick={() => addNewGame()}>
      Add Game
    </button>
  );
}
