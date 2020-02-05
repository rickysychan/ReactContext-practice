import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import { Consumer } from "../components/context";

class Player extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired
  };

  render() {
    const { index } = this.props;
    return (
      <Consumer>
        {({ removePlayer, players }) => (
          <div className="player">
            <span className="player-name">
              <button
                className="remove-player"
                onClick={() => removePlayer(players[index].id)}
              >
                ✖
              </button>
              {players[index].name}
            </span>

            <Counter index={index} />
          </div>
        )}
      </Consumer>
    );
  }
}

export default Player;
