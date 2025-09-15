import { FaEnvelope, FaHeart, FaPhone } from "react-icons/fa";

const ContactBanner = () => {
  return (
    <div className="bg-gradient-to-br from-verde-500 to-verde-900 p-6 m-6 rounded-xl text-white relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white/30 rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 p-2 rounded-lg">
            <FaHeart className="text-white text-lg" />
          </div>
          <h3 className="text-lg font-bold">¿Necesitas ayuda?</h3>
        </div>
        
        <p className="text-white/90 text-sm mb-4 leading-relaxed">
          Nuestro equipo está listo para orientarte y ayudarte a encontrar la mejor forma de participar
        </p>
        
        <div className="space-y-2">
          <a 
            href={`tel:${import.meta.env.VITE_BAMXTelefono}`}
            className="flex items-center gap-3 bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-200 group"
          >
            <FaPhone className="text-white text-sm group-hover:scale-110 transition-transform" />
            <span className="text-white text-sm font-medium">{import.meta.env.VITE_BAMXTelefono}</span>
          </a>
          
          <a 
            href={`mailto:${import.meta.env.VITE_BAMXCorreoDireccion}`} 
            className="flex items-center gap-3 bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-200 group"
          >
            <FaEnvelope className="text-white text-sm group-hover:scale-110 transition-transform" />
            <span className="text-white text-sm font-medium">Enviar correo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;