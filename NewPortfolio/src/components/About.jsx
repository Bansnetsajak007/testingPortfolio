import React from 'react';
import NavComponent from './NavComponent';

export const About = () => {
  return (
    <>
      <style>
        {`
          body, html {
            margin: 4px;
            padding: 0;
          }
        `}
      </style>
      <NavComponent />
      <div className="flex justify-center min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
        <div className="flex flex-col md:flex-row md:max-w-2xl mt-100">
          <p className='text-xl mt-8'>I'm a guy who loves making computers understand things through code. Even though I'm a bit lazy,
            that laziness sparks my creativity to find smart solutions to problems. I'm super motivated to become
            a skilled software developer, always looking for chances to improve my coding abilities. Solving problems
            with code is like a game for me, and I'm excited about learning and growing in the world of software development.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;




