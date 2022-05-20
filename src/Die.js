import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numWords: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 1
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {

    const { numWords, locked, val, disabled, isRolling } = this.props;

    let classes = `Die fas fa-dice-${numWords[val - 1]} fa-5x `;

    if (locked) {
      classes += 'Die-locked '
    }

    if (isRolling) {
      classes += 'Die-rolling'
    }

    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      />


    );
  }
}

export default Die;
