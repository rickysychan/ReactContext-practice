import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "../components/context";

const Counter = ({ index }) => (
  <Consumer>
    {({ players, changeScore }) => (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={() => changeScore(index, -1)}
        >
          {" "}
          -{" "}
        </button>
        <span className="counter-score">{players[index].score}</span>
        <button
          className="counter-action increment"
          onClick={() => changeScore(index, 1)}
        >
          {" "}
          +{" "}
        </button>
      </div>
    )}
  </Consumer>
);

Counter.propTypes = {
  index: PropTypes.number
};

export default Counter;
