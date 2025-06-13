// src/pages/Video.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';  // Jika ada Sidebar kanan

const Video = () => {
  return (
    <div className="flex">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Utama */}
      <main className="flex-grow p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Video</h1>
          <p>Ini adalah halaman untuk menampilkan video.</p>
          {/* Embed video YouTube */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/example_video"  // Ganti dengan video YouTube yang diinginkan
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>

      {/* Sidebar Kanan */}
      <SidebarKanan />
    </div>
  );
};

export default Video;