// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// const NavComponent = () => {
//   return (
//     <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-4">
//       <nav className="flex items-center justify-center">
//         <NavLink to="/"  className="text-xl pr-6">
//           Home
//         </NavLink>
//         <NavLink to="/about" className="text-xl ml-9 pr-6">
//           About Me
//         </NavLink>
//         <NavLink to="/projects" className="text-xl ml-9">
//           Projects
//         </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default NavComponent;


// NavComponent.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavComponent = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-4">
      <nav className="flex items-center justify-center">
        <NavLink to="/"  className="text-xl pr-6">
          Home
        </NavLink>
        <NavLink to="/about" className="text-xl ml-9 pr-6">
          About Me
        </NavLink>
        <NavLink to="/projects" className="text-xl ml-9">
          Projects
        </NavLink>
      </nav>
    </div>
  );
};

export default NavComponent;
