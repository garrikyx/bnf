import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Shield, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-blue-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/" icon={<Home size={18} />} text="Home" mobile active={location.pathname === '/'} />
            <NavLink to="/register" icon={<User size={18} />} text="Register" mobile active={location.pathname === '/register'} />
            <NavLink to="/report" icon={<Shield size={18} />} text="Report Harm" mobile active={location.pathname === '/report'} />
            <NavLink to="/resources" icon={<Phone size={18} />} text="Resources" mobile active={location.pathname === '/resources'} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, icon, text, mobile, active }) => {
  const baseClasses = "flex items-center transition-colors duration-300 ease-in-out";
  const mobileClasses = mobile ? "block px-3 py-2 rounded-md text-base font-medium" : "px-3 py-2 rounded-md text-sm font-medium";
  const activeClasses = active ? "bg-blue-700 text-white" : "text-blue-100 hover:bg-blue-500 hover:text-white";

  return (
    <Link to={to} className={`${baseClasses} ${mobileClasses} ${activeClasses}`}>
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  );
};

export default Navbar;
