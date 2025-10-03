import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiCheckCircle, FiChevronLeft, FiChevronRight, FiDollarSign, FiHeart, FiPackage, FiShoppingBag } from "react-icons/fi";

const Apadrinamiento = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);
  const totalImages = 6;

  const steps = [
    {
      title: "¿Qué es el programa?",
      description: "Conoce cómo funciona 'Por menos hambre y más sonrisas' y su impacto en la comunidad",
      icon: FiHeart
    },
    {
      title: "Opción 1: $50 semanales",
      description: "Tu apadrinado recibe 1 paquete alimentario en la semana que donas",
      icon: FiDollarSign
    },
    {
      title: "Opción 2: $200 mensuales",
      description: "Garantiza 4 paquetes al mes (1 por semana) para tu apadrinado",
      icon: FiDollarSign
    },
    {
      title: "Opción 3: Donativos en especie",
      description: "Alimentos no perecederos, medicamentos, estudios médicos o necesidades específicas",
      icon: FiPackage
    },
    {
      title: "Beneficios de ser padrino",
      description: "Apoyas una causa vital, contribuyes al crecimiento personal y te conviertes en red de apoyo",
      icon: FiHeart
    },
    {
      title: "Métodos de donación",
      description: "Cuenta CLABE y número de cuenta para realizar tu aportación",
      icon: FiShoppingBag
    }
  ];

  const imagePaths = Array.from(
    { length: totalImages },
    (_, i) => `/assets/images/apadrinamiento/${i + 1}.webp`
  );

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % totalImages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + totalImages) % totalImages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
            <FiHeart className="w-8 h-8 text-pink-600" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-pink-500 relative inline-block">
              Apadrina
              <svg 
                className="absolute -bottom-2 left-0 w-full h-3 text-pink-400 hidden md:block" 
                viewBox="0 0 200 12" 
                fill="currentColor"
              >
                <path d="M0 8c40 0 60-6 100-6s60 6 100 6v4c-40 0-60-6-100-6S40 12 0 12V8z"/>
              </svg>
            </span>
            <span className="block mt-2 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Por menos hambre y más sonrisas
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            Nuestro programa de apadrinamiento nace como respuesta a las necesidades de personas en situación de extrema vulnerabilidad. Tu apoyo puede transformar vidas y brindar esperanza a quienes más lo necesitan.
          </p>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-3xl mx-auto border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <FiHeart className="w-6 h-6 text-pink-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">¿Qué incluye el apadrinamiento?</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span>Seguimiento nutricional personalizado</span>
              </div>
              <div className="flex items-center">
                <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span>Acompañamiento psicológico</span>
              </div>
              <div className="flex items-center">
                <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span>Consejería y herramientas para mejorar su calidad de vida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel y opciones de apadrinamiento */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Carrusel */}
          <div className="relative">
            <div 
              ref={carouselRef}
              className="relative overflow-hidden rounded-3xl shadow-2xl bg-white"
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {imagePaths.map((imagePath, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={imagePath}
                      alt={`${steps[index]?.title}`}
                      className="w-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white shadow-lg rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white shadow-lg rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {Array.from({ length: totalImages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 h-2 bg-white rounded-full"
                        : "w-2 h-2 bg-white/60 hover:bg-white/80 rounded-full"
                    }`}
                  />
                ))}
              </div>

              <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                {currentSlide + 1} / {totalImages}
              </div>
            </div>
          </div>

          {/* Opciones de apadrinamiento */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Formas de apadrinar</h3>
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentSlide;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-start p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-r from-pink-50 to-orange-50 border-2 border-pink-200 shadow-lg transform scale-105" 
                      : "bg-white hover:bg-gray-50 border border-gray-200 hover:shadow-md"
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isActive 
                      ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white" 
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {isActive ? (
                      <span className="text-lg font-bold">{index + 1}</span>
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <h4 className={`font-semibold text-lg mb-1 transition-colors ${
                      isActive ? "text-pink-700" : "text-gray-800"
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`transition-colors ${
                      isActive ? "text-pink-600" : "text-gray-600"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                  
                  {isActive && (
                    <FiArrowRight className="w-5 h-5 text-pink-500 animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Objetivos del programa */}
        <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Objetivos del programa</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                  <FiHeart className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Alcanzar a personas en marginación</h4>
                  <p className="text-gray-600 text-sm">Llegamos a quienes viven sin redes de apoyo y necesitan una mano para salir adelante</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <FiCheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cubrir necesidades básicas</h4>
                  <p className="text-gray-600 text-sm">Educación, alimentación y salud a través de colectas, apadrinamientos y servicios</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                  <FiArrowRight className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Impulsar el empoderamiento</h4>
                  <p className="text-gray-600 text-sm">Desarrollamos habilidades y recursos propios para lograr independencia y mejor calidad de vida</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <FiHeart className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Inspirar agentes de cambio</h4>
                  <p className="text-gray-600 text-sm">Cada apadrinado se convierte en inspiración para otros en su comunidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apadrinamiento;