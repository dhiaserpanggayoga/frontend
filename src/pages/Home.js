import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import HotNewsSlider from '../components/HotNewsSlider';
import Sidebar from '../components/Sidebar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  const [sidebarOffset, setSidebarOffset] = useState(0);

  useEffect(() => {
    const section = document.getElementById('hot-news');
    if (section) {
      const rect = section.getBoundingClientRect();
      const offsetTop = window.scrollY + rect.top;
      setSidebarOffset(offsetTop);
    }
  }, []);

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 relative">
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

      {/* Sidebar muncul setelah HOT NEWS */}
      <div style={{ position: 'absolute', top: `${sidebarOffset}px` }}>
        <Sidebar />
      </div>

      {/* HOT NEWS */}
      <section id="hot-news">
        <HotNewsSlider />
      </section>

      {/* LAYANAN PUBLIK */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 px-6 md:px-20 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">LAYANAN PUBLIK</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: '📝', title: 'Lembaga Pengadaan Secara Elektronik (LPSE)', desc: 'pengadaan barang dan jasa secara elektronik.' },
            { icon: '📞', title: 'Lapor Lampung', desc: 'Sampaikan keluhan atau laporan ke instansi.' },
            { icon: '📬', title: 'Kontak Publik', desc: 'Akses mudah ke dinas atau petugas daerah.' },
            { icon: '🌐', title: 'Layanan Online', desc: 'Layanan digital cepat dari rumah Anda.' }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INFO PERANGKAT DAERAH */}
      <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          INFO PERANGKAT DAERAH
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { nama: 'Dinas Pendidikan', deskripsi: 'Mengelola urusan pendidikan dan kebudayaan.', ikon: '/icons/pendidikan.svg' },
            { nama: 'Dinas Kesehatan', deskripsi: 'Melayani kesehatan masyarakat provinsi.', ikon: '/icons/kesehatan.svg' },
            { nama: 'Dinas Perhubungan', deskripsi: 'Mengatur transportasi dan lalu lintas.', ikon: '/icons/perhubungan.svg' },
            { nama: 'Dinas Kominfo', deskripsi: 'Menyediakan layanan informasi & komunikasi.', ikon: '/icons/kominfo.svg' }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
              <img src={item.ikon} alt={item.nama} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.nama}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PEMERINTAH KABUPATEN / KOTA */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 px-6 md:px-20 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          PEMERINTAH KABUPATEN / KOTA
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { nama: 'Bandar Lampung', gambar: '/kota1.jpg' },
            { nama: 'Metro', gambar: '/kota2.jpg' },
            { nama: 'Lampung Selatan', gambar: '/kota3.jpg' },
            { nama: 'Lampung Tengah', gambar: '/kota4.jpg' },
            { nama: 'Pesawaran', gambar: '/kota5.jpg' },
            { nama: 'Tulang Bawang', gambar: '/kota6.jpg' }
          ].map((kota, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition duration-300">
              <img src={kota.gambar} alt={kota.nama} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{kota.nama}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
