import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems]=useState([
    ["🦄", "🦄", "🦄"],
    ["🦄", "🦄", "🦄"],
    ["🦄", "🦄", "🦄"],
  ])

  const [count, setCounter]=useState(0)
  
  function getLetter(){
    let letter=''
    if(count%2===0){
     return letter="X"
    }
    else{
      return letter="O"
    }
  }
  

const copyState=structuredClone(items)
  return (
    <div className="App">
      <header className="App-header">
        <h1>TIC-TAC-TOE GAME 🦄</h1>
        <h2> Player 1: X </h2>
        <h2> Player 2: O </h2>

        <div className="game-container">
          
          <span onClick={()=>{
            setCounter(count+1)
            copyState[0][0]=getLetter()
            setItems(copyState)
          }}>{items[0][0]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[0][1]=getLetter()
            setItems(copyState)
          }}>{items[0][1]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[0][2]=getLetter()
            setItems(copyState)
          }}>{items[0][2]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[1][0]=getLetter()
            setItems(copyState)
          }}>{items[1][0]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[1][1]=getLetter()
            setItems(copyState)
          }}>{items[1][1]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[1][2]=getLetter()
            setItems(copyState)
          }}>{items[1][2]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[2][0]=getLetter()
            setItems(copyState)
          }}>{items[2][0]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[2][1]=getLetter()
            setItems(copyState)
          }}>{items[2][1]}</span>

            <span onClick={()=>{
            setCounter(count+1)
            copyState[2][2]=getLetter()
            setItems(copyState)
          }}>{items[2][2]}</span>
          
        </div>
      </header>
    </div>
  );
}

export default App;
