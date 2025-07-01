import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

function GameProvider({ children }) {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [dice, setDice] = useState(null);
  const [showRules, setShowRules] = useState(false);
  const [error, setError] = useState("");

  function rollDice() {
    if (!selectedNumber) {
      setError("Please select a number before rolling.");
      return;
    }
    const random = Math.floor(Math.random() * 6) + 1;
    setDice(random);
    if (random === selectedNumber) {
      setScore(score + selectedNumber);
    } else {
      setScore(score - 2);
    }
    setError("");
  }

  function resetScore() {
    setScore(0);
  }
  function resetDice() {
    setDice(null);
  }

  function toggleRules() {
    setShowRules(!showRules);
  }

  return (
    <GameContext.Provider value={{
      selectedNumber, setSelectedNumber,
      score, resetScore,
      dice, rollDice,
      showRules, toggleRules,
      resetDice, error
    }}>
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  return useContext(GameContext);
}

export { GameProvider, useGame };
