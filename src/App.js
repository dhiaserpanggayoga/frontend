import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BeritaDetail from './pages/BeritaDetail';
import PelayananPublik from './pages/PelayananPublik';
import HargaPasarList from './pages/HargaPasarList';
import PasarDetail from './pages/PasarDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berita/:id" element={<BeritaDetail />} />
          <Route path="/pelayanan-publik" element={<PelayananPublik />} />
          <Route path="/harga-pasar" element={<HargaPasarList />} />
          <Route path="/harga-pasar/:namaPasar" element={<PasarDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
