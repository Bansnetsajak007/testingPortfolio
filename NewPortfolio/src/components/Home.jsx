
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import NavComponent from './NavComponent';
import image from '../assets/newLuffy.png';

export const Home = () => {
  return (
    <>
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <NavComponent />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
        <div className="flex flex-col md:flex-row md:max-w-2xl mt-8">
          <div className="text-center text-gray-800 md:w-1/2">
            <img
              src={image}
              alt="My image"
              className="w-72 h-72 rounded-full mx-auto mb-10 border-4 border-teal-500"
            />
          </div>
          <div className="text-center text-gray-800 md:w-1/2 md:pl-8 mt-8">
            <p className="text-5xl font-extrabold mb-8 text-teal-500">Hello World!</p>
            <p className="text-2xl mb-8">
              I am <span className='text-red-400'>Sajak Basnet</span>, an aspiring software developer
            </p>
            <div className="flex justify-center">
              {/* GitHub Icon with Link */}
              <a
                href="https://github.com/Bansnetsajak007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-500 hover:text-teal-600 flex items-center text-2xl"
              >
                <FaGithub className="text-3xl mr-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


