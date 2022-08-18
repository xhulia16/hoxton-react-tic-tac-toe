import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("O");

let boardIndexes=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

for(let item=0; item<boardIndexes.length; item++){
  const[item1, item2, item3]=boardIndexes[item];
  if(board[item1]&& board[item1]===board[item2] && board[item2]=== board[item3]){
alert(`${(board[item1])} just won!!`)
  }
}

  function play(index) {
    let newPlayer = player === "X" ? "O" : "X";
    setPlayer(newPlayer);
    copyState[index] = newPlayer;
    setBoard(copyState);
  }

  const copyState = structuredClone(board);
  return (
    <div className="App">
      <header className="App-header">
        <h1>TIC-TAC-TOE GAME 🦄</h1>
        {player === "X" ? <h3>Player O turn</h3> : <h3>Player X turn</h3>}

        <div className="game-container">
          {board.map((item, index) => (
            <div
              className="box"
              key={index}
              onClick={() => {
                play(index);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
