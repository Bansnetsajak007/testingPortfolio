
// Projects.jsx scrolling
import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <div className="flex justify-center mt-8">
        <div className="btns">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4 transition duration-300">
            Live Demo
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    { title: 'docx2pdf-converter', description: 'npm package that convert docx file to pdf' },
    { title: 'FileShare', description: 'File Sharing application' },
    { title: 'Youtube2mp3', description: 'Youtube to mp3 converter using ejs (Embedded JavaScript)  ' },
    { title: 'CodingMemeAPi', description: 'Get random coding meme everytime' },
    { title: 'Youtube-Viedo-summerizer', description: 'Node.js Express application that summarizes YouTube videos ' },
    { title: 'DforDuck', description: 'A Toy Programming language in Written C' },
  ];

  return (
    <div className="min-h-screen overflow-y-auto bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
