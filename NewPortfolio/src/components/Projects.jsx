// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavComponent from './NavComponent';

// const ProjectCard = ({ name, description, html_url }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
//       <h2 className="text-xl font-bold mb-2">{name}</h2>
//       <p className="text-gray-700">{description}</p>
//       <a href={html_url} className="text-blue-500 hover:underline block mt-2" target="_blank" rel="noopener noreferrer">
//         View on GitHub
//       </a>
//     </div>
//   );
// };

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get('https://api.github.com/users/your-github-username/repos', {
//           headers: {
//             Authorization: 'Bearer your-personal-access-token',
//           },
//         });
//         setProjects(response.data);
//       } catch (error) {
//         console.error('Error fetching GitHub projects:', error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <>
//       <style>
//         {`
//           body, html {
//             margin: 0;
//             padding: 0;
//             font-family: 'Roboto', sans-serif;
//           }
//         `}
//       </style>
//       <NavComponent />
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
//         <div className="max-w-6xl mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard
//               key={index}
//               name={project.name}
//               description={project.description}
//               html_url={project.html_url}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;




import React from 'react';
import NavComponent from './NavComponent';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'Description for Project 1' },
    { title: 'Project 2', description: 'Description for Project 2' },
    { title: 'Project 3', description: 'Description for Project 3' },
    { title: 'Project 4', description: 'Description for Project 4' },
    { title: 'Project 5', description: 'Description for Project 5' },
    { title: 'Project 6', description: 'Description for Project 6' },
  ];

  return (
    <>
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style>
      <NavComponent />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
        <div className="max-w-6xl mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
