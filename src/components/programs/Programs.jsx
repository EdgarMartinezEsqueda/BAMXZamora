import ContactBanner from "components/contact/ContactBanner";
import { programas } from "components/programs/programasData";
import ProgramDetail from "components/programs/ProgramDetail";
import ProgramList from "components/programs/ProgramList";
import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

const Programas = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [activeId, setActiveId] = useState(programas[0].id);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Efecto para manejar cambios en el hash de la URL
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const programExists = programas.find(p => p.id === hash);
      if (programExists) {
        setActiveId(hash);
        
        // Scroll suave a la sección después de un pequeño delay
        setTimeout(() => {
          const programasSection = document.getElementById("programas-section");
          if (programasSection) {
            programasSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [location.hash, location.pathname]);

  const handleSelect = (id) => {
    setIsLoading(true);
    setActiveId(id);
    navigate(`#${id}`, { replace: true });
    
    // Simular loading para transición suave
    setTimeout(() => setIsLoading(false), 100);
    
    const programasSection = document.getElementById("programas-section");
    if (programasSection) {
      programasSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const activeProgram = programas.find(p => p.id === activeId);

  return (
    <section id="programas-section" className="py-16 px-4 max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-white">
      {/* Header mejorado */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-verdeLogo/10 to-amarilloLogo/10 border border-verdeLogo/20 rounded-full px-6 py-3 mb-6">
          <FaUsers className="text-verdeLogo text-lg" />
          <span className="text-verdeLogo font-semibold text-sm tracking-wide">
            Formas de participar
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-gray-800">Nuestros</span>
          <span className="text-transparent bg-gradient-to-r from-verdeLogo to-amarilloLogo bg-clip-text"> Programas</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Descubre las diferentes formas en que puedes contribuir a nuestra misión de combatir el hambre y fortalecer nuestra comunidad
        </p>
      </div>
      
      <div className="flex flex-col xl:flex-row gap-8">
        {/* Sidebar mejorado */}
        <div className="xl:w-1/3">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 sticky top-8">
            <ProgramList 
              programas={programas} 
              activeId={activeId} 
              onSelect={handleSelect} 
            />
            <ContactBanner />
          </div>
        </div>

        {/* Contenido principal mejorado */}
        <div className="xl:w-2/3">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {activeProgram && (
              <ProgramDetail 
                program={activeProgram} 
                activeAccordion={activeAccordion}
                toggleAccordion={toggleAccordion}
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programas;