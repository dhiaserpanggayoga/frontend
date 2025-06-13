import React, { useState } from 'react';
import { FiDownload, FiPrinter } from 'react-icons/fi';

const dataHarga = [
  { komoditas: 'Beras Rojolele', satuan: 'Kg', harga: 12300, status: 'Stabil' },
  { komoditas: 'Cabai Merah', satuan: 'Kg', harga: 45000, status: 'Naik' },
  { komoditas: 'Telur Ayam', satuan: 'Kg', harga: 28500, status: 'Turun' },
  { komoditas: 'Minyak Goreng', satuan: 'Ltr', harga: 17000, status: 'Stabil' },
  { komoditas: 'Bawang Merah', satuan: 'Kg', harga: 32000, status: 'Naik' },
];

function PasarDetail() {
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('tabel');

  const filteredData = dataHarga.filter(item =>
    item.komoditas.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
            🛒 Harga Komoditas – Pasar Pasir Gintung
          </h1>
          <p className="text-sm text-gray-500">Terakhir diupdate: 12 Juni 2025</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 border-b pb-2 text-sm">
          {['tabel', 'grid', 'statistik'].map(label => (
            <button
              key={label}
              onClick={() => setTab(label)}
              className={`uppercase font-semibold px-3 py-1 border-b-2 ${
                tab === label
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              } transition`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Search & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Cari komoditas..."
            className="w-full sm:w-1/3 px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <FiDownload className="text-lg text-gray-700 dark:text-white" />
            </button>
            <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <FiPrinter className="text-lg text-gray-700 dark:text-white" />
            </button>
          </div>
        </div>

        {/* Table View */}
        {tab === 'tabel' && (
          <div className="overflow-x-auto border rounded-lg shadow mt-4">
            <table className="min-w-full bg-white dark:bg-gray-800 text-sm">
              <thead className="bg-gray-100 dark:bg-gray-700 text-left">
                <tr>
                  <th className="py-3 px-4">Komoditas</th>
                  <th className="py-3 px-4">Satuan</th>
                  <th className="py-3 px-4">Harga</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2 px-4">{item.komoditas}</td>
                    <td className="py-2 px-4">{item.satuan}</td>
                    <td className="py-2 px-4">Rp. {item.harga.toLocaleString()}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          item.status === 'Naik'
                            ? 'bg-red-100 text-red-600'
                            : item.status === 'Turun'
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-green-100 text-green-600'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
                      Tidak ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Grid View */}
        {tab === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredData.map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-4 border rounded-lg shadow flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.komoditas}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Satuan: {item.satuan}
                </p>
                <p className="text-md font-bold text-gray-900 dark:text-yellow-400">
                  Rp. {item.harga.toLocaleString()}
                </p>
                <span
                  className={`mt-2 self-start px-2 py-1 text-xs font-medium rounded-full ${
                    item.status === 'Naik'
                      ? 'bg-red-100 text-red-600'
                      : item.status === 'Turun'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-green-100 text-green-600'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Statistik View */}
        {tab === 'statistik' && (
          <div className="text-center text-gray-500 dark:text-gray-400 italic py-10">
            Grafik dan statistik belum tersedia di versi ini.
          </div>
        )}
      </div>
    </section>
  );
}

export default PasarDetail;
