import { FiArrowRight, FiAward, FiCheck, FiHeart, FiMapPin, FiPlay, FiTrendingUp, FiUsers } from "react-icons/fi";

const AboutSection = () => {
  const stats = [
    { number: "10,000+", label: "Familias beneficiadas", icon: FiUsers, color: "text-verdeLogo" },
    { number: "7", label: "Municipios atendidos", icon: FiMapPin, color: "text-amarilloLogo" },
    { number: "70,000+", label: "Kg de alimentos al mes", icon: FiTrendingUp, color: "text-rojoLogo" }
  ];

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-verdeLogo/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amarilloLogo/8 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-rojoLogo/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna de contenido */}
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-verdeLogo/10 to-amarilloLogo/10 border border-verdeLogo/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <div className="bg-verdeLogo p-2 rounded-full">
                  <FiHeart className="text-white text-sm" />
                </div>
                <span className="text-verdeLogo font-semibold text-sm tracking-wide">
                  Más de 13 años luchando contra el hambre
                </span>
              </div>

              {/* Título */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-800">Construyendo un</span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-verdeLogo to-amarilloLogo bg-clip-text">
                    futuro mejor
                  </span>
                </h2>
                
                <div className="flex items-start gap-4">
                  <div className="w-1 bg-gradient-to-b from-verdeLogo to-amarilloLogo rounded-full h-20 mt-2"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    En el Banco de Alimentos de Zamora A.C. rescatamos y distribuimos alimentos para mejorar la calidad de vida de miles de familias, promoviendo programas comunitarios, educativos y de salud.
                  </p>
                </div>
              </div>

              {/* Estadísticas */}
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

              {/* Features */}
              <div className="grid gap-6">
                <div className="group bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-rojoLogo to-red-600 p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiHeart className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Solidaridad en acción</h4>
                      <p className="text-gray-600">
                        Más de 70 grupos comunitarios reciben apoyo constante para combatir la desnutrición en la región.
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
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Compromiso integral</h4>
                      <p className="text-gray-600">
                        Además de alimentos, ofrecemos programas de nutrición, talleres comunitarios y acompañamiento social.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logros */}
              <div className="bg-gradient-to-r from-verdeLogo/5 to-amarilloLogo/5 rounded-2xl p-6 space-y-4">
                <h4 className="font-bold text-gray-800 text-lg mb-4">Nuestros logros destacados</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-verdeLogo p-1 rounded-full">
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700">Más de 70,000 kg de alimentos entregados cada mes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-verdeLogo p-1 rounded-full">
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700">Programas como “Por menos hambre y más sonrisas” apoyan a casos en extrema vulnerabilidad</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-verdeLogo p-1 rounded-full">
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700">Campañas comunitarias de salud, cultura y desarrollo social</span>
                  </div>
                </div>
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/nosotros"
                  className="group bg-gradient-to-r from-verdeLogo to-green-600 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold text-center hover:scale-105 shadow-lg hover:shadow-verdeLogo/25 flex items-center justify-center gap-3"
                >
                  Conoce más sobre nosotros
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="/programas#voluntariado"
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
              <div className="relative bg-gradient-to-br from-verdeLogo/10 to-amarilloLogo/10 rounded-3xl p-8 backdrop-blur-sm border border-white/50">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="/assets/images/beneficiarios/19.webp" 
                    alt="Banco de Alimentos en acción" 
                    className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <a 
                    href="https://www.facebook.com/share/v/19jCqWF62H/" 
                    target="_blank"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-amarilloLogo hover:border-amarilloLogo transition-all duration-300 shadow-2xl group-hover:scale-110"
                  >
                    <FiPlay className="text-white text-2xl ml-1" />
                  </a>
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

              {/* Decorativos */}
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
    </section>
  );
};

export default AboutSection;