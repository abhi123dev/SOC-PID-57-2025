import React from 'react';
import { useGame } from '../context/GameContext';
import Box from '../components/Box';
import Button from '../components/Button';
import Dice from '../components/Dice';
import { useNavigate } from 'react-router-dom';

function Game() {
  const {
    selectedNumber, setSelectedNumber,
    score, resetScore, resetDice, dice, rollDice,
    showRules, toggleRules, error
  } = useGame();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-200 p-4 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mt-4 mb-2">Score: {score}</h2>
      <div className="flex gap-4 mt-4 mb-6">
        {[1, 2, 3, 4, 5, 6].map(function (num) {
          return (
            <Box
              key={num}
              number={num}
              isSelected={selectedNumber === num}
              onSelect={setSelectedNumber}
            />
          );
        })}
      </div>

      <Dice diceValue={dice} />

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="flex gap-4 mt-6">
        <Button text="Roll Dice" onClick={rollDice} />
        <Button text="Reset Score" onClick={resetScore} />
        <Button text="Refresh Dice" onClick={resetDice} />
        <Button text={showRules ? "Hide Rules" : "Show Rules"} onClick={toggleRules} />
        
      </div>
        
      {showRules && (
        <div className="bg-white shadow-md rounded-lg mt-6 p-4 w-full max-w-md">
          <h3 className="text-lg font-semibold mb-2">🎯 Game Rules</h3>
          <ul className="list-disc list-inside text-left text-gray-700">
            <li>Select a number between 1–6 before rolling</li>
            <li>If your number matches the dice: +N points (N = selected number)</li>
            <li>If not: −2 points</li>
          </ul>
        </div>
      )}
      <Button text="Go to Home" onClick={() => navigate('/')} />
    </div>
    
  );
}

export default Game;
