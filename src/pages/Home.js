import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import HotNewsSlider from '../components/HotNewsSlider';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';
import KabupatenKotaSection from '../components/KabupatenKotaSection';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  // Menambahkan state untuk berita yang dipilih
  const [selectedNews, setSelectedNews] = useState(null);

  // Function untuk menangani klik pada berita
  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 relative">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* HeroSection */}
      <HeroSection />

      {/* Motif Lampung */}
      <div
        className="w-full h-[46px] bg-repeat-x bg-top"
        style={{
          backgroundImage: "url('/motif.png')",
          backgroundSize: 'contain',
        }}
      ></div>

      {/* Pimpinan Daerah */}
      <section
        className="relative bg-cover bg-center py-20 px-6 md:px-20 text-center"
        style={{ backgroundImage: "url('/tapis.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-white">
          <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg mb-12 animate-fade-in-up">
            PIMPINAN DAERAH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
            {[{
              name: 'RAHMAT MIRZANI DJAUSAL, S.T, M.M',
              title: 'Gubernur Provinsi Lampung',
              image: '/gubernur.png',
              delay: 'delay-100'
            }, {
              name: 'dr. JIHAN NURLELA, M.M.',
              title: 'Wakil Gubernur Provinsi Lampung',
              image: '/wakil.png',
              delay: 'delay-200'
            }].map((person, i) => (
              <div
                key={i}
                className={`group transform transition duration-500 animate-fade-in-up ${person.delay} cursor-pointer`}
              >
                <div className="w-[300px] h-[400px] mx-auto overflow-hidden rounded-2xl shadow-xl transition duration-500 group-hover:scale-105">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 uppercase mt-4 transform transition duration-300 group-hover:scale-105 group-hover:text-yellow-300">
                  {person.name}
                </h3>
                <p className="text-sm md:text-base text-gray-100 italic transition duration-300 group-hover:scale-105 group-hover:text-gray-300">
                  {person.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wrapper 2 Kolom */}
      <div className="flex flex-col md:flex-row px-6 md:px-20 gap-8 py-12">
        {/* Konten Utama */}
        <div className="w-full md:w-3/4 space-y-12">
          {/* Hot News */}
          <section id="hot-news">
            <HotNewsSlider onClick={handleNewsClick} />
          </section>

          {/* Layanan Publik */}
          <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4 md:px-6 transition-colors duration-300 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">LAYANAN PUBLIK</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {[{
                icon: '📝', title: 'Lembaga Pengadaan Secara Elektronik (LPSE)', desc: 'Pengadaan barang dan jasa secara elektronik.'
              }, {
                icon: '📞', title: 'Lapor Lampung', desc: 'Sampaikan keluhan atau laporan ke instansi.'
              }, {
                icon: '📬', title: 'Kontak Publik', desc: 'Akses mudah ke dinas atau petugas daerah.'
              }, {
                icon: '🌐', title: 'Layanan Online', desc: 'Layanan digital cepat dari rumah Anda.'
              }].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Info Perangkat Daerah */}
          <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-6 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">INFO PERANGKAT DAERAH</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {[{
                nama: 'Dinas Pendidikan', deskripsi: 'Mengelola urusan pendidikan dan kebudayaan.', ikon: '/icons/pendidikan.svg'
              }, {
                nama: 'Dinas Kesehatan', deskripsi: 'Melayani kesehatan masyarakat provinsi.', ikon: '/icons/kesehatan.svg'
              }, {
                nama: 'Dinas Perhubungan', deskripsi: 'Mengatur transportasi dan lalu lintas.', ikon: '/icons/perhubungan.svg'
              }, {
                nama: 'Dinas Kominfo', deskripsi: 'Menyediakan layanan informasi & komunikasi.', ikon: '/icons/kominfo.svg'
              }].map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                  <img src={item.ikon} alt={item.nama} className="w-16 h-16 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.nama}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.deskripsi}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pemerintah Kabupaten / Kota */}
          <KabupatenKotaSection />
        </div>

        {/* Sidebar Kanan */}
        <div className="w-full md:w-1/4 sticky top-28 h-fit">
          <SidebarKanan />
        </div>
      </div>
    </div>
  );
}

export default Home;
