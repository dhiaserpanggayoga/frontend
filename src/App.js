import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BeritaDetail from './pages/BeritaDetail';  // Halaman berita detail
import PelayananPublik from './pages/PelayananPublik';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berita/:id" element={<BeritaDetail />} /> {/* Rute untuk halaman detail berita */}
          <Route path="/pelayanan-publik" element={<PelayananPublik />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
