import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ folderName, totalImages }) => {
  const imagePaths = Array.from(
    { length: totalImages },
    (_, i) => `${i + 1}.webp`
  );

  return (
    <section className="pt-8 relative">
      <div className="max-w-2xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={true}
        >
          {imagePaths.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={`/assets/images/${folderName}/${item}`}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover rounded-2xl shadow-lg transition-all duration-300 "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;