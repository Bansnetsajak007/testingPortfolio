import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavComponent = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-4">
      <nav className="flex items-center justify-center">
        <NavLink to="/"  className="text-xl">
          Home
        </NavLink>
        <NavLink to="/about" className="text-xl ml-9">
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
