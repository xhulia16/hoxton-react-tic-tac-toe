import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [count, setCounter] = useState(0);
  const [winner, setWinner] = useState("");
  const [player, setPlayer] = useState(0);

  function getLetter() {
    let letter = "";
    if (count % 2 === 0) {
      setPlayer(2);
      return (letter = "X");
    } else {
      setPlayer(1);
      return (letter = "O");
    }
  }

  // function getWinner() {
  //   if (board[0] === board[1] && board[1] === board[2]) setWinner(board[0]);
  //   else if (board[3] === board[4] && board[4] === board[5])
  //     setWinner(board[3]);
  //   else if (board[6] === board[7] && board[7] === board[8])
  //     setWinner(board[6]);
  //   else if (board[0] === board[3] && board[3] === board[6])
  //     setWinner(board[0]);
  //   else if (board[1] === board[4] && board[4] === board[7])
  //     setWinner(board[1]);
  //   else if (board[2] === board[5] && board[5] === board[8])
  //     setWinner(board[2]);
  //     else if (board[0] === board[4] && board[4] === board[7])
  //     setWinner(board[0]);
  //     else if (board[2] === board[4] && board[4] === board[6])
  //     setWinner(board[2]);
  // }

  const copyState = structuredClone(board);
  return (
    <div className="App">
      <header className="App-header">
        <h1>TIC-TAC-TOE GAME 🦄</h1>
        {player === 2 ? <h3>Player O turn</h3> : <h3>Player X turn</h3>}
        
        <div className="game-container">
          {board.map((item, index)=>(

             <div className="box"
              key={index}
              onClick={()=>{
              setCounter(count+1)
              copyState[index]=getLetter()
              setBoard(copyState)
            }}>
            {item}
            </div>
          ))}
        </div>
       
      </header>
    </div>
  );
}

export default App;
