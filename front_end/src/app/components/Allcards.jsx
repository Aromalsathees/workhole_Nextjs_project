'use client';

import React from 'react';
import Link from 'next/link'; 

const Allcards = ({ name, route }) => {
  return (
    <div className="lg:w-64 lg:h-64 w-36 h-56 bg-white p-4 rounded-2xl shadow hover:shadow-lg text-center flex flex-col justify-between">
      <div>
        <img src="https://img.icons8.com/ios-filled/50/brain.png" alt={name} className="mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      </div>
      <Link href={route}>
        <button className="text-white bg-blue-300 p-3 rounded-full text-sm">Explore</button>
      </Link>
    </div>
  );
};

export default Allcards;
