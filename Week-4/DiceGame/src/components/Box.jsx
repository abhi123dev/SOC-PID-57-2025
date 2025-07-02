import React from 'react'

function Box({number, isSelected, onSelect}) {
  return (
    <button
         className={`w-12 h-12 flex items-center justify-center border-2 rounded-lg text-lg font-medium transition cursor-pointer ${
        isSelected ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800 hover:bg-blue-100'
      }`}
      onClick={function () {
        onSelect(number);
      }}

    
    >
        {number}
    </button>
  )
}

export default Box