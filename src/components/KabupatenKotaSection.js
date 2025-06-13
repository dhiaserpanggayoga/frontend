import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const KabupatenKotaSection = () => {
  const swiperRef = useRef(null);
  const kabupatenKota = [
    { logo: '/logos/balam.webp', url: 'https://bandarlampungkota.go.id/' },
    { logo: '/logos/metro.webp', url: 'https://www.metrokota.go.id/' },
    { logo: '/logos/lamsel.webp', url: 'https://www.lampungselatankab.go.id/' },
    { logo: '/logos/lamteng.webp', url: 'https://www.lampungtengahkab.go.id/' },
    { logo: '/logos/lamtim.webp', url: 'https://www.lampungtimurkab.go.id/' },
    { logo: '/logos/lambar.webp', url: 'https://www.lampungbaratkab.go.id/' },
    { logo: '/logos/lamtara.webp', url: 'https://www.lampungutarakab.go.id/' },
    { logo: '/logos/tulang.webp', url: 'https://tulangbawangkab.go.id/' },
    { logo: '/logos/tubaba.webp', url: 'https://www.tulangbawangbaratkab.go.id/' },
    { logo: '/logos/tanggamus.webp', url: 'https://www.tanggamuskab.go.id/' },
    { logo: '/logos/pesawaran.webp', url: 'https://www.pesawaran.go.id/' },
    { logo: '/logos/pringsewu.webp', url: 'https://www.pringsewukab.go.id/' },
    { logo: '/logos/waykanan.webp', url: 'https://www.waykanankab.go.id/' },
    { logo: '/logos/mesuji.webp', url: 'https://mesujikab.go.id/' },
    { logo: '/logos/pesisir.webp', url: 'https://pesisirbaratkab.go.id/' },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4 md:px-6 rounded-lg shadow">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        PEMERINTAH KABUPATEN / KOTA
      </h2>
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={10}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={1000}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
            1280: { slidesPerView: 9 },
            1536: { slidesPerView: 11 },
          }}
        >
          {kabupatenKota.map((item, index) => (
            <SwiperSlide key={index} className="w-auto flex justify-center items-center">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => swiperRef.current?.swiper?.slideToLoop(index)}
                onTouchStart={() => swiperRef.current?.swiper?.slideToLoop(index)}
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={item.logo}
                  alt={`Logo ${item.url}`}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-md shadow-md"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigasi Panah */}
        <div
          className="swiper-button-prev absolute -left-6 md:-left-8 top-1/2 z-10 -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:scale-110 hover:text-yellow-500 text-gray-700 dark:text-white transition"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaChevronLeft />
        </div>
        <div
          className="swiper-button-next absolute -right-6 md:-right-8 top-1/2 z-10 -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:scale-110 hover:text-yellow-500 text-gray-700 dark:text-white transition"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
};

export default KabupatenKotaSection;
