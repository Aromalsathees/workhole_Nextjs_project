
import React from 'react'
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-blue-50 px-4 py-7 mt-10'>
      
      
      <div className='hidden md:grid max-w-6xl mx-auto grid-cols-4 gap-8 lg:mr-20 mr-15 lg:ml-20 lg:gap-20'>
        <div className='flex flex-col'>
          <div className='text-blue-300 font-bold text-3xl'>Study Hub.</div>
        </div>

        <div className='text-gray-600 font-bold flex flex-col text-sm space-y-3'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-300 hover:text-blue-600 text-2xl" />
          </a>
          <p>Solutions</p>
          <p>Analytics</p>
          <p>Marketing</p>
          <p>Commerce</p>
        </div>

        <div className='text-gray-600 font-bold flex flex-col text-sm space-y-3'>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-blue-300 hover:text-pink-500 text-2xl" />
          </a>
          <p>Support</p>
          <p>Pricing</p>
          <p>Documentation</p>
          <p>Guides</p>
        </div>

        <div className='text-gray-600 font-bold flex flex-col text-sm space-y-3'>
          <a href="mailto:example@gmail.com">
            <FaEnvelope className="text-blue-300 hover:text-red-500 text-2xl" />
          </a>
          <p>Company</p>
          <p>Pricing</p>
          <p>About</p>
          <p>Jobs</p>
        </div>
      </div>


      <div className='md:hidden flex flex-col items-center space-y-10 mt-10'>
        <div className='text-blue-300 font-bold text-3xl'>Study Hub.</div>

        <div className='flex space-x-6'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-300 hover:text-blue-600 text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-blue-300 hover:text-pink-500 text-2xl" />
          </a>
          <a href="mailto:example@gmail.com">
            <FaEnvelope className="text-blue-300 hover:text-red-500 text-2xl" />
          </a>
        </div>

        <div className='grid grid-cols-3 gap-6 text-center text-sm text-gray-600 font-bold'>
          <div className='space-y-1'>
            <p>Solutions</p>
            <p>Analytics</p>
            <p>Marketing</p>
            <p>Commerce</p>
          </div>
          <div className='space-y-1'>
            <p>Support</p>
            <p>Pricing</p>
            <p>Documentation</p>
            <p>Guides</p>
          </div>
          <div className='space-y-1'>
            <p>Company</p>
            <p>Pricing</p>
            <p>About</p>
            <p>Jobs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer