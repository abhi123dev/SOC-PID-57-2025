import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 text-center">
      <img src="/dice.png" alt="Dice" className="w-122  mb-6" />
      <h1 className="text-5xl mb-6">🎲 Dice Game</h1>
      <button onClick={() => navigate('/game')}
         className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
>Start Game</button>
    </div>
  );
}

export default Home;
