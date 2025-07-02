import React from 'react';

function Dice({ diceValue }) {
  return (
    <div className="my-4">
      {diceValue && <img src={`/dice${diceValue}.png`} alt={`Dice ${diceValue}`}
      className="w-24 h-24 mx-auto"
       />}
    </div>
  );
}

export default Dice;
