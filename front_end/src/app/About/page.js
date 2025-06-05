'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="p-4">
      
      <div className="flex justify-center lg:ml-60 lg:mt-20">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-300">
          About Study Material Hub
        </h1>
      </div>

   
      <p className="mb-8 text-center font-medium text-gray-700 max-w-xl mx-auto lg:ml-100">
        Study Material Hub provides a centralized platform for accessing various
        study materials across different subjects, courses, and exams.
      </p>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center lg:ml-70">
   
        <div className="bg-white border border-gray-400 rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300">
          <Image
            src="/assets/mission.jpeg"
            alt="Mission Icon"
            className="rounded-full mx-auto mb-4"
            width={96}
            height={96}
          />
          <h2 className="text-xl font-semibold text-center mb-3">Mission</h2>
          <p className="text-center text-gray-600">
            Provide quality resources for learners worldwide, ensuring equal
            opportunities to access academic materials and knowledge.
          </p>
        </div>

   
        <div className="bg-white border border-gray-400 rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300">
          <Image
            src="/assets/vision.jpeg"
            alt="Vision Icon"
            className="rounded-full mx-auto mb-4"
            width={96}
            height={96}
          />
          <h2 className="text-xl font-semibold text-center mb-3">Vision</h2>
          <p className="text-center text-gray-600">
            Empower education by building a dynamic, accessible, and innovative
            platform for students across the globe.
          </p>
        </div>

  
        <div className="bg-white border border-gray-400 rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300">
          <Image
            src="/assets/values.jpeg"
            alt="Values Icon"
            className="rounded-full mx-auto mb-4"
            width={96}
            height={96}
          />
          <h2 className="text-xl font-semibold text-center mb-3">Values</h2>
          <p className="text-center text-gray-600">
            Driven by Innovation, Inclusivity, and Integrity — we believe
            education should be available, reliable, and transformative for
            everyone.
          </p>
        </div>
      </div>


      <div className="flex justify-center mt-12 mb-6 lg:ml-60">
        <h1 className="text-3xl font-semibold text-center">Our Team</h1>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center lg:ml-60">
 
        <div className="bg-white shadow-lg rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300 text-center">
          <Image
            src="/assets/member1.jpeg"
            alt="Aromal Satheesh"
            className="rounded-full mx-auto mb-4"
            width={96}
            height={96}
          />
          <h2 className="text-xl font-semibold mb-1">Aromal Satheesh</h2>
          <p className="text-gray-600">Team Leader</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300 text-center">
          <Image
            src="/assets/member1.jpeg"
            alt="Athira Rajan"
            className="rounded-full mx-auto mb-4"
            width={96}
            height={96}
          />
          <h2 className="text-xl font-semibold mb-1">Athira Rajan</h2>
          <p className="text-gray-600">Team Member</p>
        </div>

  
        <div className="bg-white shadow-lg rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300 text-center">
          <Image
            src="/assets/member1.jpeg"
            alt="Vyshagh C"
            className="rounded-full mx-auto mb-4"
            width={96}
            height={96}
          />
          <h2 className="text-xl font-semibold mb-1">Vyshagh C</h2>
          <p className="text-gray-600">Team Member</p>
        </div>
      </div>
    </div>
  );
}
