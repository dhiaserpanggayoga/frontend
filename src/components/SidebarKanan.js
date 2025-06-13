import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

function SidebarKanan() {
  return (
    <aside
      className="w-full md:w-96 bg-[#f5f5f5] dark:bg-gray-800 p-6 rounded-xl shadow space-y-8 text-base"
      style={{ minHeight: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
    >
      {/* Pencarian */}
      <div className="relative">
        <input
          type="text"
          placeholder="Cari dan Tekan Enter ..."
          className="w-full py-3 px-4 rounded-lg bg-[#ebdbc7] text-gray-800 focus:outline-none"
        />
      </div>

      {/* Pilih Bahasa */}
      <div>
        <p className="font-semibold mb-2 text-sm text-gray-700 dark:text-gray-200">Pilih Bahasa</p>
        <div className="flex justify-between items-center gap-2 bg-white dark:bg-gray-700 rounded-lg px-4 py-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <img src="/indonesia.jpg" alt="ID" className="w-6 h-4 rounded-sm" />
            <span className="text-sm">Indonesia</span>
            <input type="radio" name="lang" defaultChecked className="ml-2" />
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <img src="/inggris.jpg" alt="EN" className="w-6 h-4 rounded-sm" />
            <span className="text-sm">English</span>
            <input type="radio" name="lang" className="ml-2" />
          </label>
        </div>
      </div>

      {/* Call Center */}
      <div className="bg-[#081d3a] text-white p-6 rounded-lg text-center space-y-2 shadow">
        <div className="flex justify-center items-center space-x-2">
          <FaPhoneAlt size={20} />
          <span className="font-bold uppercase">Call Center</span>
        </div>
        <p className="text-2xl font-bold">08117905000</p>
      </div>

      {/* FOLA */}
      <div className="flex justify-center items-center">
        <img
          src="/fola.png"
          alt="Forum Investasi Lampung"
          className="max-w-[300px] object-contain"
        />
      </div>

      {/* Harga Pasar Terbaru */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Harga Pasar Terbaru</h3>
          <button className="text-sm text-gray-500 underline">List Pasar</button>
        </div>

        {/* Item Harga Pasar */}
        <div className="bg-[#081d3a] text-white px-4 py-2 rounded-lg text-center font-bold mb-2">
          PASAR PASIR GINTUNG
        </div>
        <div className="flex items-center space-x-4">
          <img src="/icons/beras.png" alt="Beras" className="w-12 h-12 object-contain" />
          <div>
            <p className="font-semibold">Beras Medium Merk Rojolele</p>
            <p className="text-gray-500 text-sm">Rp. 12.300 / Kg</p>
          </div>
          <span className="ml-auto px-2 py-1 bg-gray-200 text-xs rounded">Stabil</span>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Kontak */}
      <div className="flex justify-center space-x-4 pt-4 border-t">
        <a href="#" className="text-gray-600 hover:text-blue-500">
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-400">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-pink-500">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-red-500">
          <i className="fab fa-youtube text-xl"></i>
        </a>
      </div>
    </aside>
  );
}

export default SidebarKanan;
