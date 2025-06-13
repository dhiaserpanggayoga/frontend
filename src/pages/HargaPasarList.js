import React from 'react';
import { Link } from 'react-router-dom';

const daftarPasar = [
  { nama: 'Pasar Pasir Gintung', slug: 'pasar-pasir-gintung', lokasi: 'Bandar Lampung', icon: '/icons/market.png' },
  { nama: 'Pasar Tugu', slug: 'pasar-tugu', lokasi: 'Bandar Lampung', icon: '/icons/market.png' },
  { nama: 'Pasar Natar', slug: 'pasar-natar', lokasi: 'Lampung Selatan', icon: '/icons/market.png' },
  { nama: 'Pasar Unit 2', slug: 'pasar-unit-2', lokasi: 'Tulang Bawang', icon: '/icons/market.png' },
  { nama: 'Pasar Metro Pusat', slug: 'pasar-metro', lokasi: 'Kota Metro', icon: '/icons/market.png' },
  // Tambahkan pasar lainnya di sini...
];

function HargaPasarList() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 to-white py-12 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          🏬 Daftar Pasar di Provinsi Lampung
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {daftarPasar.map((pasar, index) => (
            <Link
              key={index}
              to={`/harga-pasar/${pasar.slug}`}
              className="bg-white rounded-xl shadow hover:shadow-lg p-6 transition-all duration-300 hover:scale-[1.02] border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <img src={pasar.icon} alt={pasar.nama} className="w-14 h-14 object-contain" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{pasar.nama}</h3>
                  <p className="text-sm text-gray-500">{pasar.lokasi}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HargaPasarList;
