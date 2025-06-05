'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Allcards from '../../components/Allcards';



const subcourse = () => {
  const [cards, setCards] = useState([]);
  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/GetSubCourses/${id}`)
        .then((response) => setCards(response.data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <div>
      <h1 className="text-3xl font-bold lg:ml-160 ml-22 text-black lg:mb-8 mb-4 lg:mt-30 mt-40">Topics</h1>
      <p className="lg:ml-160 ml-19 lg:mt-[-20px] text-gray-500 text-sm font-bold">
        Browse study materials by Topics
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:ml-20 ml-7 justify-center lg:gap-6 gap-3 lg:mt-10 mt-4">
        {cards.map((card, index) => (
          <Allcards key={index} name={card.name} route={`/minorcourse/${card.id}`} />
        ))}
      </div>
    </div>
  );
};

export default subcourse;
