import React from 'react';

const dataKota = [
  {
    nama: 'Bandar Lampung',
    gambar: '/kota1.jpg',
  },
  {
    nama: 'Metro',
    gambar: '/kota2.jpg',
  },
  {
    nama: 'Lampung Selatan',
    gambar: '/kota3.jpg',
  },
  {
    nama: 'Lampung Tengah',
    gambar: '/kota4.jpg',
  },
  {
    nama: 'Pesawaran',
    gambar: '/kota5.jpg',
  },
  {
    nama: 'Tulang Bawang',
    gambar: '/kota6.jpg',
  },
];

function KabupatenKotaSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-20 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        PEMERINTAH KABUPATEN / KOTA
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dataKota.map((kota, idx) => (
          <div
            key={idx}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <img
              src={kota.gambar}
              alt={kota.nama}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {kota.nama}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KabupatenKotaSection;
