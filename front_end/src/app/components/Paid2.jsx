'use client';
import React from 'react';

const Paid2 = () => {
  return (
    <div className="w-full min-h-screen bg-black pt-20 px-4">
      <div className="mb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white font-bold text-center text-2xl lg:text-4xl">
            Why Study Hub is the{' '}
            <span className="text-blue-300">Best Software Training</span>{' '}
            Institute in Chennai
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-6xl mx-auto">
      
        <div className="flex flex-col items-start">
          <span className="material-symbols-outlined text-white text-5xl mb-4">home</span>
          <h2 className="text-blue-200 font-bold text-2xl lg:text-3xl">100% Assistance</h2>
          <p className="text-white font-medium mt-3">
            Hands-on experience with industry-relevant projects to build a professional portfolio.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <span className="material-symbols-outlined text-white text-5xl mb-4">settings</span>
          <h2 className="text-blue-200 font-bold text-2xl lg:text-3xl">Industry-Expert Trainers</h2>
          <p className="text-white font-medium mt-3">
            Learn directly from professionals working in top MNCs with real-world case studies.
          </p>
        </div>

    
        <div className="flex flex-col items-start">
          <span className="material-symbols-outlined text-white text-5xl mb-4">person</span>
          <h2 className="text-blue-200 font-bold text-2xl lg:text-3xl">ISO-Certified Institute</h2>
          <p className="text-white font-medium mt-3">
            Education guaranteed through ISO certification and standardized training methods.
          </p>
        </div>
      </div>

      <div className="bg-black h-10"></div>
    </div>
  );
};

export default Paid2;
