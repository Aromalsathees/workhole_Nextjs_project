'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import axios from 'axios';

const subjectmaterials = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const model = searchParams.get('model');
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    if (id && model) {
      axios
        .get(`http://localhost:8000/get-material-resources/${id}/?model=${model}`)
        .then((response) => {
          setSubject(response.data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [id, model]);

  return (
    <div className='w-full min-h-screen bg-white px-4 lg:px-20 py-8'>
      <h1 className="text-3xl font-bold text-black mb-6 mt-20 lg:ml-100">Material Resources</h1>
      
      <div className="flex items-center bg-white w-full max-w-2xl h-10 rounded-lg shadow mb-10 lg:ml-80">
        <input
          className="ml-3 flex-grow outline-none text-gray-700"
          type="text"
          placeholder="Search materials..."
        />
        <span className="material-symbols-outlined text-gray-500 cursor-pointer ml-2 mr-2">
          search
        </span>
      </div>

      <div className="grid gap-6 lg:ml-70">

        {/* PDF Resource */}
        {subject?.pdf && (
          <div className="border rounded-lg h-20 w-full max-w-3xl flex items-center gap-4 overflow-hidden px-4">
            <a href={subject.pdf} download className="flex items-center gap-4 w-full">
              <span className="material-symbols-outlined text-gray-700">article</span>
              <div>
                <p className="font-semibold">PDF</p>
                <p className="text-sm text-gray-500 font-bold truncate">{subject.pdf} - PDF</p>
              </div>
            </a>
          </div>
        )}

        {/* Image Resource */}
        {subject?.image && (
          <div className="border rounded-lg h-20 w-full max-w-3xl flex items-center gap-4 overflow-hidden px-4">
            <a href={subject.image} download className="flex items-center gap-4 w-full">
              <span className="material-symbols-outlined text-gray-700">article</span>
              <div>
                <p className="font-semibold">Images</p>
                <p className="text-sm text-gray-500 font-bold truncate">{subject.image} - Image</p>
              </div>
            </a>
          </div>
        )}

        {/* Video Resource */}
        {subject?.videos && (
          <div className="border rounded-lg h-20 w-full max-w-3xl flex items-center gap-4 overflow-hidden px-4">
            <a href={subject.videos} download className="flex items-center gap-4 w-full">
              <span className="material-symbols-outlined text-gray-700">article</span>
              <div>
                <p className="font-semibold">Videos</p>
                <p className="text-sm text-gray-500 font-bold truncate">{subject.videos} - Video</p>
              </div>
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

export default subjectmaterials;
