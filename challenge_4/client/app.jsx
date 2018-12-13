import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 'Red',
      redPlays: [],
      yellowPlays: []

    };
    this.placePiece = this.placePiece.bind(this);
    this.horizontalWin = this.horizontalWin.bind(this);
    this.winningGame = this.winningGame.bind(this);
  }


  placePiece(e, coordinates) {
    if (this.state.activePlayer === 'Red') {
      const addMoveToPlay = this.state.redPlays.concat([coordinates]);
      this.setState({
        activePlayer: 'Yellow',
        redPlays: addMoveToPlay
      })
    } else {
      const addMoveToPlay = this.state.yellowPlays.concat([coordinates]);
      this.setState({
        activePlayer: 'Red',
        yellowPlays: addMoveToPlay
      })
    }
    this.winningGame();
  }

  winningGame () {
    let redHorizontal = this.horizontalWin(this.state.redPlays)
    if (redHorizontal === 'winner') {
      this.setState({winner: 'Red is the winner!'});
    }
    let yellowHorizontal = this.horizontalWin(this.state.yellowPlays)
    if (yellowHorizontal === 'winner') {
      this.setState({winner: 'Yellow is the winner!'});
    }
    let redVertical = this.verticalWin(this.state.redPlays)
    if (redVertical === 'winner') {
      this.setState({winner: 'Red is the winner!'});
    }
    let yellowVertical = this.verticalWin(this.state.yellowPlays)
    if (yellowVertical === 'winner') {
      this.setState({winner: 'Yellow is the winner!'});
    }

  }

  horizontalWin (array) {
    const sorted = array.sort()
    let output = 'horizontal no winner'
    for (let i = 0; i < sorted.length - 3; i++) {
      let firstTuple = sorted[i]
      let lastTuple = sorted[i + 3]
      if (firstTuple[0] === lastTuple[0] && firstTuple[1] === (lastTuple[1] - 3)) {
        output = 'winner';
      }
    }
    return output;
  }

  verticalWin (array) {
    const sorted = array.sort()
    let output = 'vertical no winner'
    for (let i = 0; i < sorted.length - 3; i++) {
      let firstTuple = sorted[i]
      let lastTuple = sorted[i + 3]
      if (firstTuple[1] === lastTuple[1] && firstTuple[0] === (lastTuple[0] - 3)) {
        output = 'winner';
      }
    }
    return output;
  }

  render() {
    return (
      <div>
        <div>Connect 4</div>
        <span>{this.state.winner}</span>
        <table>
          <tbody>
            <tr>
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [1,1])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [1,2])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [1,3])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [1,4])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [1,5])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [1,6])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [1,7])} />
            </tr>
            <tr>
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [2,1])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [2,2])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [2,3])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [2,4])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [2,5])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [2,6])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [2,7])} />
            </tr>
            <tr>
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [3,1])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [3,2])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [3,3])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [3,4])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [3,5])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [3,6])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [3,7])} />
            </tr>
            <tr>
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [4,1])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [4,2])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [4,3])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [4,4])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [4,5])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [4,6])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [4,7])} />
            </tr>
            <tr>
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [5, 1])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [5, 2])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [5, 3])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [5, 4])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [5, 5])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [5, 6])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [5, 7])} />
            </tr>
            <tr>
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [6, 1])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [6, 2])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [6, 3])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [6, 4])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [6, 5])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [6, 6])} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e, [6, 7])} />
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (this.state.className) {
      alert('Invalid Move!');
      return;
    } else {
      this.setState({
        className: this.props.activePlayer
      })

      this.props.handleClick(e);
    }
  }

  render() {
    return (
      <td className={this.state.className} onClick={(e) => this.handleChange(e)}></td>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));