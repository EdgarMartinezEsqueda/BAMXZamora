import { FaNewspaper, FaShareAlt } from "react-icons/fa";
import { FiBookOpen, FiDownload, FiEye, FiFileText, FiMail } from "react-icons/fi";

const NewsletterSection = () => {
  // Datos del boletín actual (esto vendría de tu API/CMS)
  const currentNewsletter = {
    title: "Boletín BAMX Zamora",
    subtitle: "Por menos hambre y mas sonrisas",
    month: new Date().toLocaleString("es-MX", { month: "long" }),
    year: new Date().getFullYear(),
    edition: "Edición #127",
    pdfUrl: import.meta.env.VITE_EnlaceBoletin + "/view", // Tu enlace de Drive
    previewUrl: import.meta.env.VITE_EnlaceBoletin + "/preview", // Para iframe
  };

  const handlePreview = () => {
    // Abrir en modal o nueva ventana
    window.open(currentNewsletter.previewUrl, "_blank", "width=800,height=600");
  };

  const handleDownload = () => {
    // Convertir link de view a download
    const pdfId = currentNewsletter.pdfUrl.split("/");
    const downloadUrl = "https://drive.google.com/uc?export=download&id=" + pdfId.at( pdfId.length - 3 );
    window.open(downloadUrl, "_blank");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${currentNewsletter.title} - ${currentNewsletter.month} ${currentNewsletter.year}`,
          text: "Conoce las últimas noticias del BAMX Zamora",
          url: currentNewsletter.pdfUrl,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copiar al clipboard
      navigator.clipboard.writeText(currentNewsletter.pdfUrl);
      // Aquí podrías mostrar un toast de "Enlace copiado"
    }
  };

  return (
    <section className="relative py-10 overflow-hidden">
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-32 w-96 h-96 bg-indigo-500/6 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Patrón de iconos flotantes */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-20 left-10 animate-bounce-slow">
          <FaNewspaper className="text-6xl text-blue-600" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-slow-delayed">
          <FiBookOpen className="text-5xl text-indigo-600" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-bounce-slow">
          <FiFileText className="text-4xl text-purple-600" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-verde-500/10 to-verde-500/10 border border-verde-500/20 rounded-full px-6 py-3 mb-6">
            <div className="bg-verde-500 p-2 rounded-full">
              <FiMail className="text-white text-sm" />
            </div>
            <span className="text-verde-600 font-semibold text-sm tracking-wide">
              Mantente informado mensualmente
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-800">Nuestro</span>
            <span className="text-transparent bg-gradient-to-r from-amarillo-500 to-amarillo-700 bg-clip-text"> Boletín</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada mes compartimos nuestros logros, historias de esperanza y el impacto de tu apoyo en las comunidades de Los Altos de Jalisco
          </p>
        </div>

        <div className="grid  gap-16 items-center">
          {/* Información y acciones */}
          <div className="space-y-8">
            
            {/* Descripción principal */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                Historias que inspiran, datos que<span className="text-transparent bg-gradient-to-r from-verde-600 to-verde-700 bg-clip-text"> importan</span>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Nuestro boletín mensual te mantiene al día con las actividades, logros y testimonios del BAMX Zamora. Cada edición incluye estadísticas actualizadas, historias de familias beneficiadas y próximos eventos.
              </p>
            </div>

            {/* Botones de acción principales */}
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                onClick={handlePreview}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 cursor-pointer"
              >
                <FiEye className="text-xl group-hover:scale-110 transition-transform" />
                Ver boletín
              </button>

              <button
                onClick={handleDownload}
                className="group border-2 border-gris-500 text-gris-600 hover:bg-gris-500 hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold hover:scale-105 backdrop-blur-sm bg-white/70 flex items-center justify-center gap-3 cursor-pointer"
              >
                <FiDownload className="text-xl group-hover:scale-110 transition-transform" />
                Descargar PDF
              </button>
            </div>

            {/* Características adicionales */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 border border-gray-200 rounded-2xl p-6 space-y-4">
              <h4 className="font-bold text-gray-800 text-lg flex items-center gap-3">
                <FiBookOpen className="text-indigo-500 text-xl" />
                ¿Qué encontrarás cada mes?
              </h4>
              
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-verdeLogo rounded-full"></div>
                  <span className="text-gray-700">Estadísticas de impacto</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amarilloLogo rounded-full"></div>
                  <span className="text-gray-700">Testimonios reales</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rojoLogo rounded-full"></div>
                  <span className="text-gray-700">Próximos eventos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-gray-700">Reconocimientos</span>
                </div>
              </div>
            </div>

            {/* Acciones secundarias */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleShare}
                className="group flex items-center justify-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors font-semibold cursor-pointer"
              >
                <FaShareAlt className="group-hover:scale-110 transition-transform" />
                Compartir boletín
              </button>
              {/* Poder ver anteriores ediciones */}
              {/* <a
                href="/boletines"
                className="group flex items-center justify-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors font-semibold"
              >
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                Ver ediciones anteriores
              </a> */}
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
            transform: translateY(-30px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes bounce-slow-delayed {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 12s ease-in-out infinite 2s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-bounce-slow-delayed {
          animation: bounce-slow-delayed 4s ease-in-out infinite 2s;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default NewsletterSection;