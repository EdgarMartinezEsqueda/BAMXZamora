import { FaArrowRight, FaGift, FaHandHoldingHeart, FaHandshake, FaHandsHelping } from "react-icons/fa";
import { FiHeart, FiUsers } from "react-icons/fi";

const MissionVision = () => {
  const programs = [
    {
      image: "assets/images/beneficiarios/18.webp",
      title: "Por - Hambre y + Sonrisas",
      description: "Apadrina a personas en vulnerabilidad y ayúdanos a cubrir sus necesidades básicas de alimentación, salud y educación con seguimiento integral",
      icon: <FaGift />,
      color: "from-rojoLogo to-red-600",
      bgColor: "bg-rojoLogo/10",
      borderColor: "border-rojoLogo/20",
      link: "/programas#apadrinamiento",
    },
    {
      image: "assets/images/programas/voluntariado.webp",
      title: "Voluntariado BAMX Zamora",
      description: "Sé parte del corazón de nuestras acciones. Dona tu tiempo, talento y energía en clasificación de alimentos, eventos y campañas de sensibilización",
      icon: <FaHandshake />,
      color: "from-verdeLogo to-green-600",
      bgColor: "bg-verdeLogo/10",
      borderColor: "border-verdeLogo/20",
      link: "/programas#voluntariado",
    },
    {
      image: "assets/images/programas/talleres.webp",
      title: "Talleres BAMX Zamora",
      description: "Participa en talleres y actividades formativas mensuales que fortalecen el bienestar, la autosuficiencia y el desarrollo integral de la comunidad",
      icon: <FaHandsHelping />,
      color: "from-amarilloLogo to-yellow-600",
      bgColor: "bg-amarilloLogo/10",
      borderColor: "border-amarilloLogo/20",
      link: "/programas#talleres",
      stats: "Gratuitos o costo simbólico"
    },
    {
      image: "assets/images/programas/comedor.webp",
      title: "Comedor Comunitario",
      description: "Espacio solidario que ofrece desayunos nutritivos y accesibles, apoyando a personas vulnerables y fortaleciendo la seguridad alimentaria comunitaria",
      icon: <FaHandHoldingHeart />,
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      link: "/programas#comedor",
      isSpecial: true
    }
  ];

  return (
    <section className="relative px-6 py-10 overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-10 w-80 h-80 bg-verdeLogo/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-amarilloLogo/6 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Patrón de puntos */}
      <div className="absolute top-20 right-32 opacity-10 hidden lg:block">
        <div className="grid grid-cols-6 gap-3">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-verdeLogo rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-verdeLogo/10 to-amarilloLogo/10 border border-verdeLogo/20 rounded-full px-6 py-3 mb-6">
            <div className="bg-verdeLogo p-2 rounded-full">
              <FiHeart className="text-white text-sm" />
            </div>
            <span className="text-verdeLogo font-semibold text-sm tracking-wide">
              Transformando comunidades
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-800">Nuestros</span>
            <span className="text-transparent bg-gradient-to-r from-verdeLogo to-amarilloLogo bg-clip-text"> Programas</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conoce las iniciativas con las que llevamos alimento y esperanza a miles de familias en la región.
          </p>
        </div>

        {/* Grid de programas - Responsive y escalable */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border ${program.borderColor} hover:border-opacity-40`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Imagen con overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Icono flotante */}
                <div className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center text-white text-lg shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {program.icon}
                </div>
                
                {/* Badge de estadísticas */}
                { program.stats &&
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
                    <span className="text-gray-800 font-semibold text-sm">{program.stats}</span>
                  </div>
                }
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-verdeLogo transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Botón de acción */}
                <div className="pt-4">
                  <a
                    href={program.link}
                    className={`group/btn inline-flex items-center gap-3 ${program.isSpecial 
                      ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white" 
                      : `bg-gradient-to-r ${program.color} text-white`
                    } px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold text-sm`}
                  >
                    {program.isSpecial ? "Ver todos" : "Más información"}
                    <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-verdeLogo/5 via-amarilloLogo/5 to-rojoLogo/5 rounded-3xl p-8 md:p-12 border border-verdeLogo/10">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                ¿Listo para hacer la diferencia?
              </h3>
              <p className="text-gray-600 text-lg">
                Cada acción cuenta. Únete a nosotros y ayuda a transformar vidas en tu comunidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="group bg-gradient-to-r from-verdeLogo to-green-600 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold hover:scale-105 shadow-lg hover:shadow-verdeLogo/25 flex items-center justify-center gap-3"
                >
                  <FiUsers className="text-lg" />
                  Contáctanos
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="/donar"
                  className="group border-2 border-amarilloLogo text-amarilloLogo hover:bg-amarilloLogo hover:text-black px-8 py-4 rounded-2xl transition-all duration-300 font-bold hover:scale-105 backdrop-blur-sm bg-white/50 flex items-center justify-center gap-3"
                >
                  <FiHeart className="text-lg" />
                  Hacer donación
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite 2s;
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }

        /* Animación en cascada para las tarjetas */
        .grid > div:nth-child(1) {
          animation: slide-in 0.8s ease-out forwards;
          animation-delay: 0.1s;
          opacity: 0;
        }
        
        .grid > div:nth-child(2) {
          animation: slide-in 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .grid > div:nth-child(3) {
          animation: slide-in 0.8s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .grid > div:nth-child(4) {
          animation: slide-in 0.8s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }

        /* Para más de 4 elementos - el patrón continúa automáticamente */
        .grid > div:nth-child(n+5) {
          animation: slide-in 0.8s ease-out forwards;
          animation-delay: calc(0.1s * (var(--index, 5)));
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default MissionVision;