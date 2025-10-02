import { FaBuilding, FaBullhorn, FaCheckCircle, FaGraduationCap, FaHandshake, FaHeart, FaUsers } from "react-icons/fa";

const SupportNetworks = () => {
  const networkTypes = [
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: "Empresas",
      description: "Alianzas estratégicas con el sector empresarial que aportan recursos, donaciones y apoyo logístico.",
      benefits: ["Responsabilidad social", "Impacto comunitario", "Reconocimiento público"],
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-500"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Instituciones Educativas",
      description: "Colaboración con escuelas y universidades para programas de sensibilización y servicio comunitario.",
      benefits: ["Formación ciudadana", "Voluntariado estudiantil", "Proyectos sociales"],
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-500"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Organizaciones Civiles",
      description: "Red de asociaciones que fortalecen nuestras acciones y multiplican el impacto en la región.",
      benefits: ["Sinergia operativa", "Mayor alcance", "Recursos compartidos"],
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-500"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Ciudadanos Comprometidos",
      description: "Personas que aportan tiempo, talento o recursos para hacer la diferencia en su comunidad.",
      benefits: ["Voluntariado activo", "Donaciones", "Difusión de la causa"],
      color: "from-amarilloLogo to-yellow-500",
      iconBg: "bg-amarilloLogo"
    }
  ];

  const howToJoin = [
    {
      step: "01",
      title: "Contacta con nosotros",
      description: "Envíanos un mensaje expresando tu interés en formar parte de nuestra red de apoyo.",
      icon: <FaBullhorn />
    },
    {
      step: "02",
      title: "Define tu colaboración",
      description: "Exploramos juntos la mejor forma de colaborar según tus capacidades y recursos.",
      icon: <FaHandshake />
    },
    {
      step: "03",
      title: "Transforma vidas",
      description: "Inicia tu participación y conviértete en un aliado estratégico para la comunidad.",
      icon: <FaHeart />
    }
  ];

  const impact = [
    { number: "70+", label: "Grupos comunitarios alcanzados" },
    { number: "7", label: "Municipios con cobertura activa" },
    { number: "10,000+", label: "Familias beneficiadas mensualmente" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-verdeLogo/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amarilloLogo/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-verdeLogo font-edu-hand text-xl font-semibold mb-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-amarilloLogo rounded-full animate-pulse"></span>
            Redes de Apoyo
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Juntos <span className="text-amarilloLogo">llegamos más lejos</span>
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Nuestras Redes de Apoyo son la base que nos permite multiplicar el impacto. Gracias a la unión de empresas, instituciones, organizaciones y ciudadanos comprometidos, fortalecemos nuestras acciones y aseguramos que los alimentos y servicios lleguen a quienes más los necesitan.
          </p>
        </div>

        {/* Tipos de Aliados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {networkTypes.map((network, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 group-hover:border-verdeLogo/30">
                {/* Icono */}
                <div className={`${network.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {network.icon}
                </div>

                {/* Título */}
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-verdeLogo transition-colors">
                  {network.title}
                </h4>

                {/* Descripción */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {network.description}
                </p>

                {/* Beneficios */}
                <ul className="space-y-2">
                  {network.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-verdeLogo text-xs flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Línea decorativa */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${network.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Cómo unirse */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl mb-16 border border-gray-100">
          <h4 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Cómo ser parte de nuestra <span className="text-verdeLogo">Red de Apoyo</span>?
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howToJoin.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Línea conectora (solo desktop) */}
                {index < howToJoin.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-verdeLogo to-amarilloLogo opacity-20"></div>
                )}

                {/* Número del paso */}
                <div className="relative inline-block mb-6">
                  <div className="bg-gradient-to-br from-verdeLogo to-green-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {step.step}
                  </div>
                  <div className="absolute inset-0 bg-amarilloLogo rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>

                {/* Icono */}
                <div className="text-4xl text-verdeLogo mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Título */}
                <h5 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h5>

                {/* Descripción */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impacto conjunto */}
        <div className="bg-gradient-to-r from-verdeLogo to-green-700 rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40"></div>

          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-bold text-center mb-4">
              El impacto que logramos juntos
            </h4>
            <p className="text-white/90 text-center mb-10 max-w-2xl mx-auto">
              Cada aliado se convierte en un agente de cambio que ayuda a construir una comunidad más solidaria, justa y con mejores oportunidades para todos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impact.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-bold mb-2 text-amarilloLogo group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-white/90 text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a 
                href="/contacto" 
                className="inline-block bg-white text-verdeLogo px-10 py-4 rounded-full font-bold text-lg hover:bg-amarilloLogo hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Conviértete en Aliado Estratégico
              </a>
              <p className="text-white/80 text-sm mt-4">
                Contáctanos para conocer las diferentes formas de colaboración
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportNetworks;