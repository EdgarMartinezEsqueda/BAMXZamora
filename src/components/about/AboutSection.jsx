import { FiArrowRight, FiAward, FiCheck, FiHeart, FiMapPin, FiPlay, FiTrendingUp, FiUsers } from "react-icons/fi";

const AboutSection = () => {
  const stats = [
    { number: "9,000+", label: "Familias beneficiadas", icon: FiUsers, color: "text-verdeLogo" },
    { number: "14", label: "Municipios atendidos", icon: FiMapPin, color: "text-amarilloLogo" },
    { number: "1,000+", label: "Toneladas distribuidas", icon: FiTrendingUp, color: "text-rojoLogo" }
  ];

  return (
    <section className="relative py-10  overflow-hidden">
      {/* Elementos decorativos modernos */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-verdeLogo/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amarilloLogo/8 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-rojoLogo/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Patrón de puntos decorativo */}
      <div className="absolute top-40 right-20 opacity-20 hidden lg:block">
        <div className="grid grid-cols-8 gap-2">
          {[...Array(32)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-verdeLogo rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna de contenido */}
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              
              {/* Badge de introducción */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-verdeLogo/10 to-amarilloLogo/10 border border-verdeLogo/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <div className="bg-verdeLogo p-2 rounded-full">
                  <FiHeart className="text-white text-sm" />
                </div>
                <span className="text-verdeLogo font-semibold text-sm tracking-wide">
                  Transformando vidas con cada despensa entregada
                </span>
              </div>

              {/* Título principal */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-800">Unidos por un</span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-verdeLogo to-amarilloLogo bg-clip-text">
                    futuro sin hambre
                  </span>
                </h2>
                
                <div className="flex items-start gap-4">
                  <div className="w-1 bg-gradient-to-b from-verdeLogo to-amarilloLogo rounded-full h-20 mt-2"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    En el Banco Diocesano de Alimentos de los Altos trabajamos cada día para combatir el hambre y mejorar la nutrición de miles de familias en la región de Los Altos de Jalisco.
                  </p>
                </div>
              </div>

              {/* Estadísticas destacadas */}
              <div className="grid grid-cols-3 gap-4 my-12">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className={`${stat.color} text-2xl mb-3 flex justify-center`}>
                        <IconComponent />
                      </div>
                      <div className="text-2xl lg:text-3xl font-black text-gray-800 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Features con nuevo diseño */}
              <div className="grid gap-6">
                <div className="group bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-rojoLogo to-red-600 p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiHeart className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Compromiso solidario</h4>
                      <p className="text-gray-600">
                        Más de 9,000 familias reciben apoyo mensual gracias a nuestra red de distribución en 14 municipios de Los Altos de Jalisco.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-amarilloLogo to-yellow-600 p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiAward className="text-black text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Trabajo reconocido</h4>
                      <p className="text-gray-600">
                        Somos parte de la Red BAMX, operamos con transparencia, eficiencia y compromiso social reconocido.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lista de logros */}
              <div className="bg-gradient-to-r from-verdeLogo/5 to-amarilloLogo/5 rounded-2xl p-6 space-y-4">
                <h4 className="font-bold text-gray-800 text-lg mb-4">Nuestros logros destacados</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-verdeLogo p-1 rounded-full">
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700">Programas como "Apadrina una familia" garantizan apoyo continuo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-verdeLogo p-1 rounded-full">
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700">Más de 1,000 toneladas de alimentos entregados anualmente</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-verdeLogo p-1 rounded-full">
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700">Red de voluntarios comprometidos en toda la región</span>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/nosotros"
                  className="group bg-gradient-to-r from-verdeLogo to-green-600 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold text-center hover:scale-105 shadow-lg hover:shadow-verdeLogo/25 flex items-center justify-center gap-3"
                >
                  Conoce más sobre nosotros
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="/voluntariado"
                  className="group border-2 border-amarilloLogo text-amarilloLogo hover:bg-amarilloLogo hover:text-black px-8 py-4 rounded-2xl transition-all duration-300 font-bold text-center hover:scale-105 backdrop-blur-sm bg-white/30 flex items-center justify-center gap-3"
                >
                  <FiUsers className="text-lg" />
                  Únete como voluntario
                </a>
              </div>
            </div>
          </div>

          {/* Columna de imagen/video */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative group">
              
              {/* Contenedor principal de la imagen */}
              <div className="relative bg-gradient-to-br from-verdeLogo/10 to-amarilloLogo/10 rounded-3xl p-8 backdrop-blur-sm border border-white/50">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="/assets/images/beneficiarios/1.webp" 
                    alt="Banco de Alimentos en acción" 
                    className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Botón de video mejorado */}
                  <a 
                    href="https://drive.google.com/file/d/1MOLsJYjUikDTGME5J-GIB1zskrC5U-lc/preview" 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-amarilloLogo hover:border-amarilloLogo transition-all duration-300 shadow-2xl group-hover:scale-110"
                  >
                    <FiPlay className="text-white text-2xl ml-1" />
                  </a>
                  
                  {/* Badge informativo */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-rojoLogo p-1 rounded-full">
                        <FiHeart className="text-white text-sm" />
                      </div>
                      <span className="text-gray-800 font-semibold text-sm">Conoce nuestro trabajo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos flotantes */}
              <div className="absolute -top-6 -right-6 bg-amarilloLogo p-4 rounded-2xl shadow-lg animate-bounce-slow">
                <FiAward className="text-black text-2xl" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-verdeLogo p-4 rounded-2xl shadow-lg animate-bounce-slow-delayed">
                <FiUsers className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS mejorados */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-slow-delayed {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow-delayed {
          animation: bounce-slow-delayed 3s ease-in-out infinite 1.5s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;