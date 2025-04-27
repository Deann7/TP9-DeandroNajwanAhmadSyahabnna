import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const No3 = () => {
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (number !== 0 && number % 10 === 0) {
      alert(`Number is now ${number} (divisible by 10)!`);
    }
  }, [number]);

  const buttonHover = "hover:scale-105 transition-transform duration-200";
  const buttonActive = "active:scale-95 transition-transform duration-100";

  return (
    <div className='flex flex-col justify-center items-center h-screen relative'>
      <button 
        onClick={() => navigate('/')}
        className={`${buttonHover} ${buttonActive} absolute top-6 left-6 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg shadow-md flex items-center`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Home
      </button>
      <div className='bg-white/20 w-72 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-white/10'>
        <div className='flex flex-col items-center space-y-6'>
          <h1 className='text-white font-bold text-2xl'>Counter Demo</h1>
          
          <div className={`text-white text-5xl font-mono transition-all duration-300 ${number % 10 === 0 ? 'animate-pulse' : ''}`}>
            {number}
          </div>
          
          <div className='flex flex-col space-y-3 w-full'>
            <div className='flex space-x-3'>
              <button 
                onClick={() => setNumber(n => n + 1)}
                className={`${buttonHover} ${buttonActive} bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg flex-1 shadow-md`}
              >
                +
              </button>
              <button 
                onClick={() => setNumber(n => n - 1)}
                className={`${buttonHover} ${buttonActive} bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-4 rounded-lg flex-1 shadow-md`}
              >
                -
              </button>
            </div>
            
            <button 
              onClick={() => setNumber(0)}
              className={`${buttonHover} ${buttonActive} bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg w-full shadow-md`}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default No3;