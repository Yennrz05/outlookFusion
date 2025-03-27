import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { FaBars, FaRegListAlt } from 'react-icons/fa';
import { TbMailPlus } from 'react-icons/tb';
import { RiDashboardFill } from 'react-icons/ri';

export default function Sidebar({ isOpenBar, setIsOpenBar }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={`bg-[#0f172a] p-6 space-y-8 transition-all duration-300 ease-in-out absolute md:relative h-screen ${isOpenBar ? 'w-full md:w-64' : 'w-0 overflow-hidden transition-all duration-300 ease-in-out px-0'
      }`}>
      <div onClick={() => {
        navigate('/dashboard');
        setIsOpenBar(false);
      }} className="w-full cursor-pointer flex-shrink-0 w-64 flex justify-between items-center">
        <Logo />
        <div className="text-white p-2 rounded-md hover:bg-gray-700 transition-colors cursor-pointer md:hidden" onClick={() => setIsOpenBar((prev) => !prev)}>
          <FaBars />
        </div>
      </div>

      <div className="space-y-6 flex-shrink-0 h-full w-full md-w-64">
        <div>
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Main</h3>
          <div className="mt-2 space-y-1">
            <Link
              to="/dashboard"
              className={`flex items-center w-full px-4 py-2 text-gray-300 hover:bg-[#1e2536] rounded-lg transition-colors ${location.pathname === '/dashboard' ? 'bg-[#1e2536] text-white' : ''
                }`}
            >
              <RiDashboardFill className="w-5 h-5 mr-3 flex-shrink-0" />
              Dashboard
            </Link>
          </div>
        </div>

        <div>
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Tools</h3>
          <div className="mt-2 space-y-1">
            <Link
              to="/email-creator"
              className={`flex items-center whitespace-nowrap w-full flex-shrink-0  px-4 py-2 text-gray-300 hover:bg-[#1e2536] rounded-lg transition-colors ${location.pathname === '/email-creator' ? 'bg-[#1e2536] text-white' : ''
                }`}
            >
              <TbMailPlus className="w-5 h-5 mr-3 flex-shrink-0" />
              Email Creator
            </Link>
            <Link
              to="/email-list"
              className={`flex items-center whitespace-nowrap w-full px-4 py-2 text-gray-300 hover:bg-[#1e2536] rounded-lg transition-colors ${location.pathname === '/email-list' ? 'bg-[#1e2536] text-white' : ''
                }`}
            >
              <FaRegListAlt className="w-5 h-5 mr-3 flex-shrink-0" />
              Email List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}