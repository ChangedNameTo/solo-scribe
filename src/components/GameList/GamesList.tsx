import * as React from "react";

import { Fragment, useState, useContext } from "react";

import Header from "../Header";
import {
  GamesContext,
  GamesDispatchContext,
} from "../../Contexts/GamesContext";
import GameButton from "./GameButton";
import CharacterForm from "../Forms/CharacterForm";
import { FormsContext } from "../../Contexts/FormContexts";
import { generateUUID } from "../../assets/Helpers";
import FormModal from "../Forms/FormModal";

export default function GamesList() {
  const games = useContext(GamesContext);
  const dispatch = useContext(GamesDispatchContext);
  const formsContext = React.useContext(FormsContext);

  const startNewGame = () => {
    const newID = generateUUID();

    dispatch({
      type: "added_character",
      gameID: newID,
    });

    formsContext.openModal(newID);
  };

  return (
    <>
      <div className="flex flex-col h-screen grow">
        <Header />
        <div className="flex-1 pt-2">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                Games
              </h1>
              <div>
                <button
                  className="bg-indigo-700 text-white rounded-md text-lg font-semibold px-2 py-1 transition duration-300 hover:bg-indigo-600"
                  onClick={() => startNewGame()}
                >
                  Start New Game
                </button>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap4">
              {Array.from(games.gamesMap.values()).map((game) => (
                <Fragment key={game.id}>
                  <GameButton game={game} />
                  <FormModal
                    id={game.id}
                    children={<CharacterForm id={game.id} />}
                  />
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
