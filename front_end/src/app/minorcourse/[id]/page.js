'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

const minorcourse = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const handlsearch = () => {
    router.push(`/allsearch?q=${query}`);
  };

  const [popular, setPopular] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/GetPopularRelatedCourses/${id}`)
        .then((response) => {
          setPopular(response.data.popular_serializer);
          setRelated(response.data.related_serializer);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <div className="w-full lg:h-screen min-h-screen">
      <h1 className="text-3xl font-bold lg:ml-150 ml-15 text-black lg:mb-8 mb-4 lg:mt-30 mt-30">Material Hub</h1>

      <div className="lg:ml-150 sm:ml-60 ml-16 flex items-center bg-white lg:w-90 w-70 h-10 mt-8 rounded-lg shadow">
        <input
          className="flex-grow outline-none text-gray-700"
          type="text"
          placeholder="   Search by subject, course, or exam"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handlsearch}>
          <span className="material-symbols-outlined text-gray-500 cursor-pointer ml-2 mr-2">
            search
          </span>
        </button>
      </div>

      <h2 className="lg:ml-50 ml-35 lg:mt-15 mt-5 font-semibold">Popular Materials</h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mt-4 mt-8 lg:ml-50 ml-10 gap-6 lg:mr-20 mr-10">
        {popular.map((card, index) => (
          <div
            key={index}
            className="border px-4 py-2 lg:w-70 lg:h-40 h-40 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div>
              <p className="font-semibold">{card.name}</p>
              <p className="text-gray-400">Note-2022</p>
            </div>
            <Link href={`/coursematerials/${card.id}?model=popular`}>
              <button className="bg-blue-300 rounded-lg text-white mt-2 w-full">Download</button>
            </Link>
          </div>
        ))}
      </div>

      <h2 className="lg:ml-50 ml-35 lg:mt-15 mt-8 font-semibold">Top Rated Materials</h2>

      <div className="grid lg:grid-cols-3 grid-cols-2 lg:mt-4 mt-5 lg:ml-50 ml-10 gap-6 lg:mr-20 mr-10">
        {related.map((card, index) => (
          <div
            key={index}
            className="border lg:px-4 lg:py-2 lg:w-70 lg:h-20 rounded-lg shadow-md"
          >
            <Link href={`/coursematerials/${card.id}?model=toprelated`}>
              <p className="font-semibold lg:mt-2 lg:ml-3 ml-2">{card.name}</p>
              <p className="text-gray-400 ml-2">Note-2022</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default minorcourse;
