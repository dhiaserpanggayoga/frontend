import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#102027] shadow-md'
          : 'bg-gradient-to-r from-[#102027] via-[#263238] to-[#37474F]'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo + Text */}
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <span className="text-white font-bold text-lg block">
              PEMPROV LAMPUNG
            </span>
            <span className="text-white text-xs font-light tracking-wider">
              Sai Bumi Ruwa Jurai
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {['Beranda', 'Profil', 'Berita', 'Informasi', 'Galeri', 'Kontak', 'IPKD'].map(
            (menu) => (
              <a
                key={menu}
                href={`#${menu.toLowerCase()}`}
                className="font-medium text-sm text-white hover:text-yellow-400 transition"
              >
                {menu}
              </a>
            )
          )}
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#fff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[#102027] px-4 pb-4">
          {['Beranda', 'Profil', 'Berita', 'Informasi', 'Galeri', 'Kontak', 'IPKD'].map(
            (menu) => (
              <a
                key={menu}
                href={`#${menu.toLowerCase()}`}
                className="block py-2 text-white hover:text-yellow-400 font-medium"
              >
                {menu}
              </a>
            )
          )}
        </div>
      )}

      {/* Motif Tapis Garis Bawah */}
      <div
        className="h-[10px] bg-repeat-x"
        style={{
          backgroundImage: "url('/motif-tipis.png')",
          backgroundSize: 'contain',
        }}
      ></div>
    </header>
  );
}

export default Navbar;
