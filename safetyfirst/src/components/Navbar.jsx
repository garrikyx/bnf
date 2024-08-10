import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">Instagran</Link>
          
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 rounded-md px-3 py-1 focus:outline-none"
            />
          </div>
          
          <div className="flex items-center space-x-6">
            <NavLink to="/" icon={<Home size={24} />} active={location.pathname === '/'} />
            <NavLink to="/explore" icon={<Search size={24} />} active={location.pathname === '/explore'} />
            <NavLink to="/register" icon={<PlusSquare size={24} />} active={location.pathname === '/register'} />
            <NavLink to="/report" icon={<Heart size={24} />} active={location.pathname === '/report'} />
            <NavLink to="/register" icon={<User size={24} />} active={location.pathname === '/register'} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, active }) => {
  const activeClass = active ? "text-black" : "text-gray-500 hover:text-black";

  return (
    <Link to={to} className={`${activeClass} transition-colors duration-300`}>
      {icon}
    </Link>
  );
};

export default Navbar;