import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const historyData = [
  {
    year: "2007",
    title: "Los Primeros Pasos",
    description:
      "El Banco Diocesano de Alimentos de Tepatitlán se funda, marcando el inicio de una misión para combatir el hambre en nuestra comunidad.",
    image: "2007.webp",
    milestone: "Fundación",
  },
  {
    year: "2009",
    title: "Un Hogar Permanente",
    description:
      "El H. Ayuntamiento de Tepatitlán nos otorga un terreno en comodato, proporcionando un espacio físico para nuestras operaciones.",
    image: "2009.webp",
    milestone: "Terreno",
  },
  {
    year: "2013",
    title: "Expandiendo Horizontes",
    description:
      "Adquirimos vehículos que nos permiten extender nuestra ayuda a los municipios de la zona de Los Altos.",
    image: "2013.webp",
    milestone: "Expansión",
  },
  {
    year: "2015",
    title: "Instalaciones Propias",
    description:
      "Inauguramos nuestro propio edificio de instalaciones, consolidando nuestra presencia y capacidad operativa.",
    image: "2015.webp",
    milestone: "Edificio",
  },
  {
    year: "2016",
    title: "Panadería en Marcha",
    description:
      "Se inaugura nuestra panadería, ampliando los tipos de alimentos que podemos ofrecer a nuestros beneficiarios.",
    image: "2016.webp",
    milestone: "Panadería",
  },
  {
    year: "2017",
    title: "Tortillas Frescas",
    description:
      "Se inaugura la tortillería, proporcionando un producto esencial para las mesas de nuestras familias beneficiarias.",
    image: "2017.webp",
    milestone: "Tortillería",
  },
  {
    year: "2019",
    title: "Procesamiento Avanzado",
    description:
      "Instalamos una planta procesadora de alimentos, lo que nos permite ofrecer productos fuera de temporada y alimentos preparados.",
    image: "2019.webp",
    milestone: "Planta",
  },
  {
    year: "2022",
    title: "Certificación ISO",
    description:
      "Obtenemos la certificación ISO 22000-2018, demostrando nuestro compromiso con la seguridad y calidad alimentaria.",
    image: "2022.webp",
    milestone: "Certificación",
  },
];

const History = () => {
  return (
    <section className="py-16 relative overflow-hidden ">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amarilloLogo/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-verdeLogo/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Header mejorado */}
        <div className="text-center mb-12 relative">
          <div className="inline-block">
            <span className="text-amarilloLogo text-sm font-semibold uppercase tracking-wider mb-2 block">
              Nuestro Camino
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-verdeLogo relative">
              Historia de Impacto
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-amarilloLogo to-verdeLogo rounded-full"></div>
            </h2>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            Cada año ha sido un paso más hacia nuestra misión de combatir el hambre 
            y fortalecer nuestra comunidad en Los Altos de Jalisco.
          </p>
        </div>

        {/* Timeline decorativa */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-verdeLogo via-amarilloLogo to-verdeLogo h-32 top-72 rounded-full opacity-30"></div>

        {/* Swiper mejorado */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 35 },
            }}
            navigation={{
              nextEl: '.history-next',
              prevEl: '.history-prev',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              el: '.history-pagination'
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={historyData.length > 3}
            className="history-swiper pb-12"
          >
            {historyData.map((item, index) => (
              <SwiperSlide key={item.year}>
                <div className="group cursor-pointer">
                  {/* Tarjeta principal */}
                  <div
                    className="relative rounded-3xl overflow-hidden shadow-xl h-[400px] flex flex-col justify-end p-6 text-white bg-center bg-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl border border-gray-200"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(2,25,41,0.85) 0%, rgba(2,25,41,0.4) 40%, rgba(2,25,41,0.9) 100%), url(/assets/images/historia/${item.image})`,
                    }}
                  >
                    {/* Badge del año */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-gris-500 text-amarillo-500 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {item.milestone}
                      </div>
                    </div>

                    {/* Número de orden */}
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="relative z-10 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      <div className="mb-3">
                        <h3 className="text-4xl font-bold mb-1 text-amarilloLogo drop-shadow-lg">
                          {item.year}
                        </h3>
                        <h4 className="text-xl font-semibold mb-3 text-white/95">
                          {item.title}
                        </h4>
                      </div>
                      
                      <p className="text-sm leading-relaxed text-white/90 line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controles personalizados */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            {/* Botón anterior */}
            <button className="history-prev group flex items-center justify-center w-12 h-12 bg-white shadow-lg rounded-full border border-gray-200 hover:bg-verdeLogo hover:border-verdeLogo transition-all duration-300 cursor-pointer">
              <svg className="w-5 h-5 text-gray-600 group-hover:text-white transform group-hover:-translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Paginación */}
            <div className="history-pagination flex space-x-2"></div>

            {/* Botón siguiente */}
            <button className="history-next group flex items-center justify-center w-12 h-12 bg-white shadow-lg rounded-full border border-gray-200 hover:bg-verdeLogo hover:border-verdeLogo transition-all duration-300 cursor-pointer">
              <svg className="w-5 h-5 text-gray-600 group-hover:text-white transform group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Estilos CSS personalizados para la paginación */}
      <style jsx>{`
        .history-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .history-swiper .swiper-pagination-bullet-active {
          background: #10b981;
          transform: scale(1.2);
        }
        
        .history-swiper .swiper-pagination-bullet:hover {
          background: #059669;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default History;