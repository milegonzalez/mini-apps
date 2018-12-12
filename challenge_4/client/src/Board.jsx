import React from 'react';


class Board extends React.Components {
  renderSquare() {
    return (
    <Square
    value={}
    onClick={}
    />
    );
  }
  render () {
    return (
      <div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        </div>
      </div>
    )
  }
}

export default Board;