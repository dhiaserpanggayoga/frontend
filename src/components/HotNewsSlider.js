import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const newsData = [
  {
    id: 1,
    title: 'Lampung Targetkan Kenaikan Nilai IDI',
    date: '31/05/2024',
    image: '/berita1.jpg',
    external: false,
  },
  {
    id: 2,
    title: 'Pelantikan Bupati Way Kanan',
    date: '01/06/2024',
    image: '/berita2.jpeg',
    external: false,
  },
  {
    id: 3,
    title: 'Detik: Infrastruktur Lampung Dipercepat',
    date: '02/06/2024',
    image: '/berita3.jpg',
    external: true,
    link: 'https://news.detik.com/berita/d-1234567/judul-berita',
  },
  {
    id: 4,
    title: 'Pemprov Lampung Berencana Anggarkan Operasional SMA, SMK dan SLB Negeri Pengganti Uang Komite yang Dihapus',
    date: '03/06/2024',
    image: '/berita5.jpg',
    external: true,
    link: 'https://www.msn.com/id-id/politik/pemerintah/pemprov-lampung-berencana-anggarkan-operasional-sma-smk-dan-slb-negeri-pengganti-uang-komite-yang-dihapus/ar-AA1GoRtj?ocid=BingNewsVerp',
  },
   {
    id: 5,
    title: 'Satlantas Polres Tulangbawang Polda Lampung Optimalkan Sosialisasi Bahaya odol',
    date: '03/06/2024',
    image: '/berita6.jpg',
    external: true,
    link: 'https://lampung.tribunnews.com/2025/06/10/satlantas-polres-tulangbawang-polda-lampung-optimalkan-sosialisasi-bahaya-odolhttps://www.msn.com/id-id/politik/pemerintah/pemprov-lampung-berencana-anggarkan-operasional-sma-smk-dan-slb-negeri-pengganti-uang-komite-yang-dihapus/ar-AA1GoRtj?ocid=BingNewsVerp',
  },
];


function HotNewsSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-20 font-sans relative">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white tracking-tight">
        BERITA TERKINI
      </h2>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={32}
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={600}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-16"
      >
        {newsData.map((item, index) => (
          <SwiperSlide key={index}>
            {item.external ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden h-full flex flex-col"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-yellow-500 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto">{item.date}</p>
                </div>
              </a>
            ) : (
              <Link
                to={`/berita/${item.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden h-full flex flex-col"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-yellow-500 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto">{item.date}</p>
                </div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ⬅️ Panah Navigasi Custom */}
     <button
  onClick={() => swiperRef.current.slidePrev()}
  className="absolute top-1/2 left-2 md:left-4 z-20 -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:scale-110 hover:text-yellow-500 text-gray-700 dark:text-white transition"
>
  <FaChevronLeft />
</button>
<button
  onClick={() => swiperRef.current.slideNext()}
  className="absolute top-1/2 right-2 md:right-4 z-20 -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:scale-110 hover:text-yellow-500 text-gray-700 dark:text-white transition"
>
  <FaChevronRight />
</button>

    </section>
  );
}

export default HotNewsSlider;
