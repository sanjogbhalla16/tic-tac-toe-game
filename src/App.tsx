import React, { useState } from "react";
import "./App.css";
import Block from "./component/Block";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");

  const checkWinner = (state: any[]) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return true;
    }
    return false;
  };

  const handleBlockClick = (index: number) => {
    const stateCopy = Array.from(state); //making an copy array of the current state of the game

    if (stateCopy[index] !== null) return;

    stateCopy[index] = currentTurn; // updating the value of the clicked block

    setState(stateCopy); // updating the state of the game
    //Check if someone won
    const win = checkWinner(stateCopy);

    if (win) {
      alert(`${currentTurn} won the game`);
      return;
    }

    if (!stateCopy.includes(null)) {
      alert("Game is draw");
      return;
    }

    setCurrentTurn(currentTurn === "X" ? "O" : "X"); // updating the current turn
  };

  return (
    <div className="board">
      <div className="row">
        <Block onClick={() => handleBlockClick(0)} value={state[0]} />
        <Block onClick={() => handleBlockClick(1)} value={state[1]} />
        <Block onClick={() => handleBlockClick(2)} value={state[2]} />
      </div>
      <div className="row">
        <Block onClick={() => handleBlockClick(3)} value={state[3]} />
        <Block onClick={() => handleBlockClick(4)} value={state[4]} />
        <Block onClick={() => handleBlockClick(5)} value={state[5]} />
      </div>
      <div className="row">
        <Block onClick={() => handleBlockClick(6)} value={state[6]} />
        <Block onClick={() => handleBlockClick(7)} value={state[7]} />
        <Block onClick={() => handleBlockClick(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default App;
