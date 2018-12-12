import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Board from './src/Board'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      activePlayer: 'Red',
      plays: {
        Red: [],
        Yellow: []
      }
    };
    this.placePiece = this.placePiece.bind(this);

  }

  placePiece(e) {
    const coordinates = e.target;
    console.log('coordinates', coordinates);

    if (this.state.activePlayer === 'Red') {
      this.setState({
        activePlayer: 'Yellow'
      })
    } else {
      this.setState({
        activePlayer: 'Red'
      })
    }
  }

  render() {
    return (
      <div>
        <div>Connect 4</div>
        <table>
          <tbody>
            <tr>
              <Square name={'1,1'} activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)}/>
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'1,2'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'1,3'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'1,4'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'1,5'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'1,6'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'1,7'} />
            </tr>
            <tr>
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'2,1'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'2,2'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'2,3'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'2,4'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'2,5'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'2,6'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'2,7'} />
            </tr>
            <tr>
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'3,1'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'3,2'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'3,3'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'3,4'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'3,5'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'3,6'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'3,7'} />
            </tr>
            <tr>
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'4,1'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'4,2'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'4,3'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'4,4'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'4,5'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'4,6'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'4,7'} />
            </tr>
            <tr>
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'5,1'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'5,2'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'5,3'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'5,4'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'5,5'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'5,6'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'5,7'} />
            </tr>
            <tr>
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'6,1'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'6,2'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'6,3'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'6,4'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'6,5'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'6,6'} />
              <Square activePlayer={this.state.activePlayer} handleClick={(e) => this.placePiece(e)} name={'6,7'} />
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
    // console.log(e.target)
    if (this.state.className) {
      alert('Invalid Move!');
      return;
    } else {
      // this will adjust the state's classname
      this.setState({
        className: this.props.activePlayer
      })
      // and then call the next function
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