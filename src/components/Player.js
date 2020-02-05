import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import { Consumer } from "../components/context";

class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    const { name, id, score, index } = this.props;
    return (
      <Consumer>
        {context => (
          <div className="player">
            <span className="player-name">
              <button
                className="remove-player"
                onClick={() => context.removePlayer(id)}
              >
                ✖
              </button>
              {name}
            </span>

            <Counter score={score} index={index} />
          </div>
        )}
      </Consumer>
    );
  }
}

export default Player;
