import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard]=useState(
    Array(9).fill(null)
  )
  const [count, setCounter]=useState(0)
  const [winner, setWinner]=useState('')
  const [player, setPlayer]=useState(0)

  function getLetter(){
    let letter=''
    if(count%2===0){
      setPlayer(2)
     return letter="X"
    }
    else{
      setPlayer(1)
      return letter="O"
    }
  }
  
  // function getWinner(){
  //   for(let n=0; n<3; n++){
  //     for(let m=0; m<3; m++){
  //   if((items[n][0]===items[n][1] && items[n][1]===items[0][2]) 
  //   || (items[0][m]===items[1][m] && items[2][m]===items[0][2])
  //   || (items[0][0]===items[1][1] && items[1][1]===items[2][2])
  //   || (items[2][0]===items[1][1] && items[1][1]===items[0][2])
  //   )
    
  //   console.log("we have a winner")
    
  //   }

  // }}

  // getWinner()

const copyState=structuredClone(board)
  return (
    <div className="App">
      <header className="App-header">
        <h1>TIC-TAC-TOE GAME 🦄</h1>

        {/* <div className="game-container">
          {board.map(item=>(

             <span
              onClick={()=>{
              setCounter(count+1)
              console.log(item, board.indexOf(item))
              copyState[board.indexOf(item)]=getLetter()
              setBoard(copyState)
            }}>{item}</span>
          ))}
        </div> */}
        {player===2 ? <h3>Player O turn</h3>: <h3>Player X turn</h3>}
         <div className="game-container">
          
          <span onClick={()=>{
            setCounter(count+1)
            copyState[0]=getLetter()
            setBoard(copyState)
          }}>{board[0]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[1]=getLetter()
            setBoard(copyState)
          }}>{board[1]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[2]=getLetter()
            setBoard(copyState)
          }}>{board[2]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[3]=getLetter()
            setBoard(copyState)
          }}>{board[3]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[4]=getLetter()
            setBoard(copyState)
          }}>{board[4]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[5]=getLetter()
            setBoard(copyState)
          }}>{board[5]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[6]=getLetter()
            setBoard(copyState)
          }}>{board[6]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[7]=getLetter()
            setBoard(copyState)
          }}>{board[7]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[8]=getLetter()
            setBoard(copyState)
          }}>{board[8]}</span>
          
        </div>

  
      </header>
    </div>
  );
}

export default App;
