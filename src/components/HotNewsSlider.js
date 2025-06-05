import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const newsData = [
  {
    title: 'Mirip Bule',
    desc: 'WOW GANTENG BANGET.',
    date: '31/05/2024',
    image: '/hoax7.jpg',
  },
  {
    title: 'Senyuman Kematian LILI',
    desc: 'Senyuman yang sangat responsif membuat otak lunglay',
    date: '31/05/2024',
    image: '/hoak1.jpg',
  },
  {
    title: 'Senyuman Lega',
    desc: 'Mahasiswa yang tersenyum setelah presentasi S.I.L',
    date: '01/06/2024',
    image: '/hoak3.jpg',
  },
  {
    title: 'Magang Lucu',
    desc: 'Senyuman palsu dari mahasiswa hijau kentut',
    date: '04/06/2024',
    image: '/hoax2.jpg',
  },
  {
    title: 'Pasutri Gaje',
    desc: 'Soswit banget bikin iri',
    date: '04/06/2024',
    image: '/hoak5.jpg',
  },
  {
    title: 'Mahasiswa Bohong',
    desc: 'Foto sebagai bukti kalau magang aslinya tidur',
    date: '04/06/2024',
    image: '/hoak4.jpg',
  },
  {
    title: 'Heboh Mahasiswa Ganteng',
    desc: 'Keajaiban dunia, manusia ini punya paras ganteng banget',
    date: '04/06/2024',
    image: '/hoak6.jpg',
  },
];

function HotNewsSlider() {
  const swiperRef = useRef(null);

  const scrollToSlide = (index) => {
    if (swiperRef.current?.slideTo) {
      swiperRef.current.slideTo(index, 500);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-20 transition-colors duration-300 font-sans">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white tracking-tight">
        BERITA TERKINI
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        speed={500}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-12"
      >
        {newsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onMouseEnter={() => scrollToSlide(index)}
              className="group bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer h-full flex flex-col justify-between border border-gray-100 dark:border-gray-700"
            >
              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-400 mt-4">
                {item.date}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HotNewsSlider;
