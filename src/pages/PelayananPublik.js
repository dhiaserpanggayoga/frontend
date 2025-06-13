// src/pages/PelayananPublik.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

const PelayananPublik = () => {
  const pelayananData = [
    { title: "Lembaga Pengadaan Secara Elektronik", description: "LPSE Pemprov Lampung", visits: 2818 },
    { title: "Sigajah Lampung Mobile Apps", description: "Sigajah Mobile", visits: 1524 },
    { title: "Pengadaan Barang dan Jasa", description: "Pengadaan Barang dan Jasa", visits: 1425 },
    { title: "JDIH Setwan DPRD", description: "JDIH Setwan DPRD", visits: 1911 },
  ];

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 relative">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Utama + Sidebar Kanan */}
      <div className="flex flex-col md:flex-row px-6 md:px-20 gap-8 py-12">
        {/* Konten Utama */}
        <div className="w-full md:w-3/4">
          <div
            className="w-full p-10 border-[32px] rounded-3xl shadow-2xl bg-white dark:bg-gray-900"
            style={{
              borderImage: "url('/frame.png') 100 round",
              borderImageSlice: 100,
              borderStyle: "solid",
            }}
          >
            <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800 dark:text-white tracking-wide">
              Pelayanan Publik di Lampung
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pelayananData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  <p className="text-sm text-gray-500 mt-4">Dikunjungi: {item.visits} kali</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Kanan */}
        <div className="w-full md:w-1/4 sticky top-28 h-fit">
          <SidebarKanan />
        </div>
      </div>
    </div>
  );
};

export default PelayananPublik;
