import { useState } from "react";
import { FiHeart, FiHelpCircle, FiHome, FiPhone, FiSearch, FiUsers } from "react-icons/fi";
import FAQAccordion from "./FAQAccordion";

import { FaHandHoldingHeart, FaUtensils } from "react-icons/fa";

const preguntas = [
  {
    question: "¿Qué es el Banco de Alimentos de Zamora A.C.?",
    answer: "Es una organización con más de 13 años de trabajo en la región, comprometida en rescatar, clasificar y distribuir alimentos a familias en situación vulnerable, además de implementar programas sociales y comunitarios.",
    category: "general",
    icon: FiHelpCircle
  },
  {
    question: "¿Cómo puedo donar alimentos?",
    answer: "Puedes llevar alimentos no perecederos a nuestras instalaciones o puntos de recolección. También recibimos frutas, verduras, pan del día y excedentes de empresas aliadas.",
    category: "donacion",
    icon: FaUtensils
  },
  {
    question: "¿Aceptan donaciones monetarias?",
    answer: "Sí, las donaciones económicas son esenciales para cubrir transporte, operación y compra de alimentos que escasean. Puedes donar de manera individual o como empresa.",
    category: "donacion",
    icon: FiHeart
  },
  {
    question: "¿Puedo recibir un comprobante fiscal por mi donación?",
    answer: "Sí, como donataria autorizada por el SAT podemos emitir recibos deducibles de impuestos para personas físicas y empresas.",
    category: "donacion",
    icon: FiHome
  },
  {
    question: "¿Qué programas tienen activos?",
    answer: "Actualmente contamos con Comedor Comunitario BAZAC, Apadrinamientos 'Por menos hambre y más sonrisas', Talleres comunitarios, Voluntariado y campañas como Abrigando Corazones, Pequeñas Sonrisas y el Rescatón.",
    category: "general",
    icon: FiUsers
  },
  {
    question: "¿Cómo puedo ser voluntario?",
    answer: "Puedes unirte apoyando en clasificación de alimentos, armado de despensas, actividades comunitarias o en nuestras campañas. Solo necesitas disposición y ganas de ayudar.",
    category: "voluntario",
    icon: FaHandHoldingHeart
  },
  {
    question: "¿Cómo funciona el programa de apadrinamiento?",
    answer: "A través de 'Por menos hambre y más sonrisas' puedes apoyar directamente a un caso vulnerable cubriendo sus necesidades básicas de alimentación, salud y educación, mientras nosotros damos seguimiento integral.",
    category: "donacion",
    icon: FiHeart
  },
  {
    question: "¿Cómo solicito apoyo alimentario?",
    answer: "Debes acercarte a nuestro equipo de trabajo social. Evaluamos cada caso y, si cumples los criterios, se te incluye en el padrón de beneficiarios. Necesitas identificación oficial, CURP y comprobante de domicilio.",
    category: "beneficiario",
    icon: FiUsers
  },
  {
    question: "¿Qué impacto tiene su labor?",
    answer: "Cada mes entregamos más de 70,000 kg de alimentos a más de 10,000 familias en Zamora y municipios aledaños, reduciendo la inseguridad alimentaria y promoviendo hábitos más saludables.",
    category: "general",
    icon: FiHelpCircle
  },
  {
    question: "¿Qué hacen con los alimentos rescatados?",
    answer: "Son clasificados y revisados bajo normas de seguridad alimentaria. Solo distribuimos lo que es apto para consumo, reduciendo el desperdicio y cuidando el medio ambiente.",
    category: "general",
    icon: FaUtensils
  },
  {
    question: "¿Puedo donar en nombre de una empresa?",
    answer: "Sí, las empresas pueden aportar alimentos, donaciones económicas o participar en campañas. Además, pueden sumarse prestando vehículos o voluntarios para distribución.",
    category: "donacion",
    icon: FiHome
  }
];

const categories = [
  { id: "all", name: "Todas", color: "bg-gray-100 text-gray-700", activeColor: "bg-blue-600 text-white" },
  { id: "general", name: "Información General", color: "bg-blue-50 text-blue-700", activeColor: "bg-blue-600 text-white" },
  { id: "donacion", name: "Donaciones", color: "bg-green-50 text-green-700", activeColor: "bg-green-600 text-white" },
  { id: "beneficiario", name: "Beneficiarios", color: "bg-purple-50 text-purple-700", activeColor: "bg-purple-600 text-white" },
  { id: "voluntario", name: "Voluntariado", color: "bg-orange-50 text-orange-700", activeColor: "bg-orange-600 text-white" }
];

const FAQs = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const filteredPreguntas = preguntas.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchTerm("");
    setActiveAccordion(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FiHelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Preguntas Frecuentes
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas saber sobre cómo apoyar o recibir ayuda del  Banco de Alimentos de Zamora A. C.
          </p>
        </div>

        {/* Buscador */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar preguntas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filtros por categoría */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id 
                    ? category.activeColor + " shadow-lg" 
                    : category.color + " hover:shadow-md"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {(selectedCategory !== "all" || searchTerm) && (
            <div className="text-center mt-4">
              <p className="text-gray-600 mb-2">
                Mostrando {filteredPreguntas.length} de {preguntas.length} preguntas
                {searchTerm && ` para "${searchTerm}"`}
              </p>
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>

        {/* FAQs */}
        {filteredPreguntas.length > 0 ? (
          <FAQAccordion
            faqs={filteredPreguntas}
            activeIndex={activeAccordion}
            onToggle={toggleAccordion}
            searchTerm={searchTerm}
          />
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiSearch className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">No se encontraron preguntas</h3>
            <p className="text-gray-500 mb-6">
              No hay preguntas que coincidan con tu búsqueda o filtro seleccionado.
            </p>
            <button
              onClick={clearFilters}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Ver todas las preguntas
            </button>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white text-center">
          <FiPhone className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">¿No encontraste lo que buscas?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Nuestro equipo está aquí para ayudarte. No dudes en contactarnos directamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-colors cursor-pointer">
                Contactar ahora
              </button>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQs;