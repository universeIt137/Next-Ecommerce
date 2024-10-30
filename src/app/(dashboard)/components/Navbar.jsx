import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <input 
        type="text" 
        placeholder="Search" 
        className="bg-gray-200 rounded px-3 py-2 w-1/3 outline-none" 
      />
      <div className="flex space-x-6 items-center">
        <div className="flex space-x-3">
          <i className="fas fa-envelope text-gray-600"></i>
          <i className="fas fa-bell text-gray-600"></i>
          <i className="fas fa-user-circle text-gray-600"></i>
        </div>
        <div className="text-gray-700">Hello, None</div>
      </div>
    </header>
  );
};

export default Navbar;
