import React from "react";
import { Consumer } from "../components/context";

const AddPlayerForm = () => {
  return (
    <Consumer>
      {context => {
        const playerInput = React.createRef();
        const handleSubmit = e => {
          e.preventDefault();
          context.addPlayer(playerInput.current.value);
          e.currentTarget.reset();
        };
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={playerInput}
              placeholder="Enter a player's name"
            />

            <input type="submit" value="Add Player" />
          </form>
        );
      }}
    </Consumer>
  );
};

export default AddPlayerForm;
