/*import React from 'react'

function DataInput() {
  return (
    <div className='flex justify-center items-center'>
     <div>
   <form>
    <div className=''>
        
    </div>
   </form>
     </div>
    </div>
  )
}

export default DataInput
*/
import { useState } from "react";


function DataInput() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered data: ${inputValue}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter data"
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default DataInput;