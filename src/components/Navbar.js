import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="bg-white shadow-md rounded-b-2xl px-6 py-2 flex items-center">
      {/* Kiri: Logo + Judul */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo Lampung" className="h-12 w-auto" />
        <div className="leading-tight">
          <h1 className="text-lg font-bold text-black">Lampung</h1>
          <p className="text-sm text-gray-600 -mt-1">Sai Bumi Ruwa Jurai</p>
        </div>
      </div>

      {/* Menu Navigasi */}
      <ul className="flex ml-8 space-x-9 text-sm text-black font-medium">
        <li className="font-bold underline underline-offset-8 decoration-[2px]">Beranda</li>
        <li className="hover:underline underline-offset-8 decoration-[2px]">Profile</li>
        <li className="hover:underline underline-offset-8 decoration-[2px]">Berita</li>
        <li className="hover:underline underline-offset-8 decoration-[2px]">Informasi</li>
        <li className="hover:underline underline-offset-8 decoration-[2px]">Galery</li>
        <li className="hover:underline underline-offset-8 decoration-[2px]">Contact</li>
        <li className="hover:underline underline-offset-8 decoration-[2px]">IPKD</li>
      </ul>
    </nav>
  );
}

export default Navbar;
