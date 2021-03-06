import React from "react";
import Player from "./Player";
import { Consumer } from "../components/context";

const PlayerList = () => {
  return (
    <Consumer>
      {context => {
        return (
          <React.Fragment>
            {context.players.map((player, index) => (
              <Player key={player.id.toString()} index={index} />
            ))}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default PlayerList;
