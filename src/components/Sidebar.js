import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdGTranslate } from 'react-icons/md';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-16 group hover:w-auto bg-gradient-to-r from-[#102027] via-[#263238] to-[#37474F] text-white transition-all duration-300 z-50 flex flex-col items-center py-6 space-y-6 overflow-hidden shadow-md">
      {/* Logo & Text */}
      <div className="flex flex-col items-start px-4 w-full">
        <img src="/logo.png" alt="Logo" className="w-10 mb-1" />
        <span className="text-xs font-semibold tracking-tight whitespace-nowrap group-hover:opacity-100 opacity-0 transition-opacity duration-300">
          PEMPROV LAMPUNG
        </span>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col items-start px-5 space-y-6 w-full mt-9">
        {/* Link to Pelayanan Publik Page */}
        <Link to="/pelayanan-publik">
          <div className="flex items-center space-x-3 text-sm hover:text-yellow-400 cursor-pointer">
            <span className="text-xl">🏛️</span>
            <span className="whitespace-nowrap group-hover:inline-block hidden">Pelayanan Publik</span>
          </div>
        </Link>

        {/* Open Data Lampung (mengarah ke URL eksternal) */}
        <a 
          href="https://data.lampungprov.go.id/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-3 text-sm hover:text-yellow-400 cursor-pointer"
        >
          <span className="text-xl">📊</span>
          <span className="whitespace-nowrap group-hover:inline-block hidden">Open Data Lampung</span>
        </a>

        {/* PPID Lampung (mengarah ke URL eksternal) */}
        <a 
          href="https://ppid.lampungprov.go.id/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-3 text-sm hover:text-yellow-400 cursor-pointer"
        >
          <span className="text-xl">🗂️</span>
          <span className="whitespace-nowrap group-hover:inline-block hidden">PPID Lampung</span>
        </a>

        {/* Pariwisata (mengarah ke URL eksternal) */}
        <a 
          href="https://disparekraf.lampungprov.go.id/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-3 text-sm hover:text-yellow-400 cursor-pointer"
        >
          <span className="text-xl">🏖️</span>
          <span className="whitespace-nowrap group-hover:inline-block hidden">Pariwisata</span>
        </a>

        {/* Other Links */}
        {[ 
          { icon: '⚙️', label: 'Tata Kelola', link: '/tata-kelola' },
          { icon: '📱', label: 'Apps Provinsi', link: '/apps-provinsi' },
        ].map((item, idx) => (
          <Link to={item.link} key={idx}>
            <div className="flex items-center space-x-3 text-sm hover:text-yellow-400 cursor-pointer">
              <span className="text-xl">{item.icon}</span>
              <span className="whitespace-nowrap group-hover:inline-block hidden">{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>

      <div className="flex-grow" />

      {/* Language */}
      <div className="flex items-center space-x-3 px-4">
        <MdGTranslate className="text-lg" />
        <span className="text-sm group-hover:inline-block hidden">Bahasa/EN</span>
      </div>

      {/* Social Media */}
      <div className="flex items-center space-x-3 px-4 pt-4">
        <FaFacebookF className="hover:text-yellow-400" />
        <FaTwitter className="hover:text-yellow-400" />
        <FaInstagram className="hover:text-yellow-400" />
        <FaYoutube className="hover:text-yellow-400" />
      </div>
    </aside>
  );
};

export default Sidebar;
