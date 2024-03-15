
// Projects.jsx scrolling
import React from 'react';

const ProjectCard = ({ title, description, liveLink, sourceCode }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <div className="flex justify-center mt-8">
        <div className="btns">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4 transition duration-300">
            
            <a href={liveLink}>Live Demo</a>
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md transition duration-300">
          <a href={sourceCode}>Source Code</a>
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    { title: 'docx2pdf-converter', description: 'npm package that convert docx file to pdf', liveLink: 'https://www.npmjs.com/package/docx2pdf-converter?activeTab=readme', sourceCode: 'https://github.com/Bansnetsajak007/docx2pdf-converter' },
    { title: 'FileShare', description: 'File Sharing application', liveLink: 'https://files-share-five.vercel.app', sourceCode: 'https://github.com/Bansnetsajak007/FilesShare'  },
    { title: 'Youtube2mp3', description: 'Youtube to mp3 converter using ejs (Embedded JavaScript)  ', liveLink: 'https://audio-downloader.onrender.com/', sourceCode: 'https://github.com/Bansnetsajak007/youtube2mp3'  },
    { title: 'CodingMemeAPi', description: 'Get random coding meme everytime' , liveLink: 'https://busy-gray-octopus-tux.cyclic.app', sourceCode: 'https://github.com/Bansnetsajak007/CodingMeme_Api'  },
    { title: 'Youtube-Viedo-summerizer', description: 'Express application that summarizes YouTube videos ', liveLink: 'https://youtube-viedo-summerizer.onrender.com', sourceCode: 'https://github.com/Bansnetsajak007/Youtube-Viedo-summerizer'  },
    { title: 'DforDuck', description: 'A Toy Programming language in Written C', liveLink: '', sourceCode: 'https://github.com/Bansnetsajak007/DforDuck'  },
  ];

  return (
    <div className="min-h-screen overflow-y-auto bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} liveLink={project.liveLink} sourceCode={project.sourceCode} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
