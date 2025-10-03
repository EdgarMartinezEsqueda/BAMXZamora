import { useEffect, useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";

const CatalogoApadrinados = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Número total de imágenes del catálogo
  const totalImages = 9; // Ajusta este número según cuántas imágenes tengas

  const imagePaths = Array.from(
    { length: totalImages },
    (_, i) => `/assets/images/apadrinamiento/catalogo/${i + 1}.webp`
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

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
            <FiHeart className="w-8 h-8 text-pink-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Conoce a quienes necesitan tu apoyo
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada historia es única y cada apoyo marca una diferencia. Conoce las historias de quienes buscan un padrino.
          </p>
        </div>

        {/* Carrusel Principal */}
        <div className="relative max-w-5xl mx-auto mb-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {imagePaths.map((imagePath, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={imagePath}
                    alt={`Historia ${index + 1}`}
                    className="w-full h-auto object-contain bg-white"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/95 hover:bg-white shadow-xl rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed z-10"
              aria-label="Anterior"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/95 hover:bg-white shadow-xl rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed z-10"
              aria-label="Siguiente"
            >
              <FiChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Contador */}
            <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm font-medium">
              {currentSlide + 1} / {totalImages}
            </div>
          </div>

          {/* Indicadores de puntos */}
          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {Array.from({ length: totalImages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-10 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full"
                }`}
                aria-label={`Ir a historia ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Llamado a la acción */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <FiHeart className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para transformar una vida?
            </h3>
            <p className="text-xl mb-8 text-pink-50 max-w-2xl mx-auto">
              Tu apoyo marca la diferencia. Conoce a quienes buscan un padrino y elige cómo quieres ayudar.
            </p>
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200">
              <a href="/contacto">
                Contáctanos para apadrinar
                <FiArrowRight className="inline-block ml-2" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogoApadrinados;