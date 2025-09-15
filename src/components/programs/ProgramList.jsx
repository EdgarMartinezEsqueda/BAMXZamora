import { FaArrowRight, FaDonate, FaFirstAid, FaGift, FaHandsHelping, FaHeartbeat, FaUtensils } from "react-icons/fa";

const iconMap = { FaHandsHelping, FaGift, FaDonate, FaFirstAid, FaHeartbeat, FaUtensils };

const ProgramList = ({ programas, activeId, onSelect }) => {
    return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Programas Disponibles</h3>
        <p className="text-gray-600 text-sm">Selecciona un programa para conocer más detalles</p>
      </div>
      
      <div className="space-y-2">
        {programas.map((programa, index) => {
          const IconComponent = iconMap[programa.iconName];
          const isActive = activeId === programa.id;
          
          return (
            <button
              key={programa.id}
              onClick={() => onSelect(programa.id)}
              className={`group w-full p-4 rounded-xl text-left transition-all duration-300 border-2 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-amarillo-500 to-amarillo-600 text-white border-amarillo-500 shadow-lg scale-105"
                  : "hover:bg-gray-50 border-gray-100 hover:border-rojo-500/30 hover:shadow-md"
              }`}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? "bg-white/20 text-white" 
                    : "bg-rojo-500/10 text-rojo-500 group-hover:bg-rojo-500/20"
                }`}>
                  {IconComponent && <IconComponent className="text-xl" />}
                </div>
                
                <div className="flex-1">
                  <h4 className={`font-semibold transition-colors ${
                    isActive ? "text-white" : "text-gray-800 group-hover:text-rojo-500"
                  }`}>
                    {programa.title}
                  </h4>
                  <p className={`text-sm mt-1 ${
                    isActive ? "text-white/80" : "text-gray-500"
                  }`}>
                    {programa.description.slice(0, 60)}...
                  </p>
                </div>

                <FaArrowRight className={`text-sm transition-all duration-300 ${
                  isActive 
                    ? "text-white translate-x-1" 
                    : "text-gray-400 group-hover:text-rojo-500 group-hover:translate-x-1"
                }`} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ProgramList;