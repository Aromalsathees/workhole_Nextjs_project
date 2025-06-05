import React from 'react';
import Link from 'next/link';

const Paid1 = () => {
  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto lg:mt-3 mt-30">

      <div className='text-2xl font-black lg:mt-30 lg:ml-30 ml-9 '>
        Our <span className="text-blue-300">Featured</span> Courses
      </div>

      <div className='grid lg:grid-cols-4 grid-cols-2 gap-6 mt-10 lg:mt-10 mb-20 lg:ml-40 ml-10 lg:mr-40 mr-12 bg-yellow-50 rounded-2xl shadow'>

        <Link href="/Contact">
          <div className='bg-white rounded-lg overflow-hidden shadow-md'>
            <img
              className="w-full h-40 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
            <div className='p-4'>
              <h2 className='text-black font-bold'>JavaScript</h2>
              <p className='text-gray-600'>Explore the wonders of</p>
              <p className='text-gray-500 font-bold'>Rating: N/A</p>
            </div>
          </div>
        </Link>

        <Link href="/Contact">
          <div className='bg-white rounded-lg overflow-hidden shadow-md'>
            <img
              className="w-full h-40 object-cover"
              src="https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1"
              alt=""
            />
            <div className='p-4'>
              <h2 className='text-black font-bold'>Python</h2>
              <p className='text-gray-600'>Explore the wonders of</p>
              <p className='text-gray-500 font-bold'>Rating: N/A</p>
            </div>
          </div>
        </Link>

        <Link href="/Contact">
          <div className='bg-white rounded-lg overflow-hidden shadow-md'>
            <img
              className="w-full h-40 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1200px-Microsoft_.NET_logo.svg.png"
              alt=""
            />
            <div className='p-4'>
              <h2 className='text-black font-bold'>.Net</h2>
              <p className='text-gray-600'>Explore the wonders of</p>
              <p className='text-gray-500 font-bold'>Rating: N/A</p>
            </div>
          </div>
        </Link>

        <Link href="/Contact">
          <div className='bg-white rounded-lg overflow-hidden shadow-md'>
            <img
              className="w-full h-40 object-cover"
              src="https://blog.codewithdan.com/wp-content/uploads/2023/06/Docker-Logo.png"
              alt=""
            />
            <div className='p-4'>
              <h2 className='text-black font-bold'>Docker</h2>
              <p className='text-gray-600'>Explore the wonders of</p>
              <p className='text-gray-500 font-bold'>Rating: N/A</p>
            </div>
          </div>
        </Link>

        <Link href="/Contact">
          <div className='bg-white rounded-lg overflow-hidden shadow-md'>
            <img
              className="w-full h-40 object-cover"
              src="https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2021/07/f5932bc2.jpg"
              alt=""
            />
            <div className='p-4'>
              <h2 className='text-black font-bold'>MongoDB</h2>
              <p className='text-gray-600'>Explore the wonders of</p>
              <p className='text-gray-500 font-bold'>Rating: N/A</p>
            </div>
          </div>
        </Link>

        <Link href="/Contact">
          <div className='bg-white rounded-lg overflow-hidden shadow-md'>
            <img
              className="w-full h-40 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png"
              alt=""
            />
            <div className='p-4'>
              <h2 className='text-black font-bold'>TypeScript</h2>
              <p className='text-gray-600'>Explore the wonders of</p>
              <p className='text-gray-500 font-bold'>Rating: N/A</p>
            </div>
          </div>
        </Link>

        <Link href="/Contact">
          <div className='bg-white rounded-lg overflow-hidden shadow-md'>
            <img
              className="w-full h-40 object-cover"
              src="https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png"
              alt=""
            />
            <div className='p-4'>
              <h2 className='text-black font-bold'>React</h2>
              <p className='text-gray-600'>Explore the wonders of</p>
              <p className='text-gray-500 font-bold'>Rating: N/A</p>
            </div>
          </div>
        </Link>

        <Link href="/Contact">
          <div className='bg-white rounded-lg overflow-hidden shadow-md'>
            <img
              className="w-full h-40 object-cover"
              src="https://media.licdn.com/dms/image/v2/D5612AQHJalFr7nO_xA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710173183065?e=2147483647&v=beta&t=3c__Z4dKL3hX2xseZlZFuREV387P98f0Qydtrtem0f0"
              alt=""
            />
            <div className='p-4'>
              <h2 className='text-black font-bold'>RestFramework</h2>
              <p className='text-gray-600'>Explore the wonders of</p>
              <p className='text-gray-500 font-bold'>Rating: N/A</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Paid1;
