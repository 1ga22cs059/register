import React, { useState } from "react";

function App() {
  const choices = ["rock", "paper", "scissor"];
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const playGame = (playerChoice) => {
    const computerIndex = Math.floor(Math.random() * 3);
    const computerSelection = choices[computerIndex];

    setPlayerChoice(playerChoice);
    setComputerChoice(computerSelection);

    if (playerChoice === computerSelection) 
      setResult("It's a tie!");
     else 
     {
      if ((playerChoice === "paper" && computerSelection === "rock") || 
        (playerChoice === "rock" && computerSelection === "scissor") || 
        (playerChoice === "scissor" && computerSelection === "paper")) 
        setResult(" Player wins!");
      else 
        setResult("Computer wins!");
      
    }
  };

  return (
    <div style={{
      backgroundColor: "plum",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }}>
      <h1 style={{ color: "purple", fontFamily: "cursive", fontSize: "25px" }}>
        Game of Rock Paper Scissors
      </h1>

      {choices.map(choice => (
        <button 
          key={choice}
          style={{
            backgroundColor: "purple",
            borderColor: "purple",
            display:"flex",
            padding: "5px",
            margin: "10px",
            borderRadius: "8px",
            color: "white",
            fontStyle: "italic"
          }} 
          onClick={() => playGame(choice)}
        >
          {choice.charAt(0).toUpperCase() + choice.slice(1)}
        </button>
      ))}

      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Player: {playerChoice}</p>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Computer: {computerChoice}</p>
      <p style={{ fontSize: "22px", color: "black" }}>Result: {result}</p>
    </div>
  );
}

export default App;
