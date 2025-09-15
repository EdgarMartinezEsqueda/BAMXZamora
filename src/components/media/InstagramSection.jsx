import { useEffect } from "react";

const InstagramSection = () => {
  useEffect(() => {
    if (!document.querySelector("script[src*='elfsight']")) {
      const script = document.createElement("script");
      script.src = "https://apps.elfsight.com/p/platform.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="relative pb-20 ">
      <section className="relative  text-dark-gray overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Encabezado */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-verdeLogo">
              Síguenos en nuestras redes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Comparte con nosotros los momentos de entrega, solidaridad y esperanza. 
              Conoce de cerca nuestro trabajo diario.
            </p>
          </div>

          {/* Widget con estilo */}
          <div className="bg-white rounded-2xl shadow-lg border border-verdeLogo/30 p-6">
            <div className="elfsight-app-e36d1596-5891-49db-a69e-b935dccc049c" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Estilos globales opcionales */}
      <style jsx global>{`
        @media (max-width: 1199px) {
          .instagram-section {
            background: #f74f22 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default InstagramSection;
