import { useState } from "react";
import { FaBook, FaChalkboardTeacher, FaGift, FaHandsHelping, FaHeart, FaNewspaper, FaUtensils } from "react-icons/fa";

const ProgramsAbout = () => {
  const [activeCategory, setActiveCategory] = useState("programas");

  const categories = [
    { id: "programas", label: "Programas", icon: <FaUtensils /> },
    { id: "campanas", label: "Campañas", icon: <FaGift /> }
  ];

  const programs = [
    {
      icon: <FaUtensils className="w-6 h-6" />,
      title: "Comedor Comunitario",
      description: "Brindamos desayunos nutritivos y accesibles a personas en situación de vulnerabilidad y trabajadores. Un espacio de solidaridad donde la alimentación se convierte en apoyo mutuo.",
      features: ["Desayunos a bajo costo", "Menú nutritivo", "Atención diaria"],
      color: "bg-green-500",
      image: "/assets/images/programas/comedor.webp"
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Apadrinamientos",
      description: "\"Por menos hambre y más sonrisas\" conecta a padrinos con casos vulnerables, brindando alimentación y acompañamiento integral para mejorar su calidad de vida.",
      features: ["Seguimiento nutricional", "Apoyo psicológico", "Consejería personalizada"],
      color: "bg-red-500",
      image: "/assets/images/beneficiarios/3.webp"
    },
    {
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      title: "Talleres",
      description: "Ofrecemos talleres mensuales gratuitos o a bajo costo que fortalecen el bienestar, la autosuficiencia y la participación activa de la comunidad.",
      features: ["Nutrición", "Desarrollo personal", "Habilidades prácticas"],
      color: "bg-blue-500",
      image: "/assets/images/beneficiarios/7.webp"
    },
    {
      icon: <FaHandsHelping className="w-6 h-6" />,
      title: "Voluntariado",
      description: "El corazón de nuestras acciones. Personas comprometidas que donan tiempo, talento y energía para transformar vidas a través del servicio comunitario.",
      features: ["Clasificación de alimentos", "Eventos y campañas", "Apoyo en programas"],
      color: "bg-purple-500",
      image: "/assets/images/beneficiarios/6.webp"
    },
    {
      icon: <FaNewspaper className="w-6 h-6" />,
      title: "Boletín Manitas",
      description: "Nuestro espacio de comunicación donde compartimos noticias, testimonios y resultados de impacto, fortaleciendo la transparencia y cercanía.",
      features: ["Noticias mensuales", "Testimonios", "Resultados de impacto"],
      color: "bg-amarilloLogo",
      image: "/assets/images/beneficiarios/22.webp"
    },
    {
      icon: <FaBook className="w-6 h-6" />,
      title: "Taller de Lectura",
      description: "Cada jueves a las 11:00 am nos reunimos en un ambiente acogedor para compartir historias, reflexiones y nutrir la mente en comunidad.",
      features: ["Todos los jueves", "Ambiente relajante", "Abierto al público"],
      color: "bg-indigo-500",
      image: "/assets/images/beneficiarios/20.webp"
    }
  ];

  const campaigns = [
    {
      icon: <FaGift className="w-6 h-6" />,
      title: "Dispensario de Medicamento",
      description: "Colecta anual de medicamentos que entregamos gratuitamente con receta vigente, apoyando la economía de nuestros beneficiarios.",
      period: "Anual",
      color: "bg-blue-600"
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Pequeñas Sonrisas",
      description: "Rescate de juguetes y ropa invernal para niños de colonias vulnerables. Identificamos factores de riesgo e implementamos estrategias de apoyo.",
      period: "Navideña",
      color: "bg-red-500"
    },
    {
      icon: <FaHandsHelping className="w-6 h-6" />,
      title: "Abrigando Corazones",
      description: "Colecta invernal de cobijas y ropa abrigadora para adultos mayores en situación de calle, alcanzando casos vulnerables no identificados.",
      period: "Invernal",
      color: "bg-cyan-500"
    },
    {
      icon: <FaUtensils className="w-6 h-6" />,
      title: "Rescatón",
      description: "Campaña educativa en escuelas para generar conciencia sobre reducción de desperdicio de alimentos a través de dinámicas lúdicas y teatro.",
      period: "Escolar",
      color: "bg-green-600"
    },
    {
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      title: "Sábado Cultural",
      description: "Programa de formación para niños de 6 a 12 años de la Colonia Valencia, transformando espacios educativos y creando agentes de cambio.",
      period: "Semanal",
      color: "bg-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amarilloLogo/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-verdeLogo/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-verdeLogo font-edu-hand text-xl font-semibold mb-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-amarilloLogo rounded-full animate-pulse"></span>
            Nuestro Trabajo
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Programas y <span className="text-amarilloLogo">Campañas</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Iniciativas diseñadas para transformar vidas y construir una comunidad más solidaria
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full shadow-lg p-1 border border-gray-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-verdeLogo text-white shadow-md"
                    : "text-gray-600 hover:text-verdeLogo"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programas */}
        {activeCategory === "programas" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100"
              >
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Icono flotante */}
                  <div className={`absolute top-4 right-4 ${program.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {program.icon}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-verdeLogo transition-colors">
                    {program.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className={`w-1.5 h-1.5 ${program.color} rounded-full`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Campañas */}
        {activeCategory === "campanas" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 relative overflow-hidden"
              >
                {/* Decoración de fondo */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${campaign.color} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>

                <div className="relative z-10">
                  {/* Icono y periodo */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${campaign.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {campaign.icon}
                    </div>
                    <span className={`${campaign.color} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                      {campaign.period}
                    </span>
                  </div>

                  {/* Título */}
                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-verdeLogo transition-colors">
                    {campaign.title}
                  </h4>

                  {/* Descripción */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {campaign.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-verdeLogo to-green-600 rounded-2xl p-8 shadow-xl">
            <h4 className="text-white text-2xl font-bold mb-3">
              ¿Quieres participar en nuestros programas?
            </h4>
            <p className="text-white/90 mb-6 max-w-xl">
              Únete como voluntario, beneficiario o aliado estratégico
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/contacto" 
                className="bg-white text-verdeLogo px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contáctanos
              </a>
              <a 
                href="/programas#voluntariado" 
                className="bg-amarilloLogo text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Ser Voluntario
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsAbout;