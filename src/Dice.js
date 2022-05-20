import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die
          isRolling={this.props.isRolling && !this.props.locked[idx]}
          handleClick={this.props.handleClick}
          disabled={this.props.disabled}
          val={d}
          locked={this.props.locked[idx]}
          idx={idx}
          key={idx} />
      )}
    </div>
  }
}

export default Dice;