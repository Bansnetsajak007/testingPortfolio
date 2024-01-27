import React from 'react';

export const About = () => {
  return (
    <>
      {/* <NavComponent /> */}
      <div className="flex justify-center min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
        <div className="container mx-auto p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">About Me:</h2>
              <p className='text-xl mt-2'>
                I'm a guy who loves making computers understand things through code. Even though I'm a bit lazy,
                that laziness sparks my creativity to find smart solutions to problems. I'm super motivated to become
                a skilled software developer, always looking for chances to improve my coding abilities. Solving problems
                with code is like a game for me, and I'm excited about learning and growing in the world of software development.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Skills & Technologies:</h2>
              <ul className="list-disc ml-8">
                <li>HTML5, CSS3</li>
                <li>JavaScript (React, Node.js)</li>
                <li>Database Management (MySQL, MongoDB)</li>
                <li>Version Control (Git, GitHub)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
