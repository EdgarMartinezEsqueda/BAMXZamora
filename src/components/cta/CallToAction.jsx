const CallToAction = () => {
  return (
    <section
      className="relative bg-cta bg-cover bg-center py-[80px] md:py-[120px] sm:py-[80px] text-center overflow-hidden z-10"
      aria-label="Call to Action"
    >
      {/* Capa oscura encima del fondo */}
      <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none"></div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-2xl mx-auto">
          <span className="text-amarilloLogo font-edu-hand text-xl font-semibold block">
            Alimenta esperanza, transforma vidas
          </span>

          <h3 className="text-white uppercase text-4xl md:text-3xl sm:text-2xl font-extrabold leading-tight mt-4 mb-8">
            Súmate a nuestra misión<br /> y ayuda a combatir el hambre
          </h3>

          <a href="/programas#voluntariado" className="inline-block bg-verdeLogo hover:bg-verde-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg" >
            Quiero ser voluntario
          </a>
        </div>
      </div>

      {/* Decorativos SVGs / Shapes */}
      <div className="absolute left-[100px] top-[225px] animate-leaf z-0 pointer-events-none max-md:hidden">
        <img src="assets/images/arrow1.svg" alt="" />
      </div>
    </section>
  );
};

export default CallToAction;