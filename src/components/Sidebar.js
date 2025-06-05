// src/components/Sidebar.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdGTranslate } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-20 bg-[#060C63] text-white flex flex-col items-center py-6 space-y-6 z-50 hover:w-56 transition-all duration-300 overflow-hidden group">
      {/* Logo & Title */}
      <div className="flex flex-col items-start px-4 w-full">
        <img src="/logo.png" alt="Logo" className="w-10 mb-2" />
        <span className="text-sm font-semibold whitespace-nowrap group-hover:opacity-100 opacity-0 transition-opacity duration-300">
          PEMPROV LAMPUNG
        </span>
      </div>

      {/* Menu */}
      <nav className="flex flex-col items-start px-4 space-y-6 w-full">
        {[
          { icon: '🏛️', label: 'Pelayanan Publik' },
          { icon: '📊', label: 'Open Data Lampung' },
          { icon: '🗂️', label: 'PPID Lampung' },
          { icon: '⚙️', label: 'Tata Kelola Pemerintahan' },
          { icon: '🏖️', label: 'Pariwisata' },
          { icon: '📱', label: 'Apps Provinsi' },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4 text-sm hover:text-yellow-400 cursor-pointer">
            <span className="text-xl">{item.icon}</span>
            <span className="whitespace-nowrap group-hover:inline-block hidden">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Language */}
      <div className="flex flex-col items-start px-4 space-y-2">
        <div className="flex items-center space-x-3">
          <MdGTranslate className="text-xl" />
          <span className="text-sm group-hover:inline-block hidden">Bahasa/EN</span>
        </div>
      </div>

      {/* Social */}
      <div className="flex items-center space-x-4 px-4 pb-4">
        <FaFacebookF className="hover:text-yellow-400" />
        <FaTwitter className="hover:text-yellow-400" />
        <FaInstagram className="hover:text-yellow-400" />
        <FaYoutube className="hover:text-yellow-400" />
      </div>
    </aside>
  );
};

export default Sidebar;
