import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState("");
  const [player, setPlayer] = useState("O");

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
