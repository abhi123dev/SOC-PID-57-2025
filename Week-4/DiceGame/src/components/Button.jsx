import React from 'react';

function Button({ text, onClick }) {
  return <button className="px-4 py-2 bg-indigo-500 text-white rounded shadow hover:bg-indigo-600 transition cursor-pointer my-2.5"
   onClick={onClick}>
    {text}
    </button>;
}

export default Button;
