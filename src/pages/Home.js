import React from 'react';

function Home() {
  return (
    <div className="scroll-smooth">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px]"
        style={{ backgroundImage: `url('/lampung.jpg')` }} // gunakan gambar terang & seimbang
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-center">
          <div className="text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-md">
              Selamat Datang di Website Resmi
            </h1>
            <h2 className="text-lg md:text-3xl font-medium mb-6 drop-shadow-md">
              Pemerintah Provinsi Lampung
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="text"
                placeholder="Cari informasi..."
                className="px-4 py-2 rounded-lg w-72 text-black focus:outline-none shadow"
              />
              <a href="#pimpinan">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow transition">
                  Lihat Profil
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pimpinan Daerah */}
      <section
        id="pimpinan"
        className="relative bg-cover bg-center py-20 px-6 md:px-20"
        style={{ backgroundImage: `url('/lampung.jpg')` }} // gunakan gambar YANG SAMA agar menyatu
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-12">Pimpinan Daerah</h2>
          <div className="grid gap-12 md:grid-cols-2 justify-center items-start">
            {/* Gubernur */}
            <div>
              <img
                src="/gubernur.png"
                alt="Gubernur"
                className="mx-auto w-52 h-64 object-cover rounded-xl shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold">RAHMAT MIRZANI DJAUSAL, S.T, M.M</h3>
              <p className="text-sm">Gubernur Lampung</p>
            </div>

            {/* Wakil Gubernur */}
            <div>
              <img
                src="/LAMPUN.png"
                alt="Wakil Gubernur"
                className="mx-auto w-52 h-64 object-cover rounded-xl shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold">dr. JIHAN NURLELA, M.M.</h3>
              <p className="text-sm">Wakil Gubernur Lampung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Berita Terkini */}
      <section className="py-12 px-6 md:px-20 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Berita Terkini</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={`/berita${item}.jpg`}
                alt={`Berita ${item}`}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-semibold text-lg mb-1">Judul Berita {item}</h3>
              <p className="text-sm text-gray-600">
                Deskripsi singkat isi berita yang relevan dengan masyarakat Lampung.
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
