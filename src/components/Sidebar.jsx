import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Sidebar({ isOpenBar, setIsOpenBar }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={`bg-[#252d3f] p-6 space-y-8 transition-all duration-300 ease-in-out absolute md:relative h-screen ${
      isOpenBar ? 'w-full md:w-64' : 'w-0 overflow-hidden transition-all duration-300 ease-in-out px-0'
    }`}>
      <div onClick={() => {
        navigate('/dashboard');
        setIsOpenBar(false);
        }} className="cursor-pointer flex-shrink-0 w-64">
        <Logo />
      </div>
      
      <div className="space-y-6 flex-shrink-0 h-full w-full md-w-64">
        <div>
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Main</h3>
          <div className="mt-2 space-y-1">
            <Link
              to="/dashboard"
              className={`flex items-center w-full px-4 py-2 text-gray-300 hover:bg-[#1e2536] rounded-lg transition-colors ${
                location.pathname === '/dashboard' ? 'bg-[#1e2536] text-white' : ''
              }`}
            >
              {/* <LayoutDashboard className="w-5 h-5 mr-3" /> */}
              Dashboard
            </Link>
          </div>
        </div>

        <div>
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Tools</h3>
          <div className="mt-2 space-y-1">
            <Link
              to="/email-creator"
              className={`flex items-center w-full px-4 py-2 text-gray-300 hover:bg-[#1e2536] rounded-lg transition-colors ${
                location.pathname === '/email-creator' ? 'bg-[#1e2536] text-white' : ''
              }`}
            >
              {/* <MailPlus className="w-5 h-5 mr-3" /> */}
              Email Creator
            </Link>
            <Link
              to="/email-list"
              className={`flex items-center w-full px-4 py-2 text-gray-300 hover:bg-[#1e2536] rounded-lg transition-colors ${
                location.pathname === '/email-list' ? 'bg-[#1e2536] text-white' : ''
              }`}
            >
              {/* <Mail className="w-5 h-5 mr-3" /> */}
              Email List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}