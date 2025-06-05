import React from 'react';
import { ReactTyped } from 'react-typed';

const Home1 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
      <h1 className="text-gray-500 text-sm font-bold mb-2">WELCOME</h1>
         

      <h2 className="font-bold text-gray-600 text-xl sm:text-2xl mb-2 text-center">
        Study Material Hub
      </h2>

      <ReactTyped
        className="text-blue-400 font-bold text-md sm:text-lg mb-4"
        strings={['Access', 'Learn', 'Succeed']}
        typeSpeed={120}
        backSpeed={140}
        loop
      />

      <p className="text-gray-600 text-center text-sm sm:text-base font-semibold">
        Access, Learn, Succeed
      </p>
    </div>
  );
};

export default Home1;


