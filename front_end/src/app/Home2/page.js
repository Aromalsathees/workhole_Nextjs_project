"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Home2 = () => {
  const [book, setbook] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/createlistSubjects')
      .then((response) => setbook(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
  
      <div className="text-2xl font-bold text-gray-500 text-left mb-8 sm:ml-4">
        Categories
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:mx-8 mx-2">
        {[
          { title: 'Subject', icon: 'https://img.icons8.com/ios-filled/50/math.png', link: '/subject' },
          { title: 'Course', icon: 'https://img.icons8.com/ios-filled/50/physics.png', link: '/Course' },
          { title: 'Exams', icon: 'https://img.icons8.com/ios-filled/100/exam.png', link: '/exams' },
          { title: 'Job', icon: 'https://img.icons8.com/ios-filled/50/computer.png', link: '/Paidcompain' },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center flex flex-col items-center justify-between">
            <img src={item.icon} alt={item.title} className="mx-auto mb-4 w-12 h-12" />
            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
            <Link href={item.link}>
              <button className="text-white bg-blue-400 px-4 py-2 rounded mt-6">Explore</button>
            </Link>
          </div>
        ))}
      </div>

  
      <div className="text-2xl font-bold text-gray-500 mt-12 sm:ml-4">Featured Materials</div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 p-4 bg-yellow-50 rounded-2xl shadow sm:mx-8 mx-2">
        {[
          {
            title: 'JavaScript',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
          },
          {
            title: 'Python',
            image: 'https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1',
          },
          {
            title: '.Net',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1200px-Microsoft_.NET_logo.svg.png',
          },
          {
            title: 'Docker',
            image: 'https://blog.codewithdan.com/wp-content/uploads/2023/06/Docker-Logo.png',
          },
        ].map((item, index) => (
          <Link href="/Paidcompain" key={index}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer">
              <img className="w-full h-40 object-cover" src={item.image} alt={item.title} />
              <div className="p-4">
                <h2 className="text-black font-bold">{item.title}</h2>
                <p className="text-gray-600">Explore the wonders of</p>
                <p className="text-gray-500 font-bold">Rating: N/A</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home2;
