import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


// Square represents each individual boardgame square
// TODO
// differentiate between clickable square and data square
class Square extends React.Component {
  render() {
    return (
      <button className="square">
 
      </button>
    )
  }
}

// Board represents the state of the board including the bordering
// squares and the pieces that can be clicked
// TODO
// generates squares in a certain way
class Board extends React.Component {

  generateRow(dim) {

    let a = [];
    for (let i = 0; i < dim; i++) {
      a.push((
        <div className="board-row">
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
      ))
    }
    return (a);
  }

  render() {
    return (
    <div>
      {this.generateRow(6)}
    </div>
    )
  }
}

// Game is a wrapper around Board
class Game extends React.Component {

  render() {
    return (
      <Board/>
    )
  }
}



ReactDOM.render(<Game />, document.getElementById('root'))
