import Concha from "assets/concha.svg?react";
import Tortilla from "assets/tortillas.svg?react";
import { useEffect, useRef, useState } from "react";
import { FaAppleAlt, FaBox, FaBreadSlice, FaHeart, FaWeightHanging } from "react-icons/fa";

const FunFactSimple = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const sectionRef = useRef(null);

  const facts = [
    {
      icon: <FaBox />,
      value: "58,395",
      numericValue: 58395,
      suffix: "",
      label: "Paquetes alimentarios",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: <FaWeightHanging />,
      value: "592,311",
      numericValue: 592311,
      suffix: " kg",
      label: "Alimento no perecedero",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/20"
    },
    {
      icon: <FaAppleAlt />,
      value: "419,033",
      numericValue: 419033,
      suffix: " kg",
      label: "Frutas y verduras",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/20"
    },
    {
      icon: <Tortilla className="text-white h-[30px] md:h-[36px]" />,
      value: "94,140",
      numericValue: 94140,
      suffix: " kg",
      label: "Tortillas",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/20"
    },
    {
      icon: <FaBreadSlice />,
      value: "264,771",
      numericValue: 264771,
      suffix: " pzs",
      label: "Bollo",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-500/20"
    },
    {
      icon: <Concha className="text-white h-[30px] md:h-[36px]" />,
      value: "264,771",
      numericValue: 264771,
      suffix: " pzs",
      label: "Conchas",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/20"
    }
  ];

  // Función para animar números
  const animateValue = (start, end, duration, callback) => {
    const startTimestamp = Date.now();
    
    const step = () => {
      const timestamp = Date.now();
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      callback(current);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  };

  // Intersection Observer para detectar cuando el componente está visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animar cada valor
          facts.forEach((fact, index) => {
            setTimeout(() => {
              animateValue(0, fact.numericValue, 2000, (value) => {
                setAnimatedValues(prev => ({
                  ...prev,
                  [index]: value.toLocaleString()
                }));
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const totalImpact = facts.reduce((sum, fact) => sum + fact.numericValue, 0);

  return (
    <section ref={sectionRef} className="relative z-10 py-10 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header mejorado */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-amarilloLogo text-sm font-semibold tracking-wider">
              Resultados del año
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
            Impacto Social{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-verdeLogo to-amarilloLogo">
              {new Date().getFullYear() - 1}
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Cada número representa familias alimentadas, sonrisas devueltas y esperanza renovada en nuestra comunidad.
          </p>
        </div>

        {/* Contenedor principal mejorado */}
        <div className="relative">
          {/* Elementos decorativos de fondo */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-verdeLogo/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amarilloLogo/10 rounded-full blur-xl"></div>
          
          <div className="bg-gradient-to-br from-verdeLogo via-green-600 to-green-800 rounded-2xl shadow-2xl overflow-hidden relative">
            {/* Patrón de fondo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grain" patternUnits="userSpaceOnUse" width="100" height="100">
                    <circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grain)"/>
              </svg>
            </div>

            {/* Header del contenedor */}
            <div className="relative z-10 text-center py-8 border-b border-white/10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <FaHeart className="text-amarilloLogo text-xl animate-pulse" />
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  Nuestros Logros {new Date().getFullYear() - 1}
                </h3>
                <FaHeart className="text-amarilloLogo text-xl animate-pulse" />
              </div>
              <p className="text-white/80 text-sm md:text-base">
                Transformando vidas, una familia a la vez
              </p>
            </div>

            {/* Grid de estadísticas mejorado */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className={`relative group p-6 md:p-8 text-center flex flex-col items-center justify-center gap-3 hover:bg-white/5 transition-all duration-500 border-r border-b border-white/10 last:border-r-0 lg:last:border-r lg:odd:border-r-0 ${
                    index >= 3 ? 'border-b-0' : ''
                  } ${
                    index === facts.length - 1 ? 'lg:col-span-1' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Efecto de hover de fondo */}
                  <div className={`absolute inset-0 ${fact.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Ícono con animación */}
                  <div className="relative z-10 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <div className="text-white text-4xl md:text-5xl mb-2 filter drop-shadow-lg">
                      {fact.icon}
                    </div>
                    
                    {/* Círculo decorativo */}
                    <div className="absolute -inset-4 border-2 border-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                  </div>

                  {/* Número animado */}
                  <div className="relative z-10">
                    <h4 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-1">
                      <span className="tabular-nums">
                        {isVisible ? (animatedValues[index] || "0") : "0"}
                      </span>
                      <span className="text-lg sm:text-xl md:text-2xl text-white/90 font-normal">
                        {fact.suffix}
                      </span>
                    </h4>
                    
                    {/* Barra de progreso sutil */}
                    <div className="w-16 h-1 bg-white/20 rounded-full mx-auto mb-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amarilloLogo to-white rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"
                        style={{ 
                          transitionDelay: `${index * 100}ms` 
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Label */}
                  <p className="relative z-10 text-white/90 text-sm md:text-base font-medium text-center leading-tight group-hover:text-white transition-colors duration-200">
                    {fact.label}
                  </p>

                  {/* Efecto de brillantez en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>

            {/* Footer con impacto total */}
            <div className="relative z-10 bg-gradient-to-r from-green-800/50 to-green-700/50 px-6 py-4 border-t border-white/10">
              <div className="text-center">
                <p className="text-white/80 text-sm mb-1">Impacto total combinado</p>
                <p className="text-white text-xl md:text-2xl font-bold">
                  {totalImpact.toLocaleString()} unidades de esperanza
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactSimple;